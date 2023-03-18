import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useContext, useState } from "react";
import ThemeContext from "../../context/ThemeProvider";
import LessionHistoryCard from "../../components/LessionHistoryCard";
export default function HistoryCourses() {
  const { themeData } = useContext(ThemeContext);
  const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <View
      style={[styles.container, { backgroundColor: themeData.backgroundColor }]}
    >
      <FlatList data={arr} renderItem={({ item }) => <LessionHistoryCard />} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    
  },
});
