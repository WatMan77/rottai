using System.Text.Json.Serialization;

namespace RottAI.Models;

public class ExperienceDto
{
    [JsonPropertyName("hobbies")]
    public List<string> Hobbies { get; init; } = [];
    [JsonPropertyName("exp")]
    public List<string> Experiences { get; init; } = [];
    [JsonPropertyName("skills")]
    public List<SkillDto> Skills { get; init; } = [];
    [JsonPropertyName("languages")]
    public List<LanguageDto> Languages { get; init; } = [];
    [JsonPropertyName("highlights")]
    public List<string> Highlights { get; init; } = [];
}