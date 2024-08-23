// eslint-disable-next-line react/prop-types
const Languages = ({ langs, setLangs }) => {
  const levels = [
    "Don't know",
    "Beginner",
    "Intermediate",
    "Advanced",
    "Fluent",
    "Native",
    "I created it",
  ];

  // Function to handle changes in text input
  const handleTextChange = (index, event) => {
    const newLangs = [...langs];
    newLangs[index].lang = event.target.value;
    console.log("New langs?", newLangs);
    setLangs(newLangs);
  };

  // Function to handle changes in range slider
  const handleLevelChange = (index, event) => {
    const newLangs = [...langs];
    newLangs[index].level = event.target.value;
    setLangs(newLangs);
  };

  return (
    <>
      <div id="languages">
        {/* eslint-disable-next-line react/prop-types */}
        {langs.map((lang, index) => (
          <div key={index} style={{ marginBottom: "30px" }}>
            <label>
              Language:
              <input
                value={lang.lang}
                type="text"
                onChange={(e) => handleTextChange(index, e)}
                placeholder="Enter language"
              />
            </label>
            <br />
            <label>
              Proficiency Level:
              <select
                value={lang.level}
                onChange={(e) => handleLevelChange(index, e)}
              >
                {levels.map((level, i) => (
                  <option key={i} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default Languages;
