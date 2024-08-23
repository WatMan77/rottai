import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

const App = () => {
  const styles = StyleSheet.create({
    viewer: {
      width: "100%", // Take up all available width
      height: "100vh", // Take up all available height
    },
    page: {
      fontFamily: "Helvetica",
      padding: 30,
      fontSize: 12,
      lineHeight: 1.5,
    },
    section: {
      marginBottom: 10,
    },
    header: {
      fontSize: 20,
      marginBottom: 10,
      fontWeight: "bold",
    },
    subheader: {
      fontSize: 14,
      marginBottom: 5,
      fontWeight: "bold",
    },
    text: {
      marginBottom: 5,
    },
  });

  return (
    <PDFViewer style={styles.viewer}>
      {" "}
      {/* Apply the viewer style here */}
      <Document>
        <Page style={styles.page}>
          {/* Header */}
          <View style={styles.section}>
            <Text style={styles.header}>John Doe</Text>
            <Text style={styles.text}>
              john.doe@example.com | +123 456 7890 | www.johndoe.com
            </Text>
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
};

export default App;
