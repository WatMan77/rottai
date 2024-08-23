using Microsoft.AspNetCore.Mvc;
using RottAI.Models;
using RottAI.Services;

namespace RottAI.Controllers;

[ApiController]
[Produces("application/json")]
[Consumes("application/json")]
[Route("[controller]")]
public class ApiController : Controller
{

    private readonly OpenAIService _openAIService;
    public ApiController(OpenAIService openAIService)
    {
        _openAIService = openAIService;
    }

    [HttpGet("{threadId}")]
    public async Task<IActionResult> GetThreadMessages(string threadId)
    {
        var messages = await _openAIService.GetThreadMessages(threadId);
        return new OkObjectResult(messages); 
    }

    [HttpPost]
    public async Task<IActionResult> StartThread([FromBody] CVDto CV)
    {
        var messages = await _openAIService.StartThread(Constants.RottAIConstants.InitialPrompt);
        return new OkObjectResult(messages);
    }
}
