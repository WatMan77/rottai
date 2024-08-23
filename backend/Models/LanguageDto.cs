using System.Text.Json.Serialization;

namespace RottAI.Models;

public class LanguageDto
{
    [JsonPropertyName("language")]
    public string Language { get; init; } = string.Empty;
    [JsonPropertyName("proficiency")]
    public string Proficiency { get; init;} = string.Empty;
}