import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

const CvPdf = () => {
  const location = useLocation();

  const [cv, setCv] = useState({ bascis: {}, experience: {} });

  useEffect(() => {
    const c = location.state?.cv;
    if (c) {
      setCv(c);
    }
  }, [cv, location.state?.cv]);
  const basics = cv.basics;
  const exp = cv.experience;
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
  if (!cv.basics || !cv.experience) {
    return <div></div>;
  }
  return (
    <PDFViewer style={styles.viewer}>
      <Document>
        <Page style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.header}>John Doe</Text>
            <Text style={styles.text}>
              {basics.email} | {basics.phone}
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.subheader}>Experience</Text>
            {exp.exp.map((e, index) => (
              <Text key={index} style={styles.text}>
                {e}
              </Text>
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.subheader}>Skills</Text>
            {exp.skills.map((s, index) => (
              <Text key={index} style={styles.text}>
                {s.desc} {s.rating} / 5
              </Text>
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.subheader}>Hobbies</Text>
            {basics.hobbies.map((h, index) => (
              <Text key={index} style={styles.text}>
                {h}
              </Text>
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.subheader}>Languages</Text>
            {exp.languages.map((l, index) => (
              <Text key={index} style={styles.text}>
                {l.language} Level: {l.proficiency}
              </Text>
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.subheader}>Highlights</Text>
            {exp.highlights.map((h, index) => (
              <Text key={index} style={styles.text}>
                {h}
              </Text>
            ))}
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default CvPdf;
