import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import ThemeContext from "../../context/ThemeProvider";
import LessionHistoryCard from "../../components/LessionHistoryCard";
import { getHistoryBooking } from "../../services/tutorAPI";
export default function HistoryCourses() {
  const { themeData } = useContext(ThemeContext);
  const [historyBooking, setHistoryBooking] = useState([]);
  const [page, setPage] = useState(1);

  async function fetchData(page) {
    let { rows } = await getHistoryBooking({
      page: page,
      perPage: 10,
    });
    if (rows.length > 0) {
      setHistoryBooking([...historyBooking, ...rows]);
    }
  }
  useEffect(() => {
    fetchData(1);
  }, []);
  return (
    <View
      style={[styles.container, { backgroundColor: themeData.backgroundColor }]}
    >
      <FlatList
        data={historyBooking}
        renderItem={({ item }) => <LessionHistoryCard data={item} />}
        keyExtractor={(item) => item.id}
        onEndReached={() => {
          setPage(page + 1);
          fetchData(page + 1);
        }}
        onEndReachedThreshold={0.8}
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
