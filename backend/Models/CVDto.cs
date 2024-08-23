using System.Text.Json.Serialization;

namespace RottAI.Models;

public class CVDto
{
    [JsonPropertyName("basics")]
    public BasicInformationDto Basics { get; init; } = new();
    [JsonPropertyName("experience")]
    public ExperienceDto Experience { get; init;} = new();
}