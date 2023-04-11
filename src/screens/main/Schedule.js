import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useState, useContext, useEffect } from "react";
import LocalizationContext from "../../context/LocalizationProvider";
import BookingContext from "../../context/BookingProvider";
import LessionCard from "../../components/LessionCard";
import { getTotalCourse } from "../../services/courseAPI";
import { getUpcomingBooking } from "../../services/tutorAPI";
export default function Schedule() {
  const { i18n } = useContext(LocalizationContext);
  const [totalTime, setTotalTime] = useState("");
  const { upcomingBooking, pastBooking, setUpcomingBooking } =
    useContext(BookingContext);
  const deleteLesson = (id) => {
    setUpcomingBooking((pre) => {
      return pre.filter((item) => item.id !== id);
    });
  };

  useEffect(() => {
    async function fetchData() {
      const totalCourse = await getTotalCourse();
      const hour = Math.floor(totalCourse / 60);
      const minute = totalCourse % 60;
      const string = `${hour}h ${minute}m`;
      setTotalTime(string);

      const { rows } = await getUpcomingBooking();
    }
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.welcomeText}>{i18n.t("TotalTimeLearning")} :</Text>
        <Text style={styles.welcomeText}>{totalTime}</Text>
      </View>
      <Text style={styles.title}>{i18n.t("UpcomingLession")}</Text>
      <FlatList
        data={upcomingBooking}
        renderItem={({ item }) => (
          <LessionCard data={item} onDelete={deleteLesson} />
        )}
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
  banner: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 150,
    backgroundColor: "blue",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 20,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
