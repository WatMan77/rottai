import { useState } from "react";
import Skills from "./Skills.jsx";
import Phone from "./Phone.jsx";
import { CV, BasicInfo, Experience } from "./cv.js";
import Languages from "./Languages.jsx";

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

  // Function to add a new skill with default values
  const addSkillValue = (text = "", range = 0) => {
    if(typeof text !== "string")
        text ="";

    setSkills([...skills, { text: text, range: range }]);
  };

  // Function to handle changes in text input for skills
  const handleTextChange = (index, event) => {
    const newSkills = [...skills];
    newSkills[index].text = event.target.value;
    setSkills(newSkills);
  };

  // Function to handle changes in range slider for skills
  const handleRangeChange = (index, event) => {
    const newSkills = [...skills];
    newSkills[index].range = Number(event.target.value);
    setSkills(newSkills);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
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

    // You can now use the cv object, e.g., send it to a server or display it
    console.log("CV: ", cv);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>CV Information</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Phone:
          <Phone phone={phone} setPhone={setPhone} />
        </label>
        <br />
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        <br />
        <label>
          Profile:
          <input
            type="text"
            name="profile"
            value={profile}
            onChange={(e) => setProfile(e.target.value)}
          />
        </label>
        <br />
        <label>
          Hobbies:
          <input
            type="text"
            name="hobbies"
            value={hobbies}
            onChange={(e) => setHobbies(e.target.value)}
          />
        </label>
        <br />
        <label>
          Experience:
          <textarea
            name="experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            placeholder="Enter experiences, each on a new line"
          ></textarea>
        </label>
        <br />
        <label>
          Highlights:
          <textarea
            name="highlights"
            value={highlights}
            onChange={(e) => setHighlights(e.target.value)}
            placeholder="Enter highlights, each on a new line"
          ></textarea>
        </label>
        <br />
        <label>Skills:</label>
        <div id="skills">
          {/* Render each skill with text input and slider */}
          {skills.map((skill, index) => (
            <div key={index} style={{ marginBottom: "30px" }}>
              <input
                type="text"
                value={skill.text}
                onChange={(e) => handleTextChange(index, e)}
                placeholder="Skill name"
              />
              <br />
              <input
                type="range"
                min="0"
                max="5"
                step="0.001"
                value={skill.range}
                onChange={(e) => handleRangeChange(index, e)}
              />
              <br />
              <span>{skill.range}/5</span> {/* Display current range value */}
              <br />
            </div>
          ))}
        </div>
        <Skills
          addSkillValue={addSkillValue}
          skills={skills}
          setSkills={setSkills}
          style={{ marginBottom: "30px" }}
        />
        <Languages langs={langs} setLangs={setLangs} />
        <br />
        <button
          style={{ marginBottom: "30px" }}
          type="button"
          onClick={() => addSkillValue()}
        >
          Add Skill
        </button>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CVForm;
