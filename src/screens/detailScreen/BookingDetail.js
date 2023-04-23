import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { getSchedule, bookTutor } from "../../services/tutorAPI";
import { COLORS } from "../../constants";
export default function BookingDetail({ route }) {
  const { tutorID } = route.params;
  let startTimestamp = Date.now();
  let nextWeekTimestamp = startTimestamp + 604800000;
  const [schedule, setSchedule] = React.useState([]);
  const [page, setPage] = useState(1);
  const [startTime, setStartTime] = useState(startTimestamp);
  const [endTime, setEndTime] = useState(nextWeekTimestamp);

  async function fetchSchedule(page) {
    if (page > 7) {
      return;
    }
    setStartTime((pre) => pre + 604800000);
    setEndTime((pre) => pre + 604800000);
    const { scheduleOfTutor } = await getSchedule({
      tutorId: tutorID,
      startTimestamp: startTime,
      endTimestamp: endTime,
    });
    let getSchedules = scheduleOfTutor.filter((item) => !item.isBooked);
    getSchedules = getSchedules.sort(
      (a, b) => a.startTimestamp - b.startTimestamp
    );
    console.log(page);
    setSchedule([...schedule, ...getSchedules]);
  }
  useEffect(() => {
    fetchSchedule(1);
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
  const handleBooking = async (item) => {
    try {
      const response = await bookTutor({
        scheduleDetailIds: [item.scheduleDetails[0].id],
        note: "",
      });
      if (response.message == "Book successful") {
        alert("Booking successfully");
      }
    } catch (error) {
      alert("Booking failed");
    }
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={schedule}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={(item) => item.id}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          setPage(page + 1);
          fetchSchedule(page + 1);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
    marginTop: 10,
  },
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
