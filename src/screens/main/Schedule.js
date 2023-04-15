import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState, useContext, useEffect, useRef } from "react";
import LocalizationContext from "../../context/LocalizationProvider";
import BookingContext from "../../context/BookingProvider";
import LessionCard from "../../components/LessionCard";
import { getTotalCourse } from "../../services/courseAPI";
import { COLORS, ROUTES } from "../../constants";

import { getUpcomingBooking, cancelBooking } from "../../services/tutorAPI";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Schedule() {
  const { i18n } = useContext(LocalizationContext);
  const [totalTime, setTotalTime] = useState("");
  const [upcomingBooking, setUpcomingBooking] = useState([]);
  const [page, setPage] = useState(5);
  const [initNumber, setInitNumber] = useState(0);
  const [initPage, setInitPage] = useState(1);
  const [isReload, setIsReload] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const deleteLesson = async (id) => {
    const accessToken = await AsyncStorage.getItem("accessToken");

    fetch("https://sandbox.api.lettutor.com/booking/schedule-detail", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        scheduleDetailId: id,
        cancelInfo: { cancelReasonId: 1 },
      }),
    })
      .then((response) => response.json())
      .then(() => {
        alert("Cancel successfully");
        setUpcomingBooking(upcomingBooking.filter((item) => item.id !== id));
      })
      .catch(() => {
        alert("Cancel failed");
      });
  };
  async function fecthHour() {
    const totalCourse = await getTotalCourse();
    const hour = Math.floor(totalCourse / 60);
    const minute = totalCourse % 60;
    const string = `${hour}h ${minute}m`;
    setTotalTime(string);
  }
  async function fetchData(page) {
    let currentPage = page;
    let flag = true;
    while (flag) {
      let { rows } = await getUpcomingBooking({
        page: currentPage,
        perPage: 5,
        dateTimeGte: Date.now() + 12 * 60 * 60 * 1000,
      });
      if (rows.length != 0) {
        setInitNumber(rows.length);
        rows = rows.reverse();
        setUpcomingBooking([...upcomingBooking, ...rows]);
        setPage(currentPage);
        setInitPage(currentPage);
        setIsLoading(false);
        flag = false;
      } else {
        currentPage--;
      }
    }
  }
  useEffect(() => {
    fecthHour();
    fetchData(5);
  }, [isReload]);
  useEffect(() => {
    if (initNumber != 0 && initNumber < 5 && initPage != 1) {
      setPage(initPage - 1);
      fetchData(initPage - 1);
    }
  }, [initNumber, initPage]);

  const reload = () => {
    setUpcomingBooking((pre) => {
      return [];
    });
    setPage(5);
    setIsReload((pre) => !pre);
  };
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <TouchableOpacity onPress={reload}>
          <Text style={styles.welcomeText}>
            {i18n.t("TotalTimeLearning")} :
          </Text>
          <Text style={styles.welcomeText}>{totalTime}</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>{i18n.t("UpcomingLession")}</Text>
      {isLoading ? (
        <ActivityIndicator
          size="large"
          color={COLORS.primary}
          style={styles.centerLoading}
        />
      ) : (
        <FlatList
          data={upcomingBooking}
          renderItem={({ item }) => (
            <LessionCard data={item} onDelete={deleteLesson} />
          )}
          keyExtractor={(item) => item.id}
          onEndReachedThreshold={0.8}
          onEndReached={() => {
            if (page > 1) {
              setPage(page - 1);
              fetchData(page - 1);
            }
          }}
        />
      )}
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
  centerLoading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
