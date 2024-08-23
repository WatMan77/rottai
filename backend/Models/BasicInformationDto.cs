using System.Text.Json.Serialization;

namespace RottAI.Models;

public class BasicInformationDto
{
    [JsonPropertyName("name")]
    public string Name { get; init; } = string.Empty;
    [JsonPropertyName("age")]
    public int Age { get; init; } = 0;
    [JsonPropertyName("email")]
    public string Email { get; init; } = string.Empty;
    [JsonPropertyName("profile")]
    public string Profile { get; init; } = string.Empty;
    [JsonPropertyName("address")]
    public string Address { get; init; } = string.Empty;
}