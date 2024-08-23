using System.Text;
using RottAI.Models;

namespace RottAI.Builders;

public class PromptBuilder
{
    public StringBuilder _promptBuilder = new();
    public string Build(CVDto CV)
    {
        AddIntro();
        AddBasics(CV.Basics);
        AddExperience(CV.Experience);
        return _promptBuilder.ToString();
    }

    public void AddIntro()
    {
        _promptBuilder.AppendLine("I want to create a CV with the following information about me:");
    }

    public void AddBasics(BasicInformationDto basics)
    {
        _promptBuilder.AppendLine("Basic information:");
        foreach (var property in basics.GetType().GetProperties())
        {
            _promptBuilder.AppendLine($"- {property.Name}: {property.GetValue(basics)}");
        }
    }

    public void AddExperience(ExperienceDto experience)
    {
        _promptBuilder.AppendLine("My hobbies include:");
        foreach (var hobby in experience.Hobbies)
        {
            _promptBuilder.AppendLine($"- {hobby}");
        }

        _promptBuilder.AppendLine("My main work experiences include:");
        foreach (var experiences in experience.Experiences)
        {
            _promptBuilder.AppendLine($"- {experiences}");
        }

        _promptBuilder.AppendLine("I have acquired relevant skills in:");
        foreach (var skill in experience.Skills)
        {
            _promptBuilder.AppendLine($"- {skill.Description}, my colleagues rate me as {skill.Rating} out of 5 in terms of proficiency");
        }

        _promptBuilder.AppendLine("I also speak the following languages:");
        foreach (var language in experience.Languages)
        {
            _promptBuilder.AppendLine($"- {language.Language}, in which I am a {language.Proficiency} in terms of proficiency");
        }

        _promptBuilder.AppendLine("The highlights of achievements include:");
        foreach (var highlight in experience.Highlights)
        {
            _promptBuilder.AppendLine($"- {highlight}");
        }
    }

}