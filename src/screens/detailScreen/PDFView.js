import { StyleSheet, Text, View } from "react-native";
import WebView from "react-native-webview";
import React from "react";
import PDFReader from "rn-pdf-reader-js";

export default function PDFView() {
  return (
    <View style={styles.container}>
      <PDFReader
        source={{
          uri: "http://www.pdf995.com/samples/pdf.pdf",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: "#ecf0f1",
  },
});
