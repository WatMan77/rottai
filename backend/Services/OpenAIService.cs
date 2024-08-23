#pragma warning disable OPENAI001

using System.ClientModel;
using OpenAI;
using OpenAI.Assistants;
using RottAI.Models;

namespace RottAI.Services;

public class OpenAIService
{
    private readonly AssistantClient _assistantClient;
    public OpenAIService()
    {
        _assistantClient = new AssistantClient(new ApiKeyCredential(Environment.GetEnvironmentVariable("OPENAI_API_KEY")!));
    }

    public async Task<ThreadDto> StartThread(string initialPrompt)
    {
        var assistantId = Environment.GetEnvironmentVariable("ASSISTANT_ID");
        var assistant = await _assistantClient.GetAssistantAsync(assistantId);
        var run = await _assistantClient.CreateThreadAndRunAsync(assistant,
            new ThreadCreationOptions{
                InitialMessages = {
                    new ThreadInitializationMessage(
                    [
                        MessageContent.FromText(initialPrompt),
                    ]),
                }
            });
        return await AwaitAssistantResponse(run.Value.ThreadId, run.Value.Id);
    }

    public async Task<ThreadDto> GetThreadMessages(string threadId)
    {
        var messages = await _assistantClient.GetMessagesAsync(threadId, ListOrder.NewestFirst).ToListAsync();
        return new ThreadDto(GetMessages(messages), threadId);
    }

    private async Task<ThreadDto> AwaitAssistantResponse(string threadId, string runId)
    {
        var threadRun = await _assistantClient.GetRunAsync(threadId, runId);
        do
        {
            Thread.Sleep(TimeSpan.FromSeconds(1));
            threadRun = await _assistantClient.GetRunAsync(threadId, runId);
        } while (!threadRun.Value.Status.IsTerminal);
        var messages = await _assistantClient.GetMessagesAsync(threadId, ListOrder.NewestFirst).ToListAsync();
        return new ThreadDto(GetMessages(messages), threadId);
    }

    private static List<string> GetMessages(List<ThreadMessage> messages)
    {
        var outputMessages = new List<string>();
        foreach (MessageContent contentItem in messages.SelectMany(x => x.Content))
        {
            if (!string.IsNullOrEmpty(contentItem.Text))
            {
                outputMessages.Add(contentItem.Text);
            }
        }
        return outputMessages;
    }
}
#pragma warning restore OPENAI001