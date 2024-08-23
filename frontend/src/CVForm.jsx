import { useState } from "react";
import Skills from "./Skills.jsx";
import Phone from "./Phone.jsx";
import { CV, BasicInfo, Experience } from "./cv.js";

function CVForm() {
  // State to manage the form fields and the list of skills
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [profile, setProfile] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [phone, setPhone] = useState("");
  const [experience, setExperience] = useState("");
  const [skills, setSkills] = useState([{ text: "", range: 0 }]);
  const [languages, setLanguages] = useState([]);
  const [highlights, setHighlights] = useState("");

  // Function to add a new skill with default values
  const addSkillValue = (text = "", range = 0) => {
    setSkills([...skills, { text: text, range: range }]);
  };

  // Function to handle changes in text input
  const handleTextChange = (index, event) => {
    const newSkills = [...skills];
    newSkills[index].text = event.target.value;
    setSkills(newSkills);
  };

  // Function to handle changes in range slider
  const handleRangeChange = (index, event) => {
    const newSkills = [...skills];
    newSkills[index].range = Number(event.target.value);
    setSkills(newSkills);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Collect all form values

    const basicInfo = new BasicInfo(
      name,
      age,
      email,
      address,
      profile,
      hobbies
    );

    const experiences = new Experience(
      experience,
      skills,
      languages,
      highlights
    );

    const cv = new CV(basicInfo, experiences);

    // You can now use formData, for example, send it to a server or display it
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
          Experience:
          <textarea
            name="experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
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
          style={{ marginBottom: "30px" }}
        />
        <br />
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
