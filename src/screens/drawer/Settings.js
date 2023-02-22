import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

export default function Settings() {
  return (
    <View style={styles.container}>
      <View style={styles.settingOptionContainer}>
        <Text style={styles.settingOptionText}>Ngôn ngữ</Text>
      </View>
      <View style={styles.settingOptionContainer}>
        <Text style={styles.settingOptionText}>Chủ đề</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  settingOptionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  settingOptionText: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
