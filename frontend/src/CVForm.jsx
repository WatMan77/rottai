import { useState } from "react";
import Skills from "./Skills.jsx";
import Phone from "./Phone.jsx";
import Doxx from "./Doxx.jsx";
import { CV, BasicInfo, Experience } from "./cv.js";
import Languages from "./Languages.jsx";
import { SingleFileUploader } from "./fileUploader.jsx";
import * as SC from "./CVForm.styles.js";
import * as apiService from "./apiService.js";
import styled from "styled-components";
import { H1 } from "./common/Text.jsx";
import { CustomInput, CustomSelect } from "./common/Inputs.jsx";

function CVForm() {
  // State to manage the form fields and the list of skills
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [profile, setProfile] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [phone, setPhone] = useState("");
  const [experience, setExperience] = useState(""); // To be split into multiple entries if needed
  const [skills, setSkills] = useState([{ text: "", range: 0 }]);
  const [langs, setLangs] = useState([{ lang: "", level: "Don't know" }]); // Array of language objects
  const [highlights, setHighlights] = useState(""); // To be split into multiple entries if needed
  const [pdfImage, setPdfImage] = useState(null);

  // Function to add a new skill with default values
  const addSkillValue = (text = "", range = 0) => {
    if (typeof text !== "string") text = "";

    setSkills([...skills, { text: text, range: range }]);
  };

  const addLanguage = () => {
    setLangs([...langs, { lang: "", level: "Don't know" }]);
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
    const basicInfo = new BasicInfo(
      name,
      age,
      email,
      profile,
      hobbies,
      address
    );

    const experiences = new Experience(
      experienceArray,
      skills,
      langs,
      highlightsArray
    );

    const cv = new CV(basicInfo, experiences);
    console.log(await apiService.post(cv))

    // You can now use the cv object, e.g., send it to a server or display it
    console.log("CV: ", cv);
  };
  return (
    <SC.CVFormContainer>
      <H1>CV Information</H1>
      <form onSubmit={handleSubmit}>
      <CustomInput
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="select"
        />
        <CustomSelect
          label='name'
          options={[
            // empty first
            { value: "", label: "" },
            { value: "1", label: "1" },
            { value: "2", label: "2" },
            { value: "3", label: "3" },
          ]}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <CustomInput
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <CustomInput
          label="Age"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <Phone phone={phone} setPhone={setPhone} />

        <CustomInput
          label="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <Doxx setAddress={setAddress} />

        <CustomInput
          label="Profile"
          value={profile}
          onChange={(e) => setProfile(e.target.value)}
        />
        <SingleFileUploader
          setBase64Image={setPdfImage}
        />
        {pdfImage && <img src={`${pdfImage}`} />}
        <SC.InputField>
        <label>
          Hobbies:
          <input
            type="text"
            name="hobbies"
            value={hobbies}
            onChange={(e) => setHobbies(e.target.value)}
          />
        </label>
        </SC.InputField>
        <SC.InputField>
        <label>
          Experience:
          <textarea
            name="experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            placeholder="Enter experiences, each on a new line"
          ></textarea>
        </label>
        </SC.InputField>
        <SC.InputField>
        <label>
          Highlights:
          <textarea
            name="highlights"
            value={highlights}
            onChange={(e) => setHighlights(e.target.value)}
            placeholder="Enter highlights, each on a new line"
          ></textarea>
        </label>
        </SC.InputField>
        <SC.InputField>
        <label>Skills:</label>
        <Skills
          addSkillValue={addSkillValue}
          skills={skills}
          setSkills={setSkills}
          style={{ marginBottom: "30px" }}
        />
        </SC.InputField>
        <SC.InputField>
        <Languages
          langs={langs}
          setLangs={setLangs}
          addLanguage={addLanguage}
        />
        </SC.InputField>
        <SC.Button type="submit">Submit</SC.Button>
      </form>
    </SC.CVFormContainer>
  );
}

export default CVForm;
