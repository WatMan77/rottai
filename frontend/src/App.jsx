import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

function Home() {

  return (
    <>
      
      <h1>Rott.AI</h1>
      
      
    </>
  );
}

function CVForm() {
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/cv-form">CV Form</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv-form" element={<CVForm />} />
      </Routes>
    </Router>
  );
}

export default App;


/* 
Try to find all the bad aspects of me that would make me a bad candidate for job based on profile. be mean and straightforward. 

Profile:
- 2 years of exerience in IT
- skills: python, sql
- education: university of applied science


example:
Profile:
- good in math
- junior work experience in software dev
- i play football

Response:
good in math -> probably introvert person, not social
junior work experience->almost no experience in the field
plays football->uses time to unimportant things such as football


name
email
phone
address
linkedin
github
skills
education
experience
hobbies
languages
certificates
courses
projects
volunteering
awards
interests
summary
highlights
accomplishments
patents
publications
test_scores
strengths
weaknesses
references


*/