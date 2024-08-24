import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import { useNavigate } from "react-router-dom";
const CvPdf = ({ cv }) => {
  const navigate = useNavigate();
  if (!cv) {
    // Don't show CV if there is nothing to show
    navigate("/");
  }
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
  <PDFViewer style={styles.viewer}>
    {" "}
    {/* Apply the viewer style here */}
    <Document>
      <Page style={styles.page}>
        {/* Header */}
        <View style={styles.section}>
          <Text style={styles.header}>John Doe asiduaohds</Text>
          <Text style={styles.text}>
            {basics.email} | {basics.phone} | {basics.email}
          </Text>
        </View>

        {/* Experience */}
        <View style={styles.section}>
          <Text style={styles.subheader}>Experience</Text>
          {exp.exp.map((e) => (
            <Text key={e} style={styles.text}>
              {e}
            </Text>
          ))}
        </View>

        {/* Skills */}
        <View style={styles.section}>
          <Text style={styles.subheader}>Skills</Text>
          {exp.skills.map((s) => (
            <Text key={s} style={styles.text}>
              {s.desc} {s.rating} / 5
            </Text>
          ))}
        </View>

        {/* Hobbies */}
        <View style={styles.section}>
          <Text style={styles.subheader}>Hobbies</Text>
          {basics.hobbies.map((h) => (
            <Text key={h} style={styles.text}>
              {h}
            </Text>
          ))}
        </View>
        {/* Languages */}
        <View style={styles.section}>
          <Text style={styles.subheader}>Hobbies</Text>
          {exp.languages.map((l) => (
            <Text key={l} style={styles.text}>
              {l.language} Level: {l.proficiency}
            </Text>
          ))}
        </View>
        {/* Highlights */}
        <View style={styles.section}>
          <Text style={styles.subheader}>Hobbies</Text>
          {exp.highlights.map((h) => (
            <Text key={h} style={styles.text}>
              {h}
            </Text>
          ))}
        </View>
      </Page>
    </Document>
  </PDFViewer>;
};

export default CvPdf;
