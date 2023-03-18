import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { COLORS } from "../constants";
export default function BookingBottomSheet({ onBooking }) {
  const arr = [
    "Fri,29 April 2023, 08:00 PM",
    "Sat,30 April 2023, 08:00 PM",
    "Sun,31 April 2023, 08:00 PM",
    "Mon,01 May 2023, 08:00 PM",
    "Tue,02 May 2023, 08:00 PM",
    "Wed,03 May 2023, 08:00 PM",
    "Thu,04 May 2023, 08:00 PM",
  ];
  const renderItem = (item) => (
    <TouchableOpacity style={styles.button} onPress={() => handleBooking(item)}>
      <Text style={styles.buttonText}> {item} </Text>
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
