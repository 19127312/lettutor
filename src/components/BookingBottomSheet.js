import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { COLORS } from "../constants";
import { getSchedule } from "../services/tutorAPI";
import { LogBox } from "react-native";
import { ScrollView, FlatList } from "react-native-gesture-handler";

export default function BookingBottomSheet({ onBooking, tutorID }) {
  const startTimestamp = Date.now() + 50 * 60 * 60 * 24;
  const endTimestamp = Date.now() + 604800000;
  const [schedule, setSchedule] = React.useState([]);
  useEffect(() => {
    async function fetchSchedule() {
      const { scheduleOfTutor } = await getSchedule({
        tutorId: tutorID,
        startTimestamp,
        endTimestamp,
      });
      let getSchedules = scheduleOfTutor.filter((item) => !item.isBooked);
      getSchedules = getSchedules.sort(
        (a, b) => a.startTimestamp - b.startTimestamp
      );
      setSchedule(getSchedules);
    }
    fetchSchedule();
  }, []);
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);
  const renderItem = (item) => {
    const date = new Date(item.startTimestamp);
    const stringDate = date.toString().slice(0, 10);

    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleBooking(item)}
      >
        <Text style={styles.buttonText}>
          {stringDate} {item.startTime} - {item.endTime}
        </Text>
      </TouchableOpacity>
    );
  };
  const handleBooking = (index) => {
    onBooking(index);
  };
  return (
    <ScrollView
      style={{
        backgroundColor: "white",
        padding: 16,
      }}
    >
      <FlatList
        data={schedule}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
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
