import styled from "styled-components";
import { CustomInput, InputsWrapper2 } from "./common/Inputs";
import { H2 } from "./common/Text";

// eslint-disable-next-line react/prop-types
const Languages = ({ langs, setLangs, addLanguage }) => {

  // Function to handle changes in text input
  const handleTextChange = (index, event) => {
    const newLangs = [...langs];
    newLangs[index].language = event.target.value;
    setLangs(newLangs);
  };

  // Function to handle changes in range slider
  const handleLevelChange = (index, event) => {
    const newLangs = [...langs];
    console.log(event.target.value);
    if(event.target.value === "0") {
      newLangs[index].proficiency = "Don't know";
    } else if(event.target.value === "1") {
      newLangs[index].proficiency = "Beginner";
    } else if(event.target.value === "2") {
      newLangs[index].proficiency = "Intermediate";
    } else if(event.target.value === "3") {
      newLangs[index].proficiency = "Advanced";
    } else if(event.target.value === "4") {
      newLangs[index].proficiency = "Fluent";
    } else if(event.target.value === "5") {
      newLangs[index].proficiency = "Native";
    } else if (event.target.value === "6") {
      newLangs[index].proficiency = "I created it";
    }
    setLangs(newLangs);
  };

  const setDefaults = () => {
    setLangs([
      { language: "Finnish", proficiency: "Native" },
      { language: "English", proficiency: "Intermediate" },
      { language: "Swedish", proficiency: "Don't know" },
    ]);
  };

  const getLangValue = (proficiency) => {
    if(proficiency === "Don't know") {
      return "0";
    } else if(proficiency === "Beginner") {
      return "1";
    } else if(proficiency === "Intermediate") {
      return "2";
    } else if(proficiency === "Advanced") {
      return "3";
    } else if(proficiency === "Fluent") {
      return "4";
    } else if(proficiency === "Native") {
      return "5";
    } else if(proficiency === "I created it") {
      return "6";
    }
  }

  return (
    <>
      <div id="languages">
        <InputsWrapper2>
          <H2>Languages:</H2>
          {/* eslint-disable-next-line react/prop-types */}
          {langs.map((lang, index) => (
            <LanguageWrapper key={index}>
              <CustomInput
                placeholder="Language"
                value={lang.language}
                onChange={(e) => handleTextChange(index, e)}
              />
              <input
                type="range"
                min="0"
                max="6"
                step="1"
                value={getLangValue(lang.proficiency)}
                onChange={(e) => handleLevelChange(index, e)}
              />
              <span>{lang.proficiency}</span>
            </LanguageWrapper>
          ))}
          <ButtonWrapper>
            <button type="button" onClick={addLanguage}>
              Add Language
            </button>
            <button type="button" onClick={setDefaults}>
              Set defaults
            </button>
          </ButtonWrapper>
        </InputsWrapper2>
      </div>
    </>
  );
};

export default Languages;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-bottom: 24px;
`;

const LanguageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
  margin-bottom: 24px;
`;
