using System.Text.Json.Serialization;

namespace RottAI.Models;

public class SkillDto
{
    [JsonPropertyName("desc")]
    public string Description { get; init; } = string.Empty;
    [JsonPropertyName("rating")]
    public float Rating { get; init;} = 0;
}