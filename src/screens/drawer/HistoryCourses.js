import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useContext, useState } from "react";
import ThemeContext from "../../context/ThemeProvider";
import LessionHistoryCard from "../../components/LessionHistoryCard";
import BookingContext from "../../context/BookingProvider";
export default function HistoryCourses() {
  const { themeData } = useContext(ThemeContext);
  const { pastBooking } = useContext(BookingContext);

  return (
    <View
      style={[styles.container, { backgroundColor: themeData.backgroundColor }]}
    >
      <FlatList
        data={pastBooking}
        renderItem={({ item }) => <LessionHistoryCard data={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
