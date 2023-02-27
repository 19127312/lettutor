import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useContext, useState } from "react";
import ThemeContext from "../../context/ThemeProvider";
import TeacherCard from "../../components/TeacherCard";
export default function FavoriteTeachers() {
  const { themeData } = useContext(ThemeContext);
  const arr = [1, 2, 3, 4, 5, 6];

  return (
    <View
      style={[styles.container, { backgroundColor: themeData.backgroundColor }]}
    >
      <FlatList
        data={arr}
        renderItem={({ item }) => <TeacherCard isLiked />}
        keyExtractor={(item) => item.toString()}
        style={styles.list}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  list: {
    marginTop: 10,
  },
});
