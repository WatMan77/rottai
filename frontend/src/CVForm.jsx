import { useState } from "react";
import Skills from "./Skills.jsx";
import Phone from "./Phone.jsx";
import Doxx from "./Doxx.jsx";
import { CV, BasicInfo, Experience } from "./cv.js";
import Languages from "./Languages.jsx";
import { SingleFileUploader } from "./FileUploader.jsx";
import * as SC from "./CVForm.styles.js";
import { useNavigate } from "react-router-dom";
import * as apiService from "./apiService.js";
import styled from "styled-components";
import { H1, H2 } from "./common/Text.jsx";
import {
  CustomInput,
  CustomSelect,
  CustomTextarea,
  InputsWrapper,
  InputsWrapper2,
} from "./common/Inputs.jsx";
import CvPdf from "./CvPdf.jsx";

function CVForm() {
  // State to manage the form fields and the list of skills
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [profile, setProfile] = useState("");
  const [hobbies, setHobbies] = useState([]);
  const [phone, setPhone] = useState("");
  const [experience, setExperience] = useState(""); // To be split into multiple entries if needed
  const [skills, setSkills] = useState([]);
  const [langs, setLangs] = useState([]); // Array of language objects
  const [highlights, setHighlights] = useState(""); // To be split into multiple entries if needed
  const [pdfImage, setPdfImage] = useState(null);

  const navigate = useNavigate();

  // Function to add a new skill with default values
  const addSkillValue = (text = "", range = 0) => {
    if (typeof text !== "string") text = "";

    setSkills([...skills, { desc: text, rating: range }]);
  };

  const addLanguage = () => {
    setLangs([...langs, { language: "", proficiency: "Don't know" }]);
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Split experience and highlights into arrays if needed
    const experienceArray = experience
      .split("\n")
      .filter((entry) => entry.trim() !== "");
    const highlightsArray = highlights
      .split("\n")
      .filter((entry) => entry.trim() !== "");

    // Create BasicInfo and Experience objects
    const basicInfo = new BasicInfo(name, age, email, profile, address, phone);

    const experiences = new Experience(
      experienceArray,
      skills,
      langs,
      highlightsArray,
      hobbies
    );

    const cv = new CV(basicInfo, experiences);
    const response = await apiService.post(cv);
    console.log(response);

    navigate("/cv", { state: { cv: response.messages[0], image: pdfImage } });

    // You can now use the cv object, e.g., send it to a server or display it
  };

  const getEmailOptions = () => {
    const jobAvoidingEmails = [
      { label: "whocares87@gmail.com", value: "whocares87@gmail.com" },
      { label: "nottryingtoday@yahoo.com", value: "nottryingtoday@yahoo.com" },
      {
        label: "whateverman2024@hotmail.com",
        value: "whateverman2024@hotmail.com",
      },
      {
        label: "illfigureitoutlater@rott.ai",
        value: "illfigureitoutlater@rott.ai",
      },
      { label: "lazybones44@gmail.com", value: "lazybones44@gmail.com" },
      { label: "noplan22@yahoo.com", value: "noplan22@yahoo.com" },
      {
        label: "chillinforever56@hotmail.com",
        value: "chillinforever56@hotmail.com",
      },
      { label: "whatswork2024@rott.ai", value: "whatswork2024@rott.ai" },
      { label: "couchpotato99@gmail.com", value: "couchpotato99@gmail.com" },
      {
        label: "notinterestedjoe@yahoo.com",
        value: "notinterestedjoe@yahoo.com",
      },
      {
        label: "mehwhatever78@hotmail.com",
        value: "mehwhatever78@hotmail.com",
      },
      { label: "notbothered@rott.ai", value: "notbothered@rott.ai" },
      {
        label: "illgetaroundtoit2024@gmail.com",
        value: "illgetaroundtoit2024@gmail.com",
      },
      {
        label: "dontwannadoit55@yahoo.com",
        value: "dontwannadoit55@yahoo.com",
      },
      {
        label: "whocaresnojob@hotmail.com",
        value: "whocaresnojob@hotmail.com",
      },
      { label: "procrastinator33@rott.ai", value: "procrastinator33@rott.ai" },
      {
        label: "lazyandlovinit2024@gmail.com",
        value: "lazyandlovinit2024@gmail.com",
      },
      {
        label: "workisoverrated@yahoo.com",
        value: "workisoverrated@yahoo.com",
      },
      {
        label: "stillnothappening@hotmail.com",
        value: "stillnothappening@hotmail.com",
      },
      { label: "tomorrowmaybe@rott.ai", value: "tomorrowmaybe@rott.ai" },
    ];
      const formattedName = name.replace(/\s+/g, '.');
  
  
  
    if (name) {
      return [
        { label: "", value: "" },
        {
          label: `${formattedName}@gmail.com`,
          value: `${formattedName}@gmail.com`.toLowerCase(),
        },
        {
          label: `${formattedName}@hotmail.com`,
          value: `${formattedName}@hotmail.com`.toLowerCase(),
        },
        {
          label: `${formattedName}@rott.ai`,
          value: `${formattedName}@rott.ai`.toLowerCase(),
        },
        ...jobAvoidingEmails,
      ];
    } else {
      return [{ label: "", value: "" }, ...jobAvoidingEmails];
    }
  };

  return (
    <SC.CVFormContainer>
      <H1>{`CV Information`}</H1>
      <Stack>
        <CustomInput
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="select"
        />

        <CustomSelect
          label="Email"
          value={email}
          options={getEmailOptions()}
          onChange={(e) => setEmail(e.target.value)}
        />

        <CustomInput
          label="Age"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <Phone phone={phone} setPhone={setPhone} />

        <InputsWrapper>
          <CustomInput
            label="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Doxx setAddress={setAddress} />
        </InputsWrapper>

        <CustomTextarea
          label="Profile"
          value={profile}
          onChange={(e) => setProfile(e.target.value)}
        />
        <SingleFileUploader pdfImage={pdfImage} setBase64Image={setPdfImage} />
        <SC.InputField>
          <label>
            Hobbies:
            <input
              type="text"
              name="hobbies"
              value={hobbies}
              onChange={(e) => setHobbies(e.target.value.split(","))}
            />
          </label>
        </SC.InputField>
        <SC.InputField>
          <CustomTextarea
            label="Experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
        </SC.InputField>
        <SC.InputField>
          <CustomTextarea
            label="Highlights"
            value={highlights}
            onChange={(e) => setHighlights(e.target.value)}
          />
        </SC.InputField>
        <SC.InputField>
          <InputsWrapper2>
            <H2>Skills:</H2>
            <Skills
              addSkillValue={addSkillValue}
              skills={skills}
              setSkills={setSkills}
              style={{ marginBottom: "30px" }}
            />
          </InputsWrapper2>
        </SC.InputField>
        <SC.InputField>
          <Languages
            langs={langs}
            setLangs={setLangs}
            addLanguage={addLanguage}
          />
        </SC.InputField>
        <SC.Button onClick={handleSubmit}>Submit</SC.Button>
      </Stack>
    </SC.CVFormContainer>
  );
}

const Stack = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export default CVForm;
