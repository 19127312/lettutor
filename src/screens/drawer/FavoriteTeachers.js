import { View, Text, StyleSheet } from "react-native";
import React, { useContext, useState } from "react";
import ThemeContext from "../../context/ThemeProvider";
export default function FavoriteTeachers() {
  const { themeData } = useContext(ThemeContext);

  return (
    <View
      style={[styles.container, { backgroundColor: themeData.backgroundColor }]}
    >
      <Text>FavoriteTeachers</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
