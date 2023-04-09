import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { COLORS } from "../constants";
function createDateArray() {
  const dateArray = [];
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const today = new Date();
  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    const dayOfWeek = daysOfWeek[date.getDay()];
    const monthName = date.toLocaleDateString("default", { month: "long" });
    const dateString = `${dayOfWeek} ${monthName}`;
    dateArray.push(dateString);
  }
  return dateArray;
}
export default function BookingBottomSheet({ onBooking, tutorID }) {
  console.log(tutorID);
  const arr = createDateArray();
  const renderItem = (item) => (
    <TouchableOpacity style={styles.button} onPress={() => handleBooking(item)}>
      <Text style={styles.buttonText}> {item} 8:00AM </Text>
    </TouchableOpacity>
  );
  const handleBooking = (index) => {
    onBooking(index);
  };
  return (
    <View
      style={{
        backgroundColor: "white",
        padding: 16,
      }}
    >
      <FlatList
        data={arr}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={(item) => item}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 50,
    backgroundColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    borderRadius: 25,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
  },
});
