import { StyleSheet, Text, View, Image } from "react-native";
import React, { useContext } from "react";
import LocalizationContext from "../context/LocalizationProvider";

import { COLORS, IMGS } from "../constants";
export default function LessionHistoryCard() {
  const { i18n } = useContext(LocalizationContext);

  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <Image style={styles.avtimg} source={IMGS.user} />
        <View style={styles.detailContainer}>
          <Text style={styles.name}>Teacher Seeeee</Text>
          <Text style={styles.date}>20-02-2002</Text>
          <Text style={styles.time}>3:30 - 4:30</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.26,
    overflow: "hidden",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    backgroundColor: COLORS.white,
    marginVertical: 5,
    borderRadius: 16,
    marginHorizontal: 16,
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    marginVertical: 20,
  },
  avtimg: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 0.5,
    borderColor: "gray",
  },
  detailContainer: {
    marginHorizontal: 20,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  date: {
    fontSize: 14,
    fontWeight: "500",
  },
  time: {
    fontSize: 14,
    fontStyle: "italic",
  },
});
