using System.Text.Json.Serialization;

namespace RottAI.Models;

public class LanguageDto
{
    [JsonPropertyName("language")]
    public string Language { get; init; } = string.Empty;
    [JsonPropertyName("rating")]
    public int Rating { get; init;} = 0;
}