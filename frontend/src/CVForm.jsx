import React, { useState } from 'react';
import Skills from './Skills.jsx';


function CVForm() {
  // State to manage the list of skills (with text and slider values)
  const [skills, setSkills] = useState([{ text: '', range: 0 }]);

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

  return (
    <div>
      <h1>CV Information</h1>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Phone:
          <input type="tel" name="phone" />
        </label>
        <br />
        <label>
          Experience:
          <textarea name="experience"></textarea>
        </label>
        <br />
        <label>Skills:</label>
        <div id="skills">
          {/* Render each skill with text input and slider */}
          {skills.map((skill, index) => (
            <div key={index} style={{ marginBottom: '30px' }}>
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
          <Skills addSkillValue={addSkillValue} style={{ marginBottom: '30px' }} />
          <br /><br />

        <button style={{ marginBottom: '30px' }}  type="button" onClick={addSkillValue}>Add Skill</button>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CVForm;