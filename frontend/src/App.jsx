import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import Background from "./assets/background.png";

import styled from "styled-components";
import CVForm from "./CVForm.jsx";

import { useEffect, useState } from "react";
import { H1 } from "./common/Text.jsx";

function Home() {
  
  return (
    <>
      <H1>Rott.AI</H1>
    </>
  );
}

const CVPage = () => {
  const styles = StyleSheet.create({
    viewer: {
      width: "100vw", // Take up all available width
      height: "100vh", // Take up all available height
    },
    page: {
      fontFamily: "Helvetica",
      padding: 30,
      fontSize: 12,
      lineHeight: 1.5,
      backgroundColor: "#f9f9f9", // Light gray background for the page
    },
    section: {
      marginBottom: 20, // Increased space between sections
    },
    header: {
      fontSize: 24,
      marginBottom: 10,
      fontWeight: "bold",
      textAlign: "center", // Center align the header
      color: "#2C3E50", // Dark color for the header text
    },
    subheader: {
      fontSize: 16,
      marginBottom: 10,
      fontWeight: "bold",
      color: "#2980B9", // Blue color for subheaders
    },
    text: {
      marginBottom: 10,
      lineHeight: 1.6,
      color: "#34495E", // Dark gray color for the text
    },
    sectionHeader: {
      padding: 10,
      borderRadius: 5,
      backgroundColor: "#ecf0f1", // Light gray background for section headers
      border: "1px solid #bdc3c7", // Border for section headers
    },
  });

  const Cv = () => (
    <PDFViewer style={styles.viewer}>
      {" "}
      {/* Apply the viewer style here */}
      <Document>
        <Page style={styles.page}>
          {/* Header */}
          <View style={styles.section}>
            <Text style={styles.header}>John Doe asiduaohds</Text>
            <Text style={styles.text}>
              john.doe@example.com | +123 456 7890 | www.johndoe.com
            </Text>
            <p>How about this?</p>
          </View>

          {/* Experience */}
          <View style={styles.section}>
            <Text style={styles.subheader}>Experience</Text>
            <Text style={styles.text}>
              Software Developer at XYZ Corp (2019 - Present)
            </Text>
            <Text style={styles.text}>
              Junior Developer at ABC Inc. (2017 - 2019)
            </Text>
          </View>

          {/* Education */}
          <View style={styles.section}>
            <Text style={styles.subheader}>Education</Text>
            <Text style={styles.text}>
              B.S. in Computer Science, University of Example (2013 - 2017)
            </Text>
          </View>

          {/* Skills */}
          <View style={styles.section}>
            <Text style={styles.subheader}>Skills</Text>
            <Text style={styles.text}>JavaScript, React, Node.js, Python</Text>
          </View>

          {/* Hobbies */}
          <View style={styles.section}>
            <Text style={styles.subheader}>Hobbies</Text>
            <Text style={styles.text}>Reading, Hiking, Photography</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );

  return <Cv />;
};

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
          <Route path="/cv" element={<CVPage />} />
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
  box-shadow: 0 0 100px 100px rgba(0, 0, 0, 0.5) ;
  min-height: 100vh;
  min-height: 100dvh;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

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
