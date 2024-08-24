// eslint-disable-next-line react/prop-types
const Languages = ({ langs, setLangs, addLanguage }) => {
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
    newLangs[index].language = event.target.value;
    setLangs(newLangs);
  };

  // Function to handle changes in range slider
  const handleLevelChange = (index, event) => {
    const newLangs = [...langs];
    newLangs[index].proficiency = event.target.value;
    setLangs(newLangs);
  };

  const setDefaults = () => {
    setLangs([{language:"Finnish", proficiency:"Native"},{language:"English", proficiency:"Intermediate"},{language:"Swedish",proficiency:"Don't know"}]);
  }

  return (
    <>
      <div id="languages">
        {/* eslint-disable-next-line react/prop-types */}
        {langs.map((lang, index) => (
          <div key={index} style={{ marginBottom: "30px" }}>
            <label>
              Language:
              <input
                value={lang.language}
                type="text"
                onChange={(e) => handleTextChange(index, e)}
                placeholder="Enter language"
              />
            </label>
            <br />
            <label>
              Proficiency Level:
              <select
                value={lang.proficiency}
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
        <button
          style={{ marginBottom: "30px" }}
          type="button"
          onClick={addLanguage}
        >
          Add Language
        </button>
        <button
          style={{ marginBottom: "30px" }}
          type="button"
          onClick={setDefaults}
        >
          Set defaults
        </button>

      </div>
    </>
  );
};

export default Languages;
