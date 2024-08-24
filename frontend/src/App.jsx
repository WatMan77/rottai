import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import Background from "./assets/background.png";
import Unemployment from "./assets/unemployment.png";

import styled from "styled-components";
import CVForm from "./CVForm.jsx";
import CvPdf from "./CvPdf.jsx";

import { useEffect, useState } from "react";
import { H1 } from "./common/Text.jsx";
import * as apiService from "./apiService.js";
import * as SC from "./App.styles.js";

function Home() {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();
  const setOpenJobs = async () => {
    setJobs(await apiService.getOpenJobs());
  };
  useEffect(() => {
    setOpenJobs();
  }, []);
  return (
    <>
      <H1>Rott.AI</H1>
      <br />
      <br />
      <a href="https://toimistot.te-palvelut.fi/">
        <img src={Unemployment} />
      </a>
      {jobs && (
        <>
            <br />
          <VantaaButton onClick={() => navigate("cv-form")}>
            Become a Vantaa Man!
            <br />
          </VantaaButton>
            <br />
          <br />
          <SC.List>
            {jobs.map((job, index) => {
              return (
                <SC.ListItem key={index}>
                  <h4>
                    <b>Position: {job.tyotehtava}</b>
                  </h4>
                  <p>{job.organisaatio}</p>
                  <p>
                    <b>Address:</b> {job.osoite}
                  </p>
                  <p>
                    <b>Application period ends:</b> {job.haku_paattyy_pvm}
                  </p>
                  <SC.LinkButton>
                    <SC.Link href={job.tyoavain}>Apply</SC.Link>
                  </SC.LinkButton>
                </SC.ListItem>
              );
            })}
          </SC.List>
          <ul>
            {jobs.map((job, index) => {
              return (
                <li key={index}>
                  <h4>Position: {job.tyotehtava}</h4>
                  <p>{job.organisaatio}</p>
                  <a href={job.tyoavain}>Link</a>
                  <p> Address: {job.osoite}</p>
                  <p> Application period ends: {job.haku_paattyy_pvm}</p>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </>
  );
}

const VantaaButton = styled.button`
  --primary: #6a11cb;
  --primaryHover: #2537fc;
  background: linear-gradient(45deg, #6a11cb, var(--primary), #2575fc);
  padding: 10px 20px;
  border: none;
  color: white;
font-size: 3rem;
  
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
    background: linear-gradient(45deg, #6a11cb, var(--primaryHover), #2575fc);
  }

  &:focus {
    outline: none;
  }

  &:active {
    transform: scale(1);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    opacity: 0.9;
  }
`;

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const img = new Image();
    img.src = Background;
    img.onload = () => {
      setIsLoading(false);
    };
  }, []);

  const CustomLoader = () => {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  };
  if (isLoading) {
    return <CustomLoader />;
  }
  return (
    <AppWrapper>
      <Router>
        <nav>
          <Link to="/">Home</Link> | <Link to="/cv-form">CV Form</Link> |{" "}
          <Link to="/cv">CV</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv-form" element={<CVForm />} />
          <Route path="/cv" element={<CvPdf />} />
        </Routes>
      </Router>
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  background: url(${Background}) no-repeat center center fixed;
  background-size: cover;
  background-color: #f9f9f9;
  box-shadow: 0 0 100px 100px rgba(0, 0, 0, 0.5);
  min-height: 100vh;
  min-height: 100dvh;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
