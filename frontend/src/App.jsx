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
