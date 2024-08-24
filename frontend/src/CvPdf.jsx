import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  Image,
} from "@react-pdf/renderer";

const CvPdf = () => {
  const location = useLocation();

  const [cv, setCv] = useState({ basics: {}, experience: {} });
  const [image, setImage] = useState();

  useEffect(() => {
    console.log("Effecting!");
    const c = location.state?.cv;
    const img = location.state?.image;
    if (c) {
      console.log("Effect found CV!");
      console.log(c);
      setCv(c);
    }
    if (img) {
      setImage(img);
    }
  }, [cv, location.state?.cv, image, location.state?.image]);
  const basics = cv.basics;
  const exp = cv.experience;
  console.log("What is experience?", cv.experience);
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
    image: {
      width: 100, // Adjust the width as needed
      height: 100, // Adjust the height as needed
      marginBottom: 20,
    },
  });
  if (
    !cv.basics ||
    Object.keys(cv.basics).length === 0 ||
    !cv.experience ||
    Object.keys(cv.experience).length === 0
  ) {
    return <div></div>;
  }
  return (
    <PDFViewer style={styles.viewer}>
      <Document>
        <Page style={styles.page}>
          {/* Include Image */}
          {image && (
            <View style={styles.section}>
              <Image style={styles.image} src={image} />
            </View>
          )}
          <View style={styles.section}>
            <Text style={styles.header}>{basics.name}</Text>
            <Text style={styles.text}>
              {basics.email} | {basics.phone} | {basics.address}
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
                {s.desc}
              </Text>
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.subheader}>Hobbies</Text>
            {exp.hobbies.map((h, index) => (
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
