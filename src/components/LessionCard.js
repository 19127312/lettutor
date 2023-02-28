import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState, useContext } from "react";
import LocalizationContext from "../context/LocalizationProvider";

import { COLORS, IMGS } from "../constants";
export default function LessionCard() {
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

      <View style={{ ...styles.innerContainer, marginTop: 0 }}>
        <TouchableOpacity
          style={{
            ...styles.interactButton,
            backgroundColor: "white",
            borderWidth: 2,
            borderColor: COLORS.danger,
            flex: 1,
          }}
        >
          <Text style={{ ...styles.interactButtonText, color: COLORS.danger }}>
            {i18n.t("Cancel")}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.interactButton}>
          <Text style={styles.interactButtonText}>
            {i18n.t("EnterLessionRoom")}
          </Text>
        </TouchableOpacity>
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
  interactButton: {
    flex: 2,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#4b7bec",
    margin: 5,
    borderRadius: 4,
  },
  interactButtonText: {
    color: "#fff",
    fontSize: 18,
    paddingVertical: 6,
  },
});
