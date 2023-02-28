import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useState, useContext, useEffect } from "react";
import LocalizationContext from "../../context/LocalizationProvider";
import LessionCard from "../../components/LessionCard";
export default function Schedule() {
  const { i18n } = useContext(LocalizationContext);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.welcomeText}>{i18n.t("TotalTimeLearning")} :</Text>
        <Text style={styles.welcomeText}>0 minutes</Text>
      </View>
      <Text style={styles.title}>{i18n.t("UpcomingLession")}</Text>
      <FlatList
        data={arr}
        renderItem={({ item }) => <LessionCard />}
        keyExtractor={(item) => item.toString()}
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
