import { StyleSheet, Text, View, Image } from "react-native";
import React, { useContext } from "react";
import LocalizationContext from "../context/LocalizationProvider";
import { TextInput } from "react-native-paper";
import { COLORS, IMGS } from "../constants";
export default function LessionHistoryCard({ data }) {
  const { i18n } = useContext(LocalizationContext);
  const { tutorInfo } = data;
  const dateTime = data.startTime.split("T")[0];
  const time =
    data.startTime.split("T")[1].split(":")[0] +
    ":" +
    data.startTime.split("T")[1].split(":")[1];
  // const review = data.review ? data.review : i18n.t("NoReview");
  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <Image style={styles.avtimg} source={{ uri: tutorInfo.avatar }} />
        <View style={styles.detailContainer}>
          <Text style={styles.name}>{tutorInfo.name}</Text>
          <Text style={styles.date}>{dateTime}</Text>
          <Text style={styles.date}>{time}</Text>
        </View>
      </View>
      <TextInput
        value={"No review"}
        name="review"
        label="Review"
        defaultValue={"No review"}
        disabled={true}
      />
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
    justifyContent: "space-between",
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
    marginRight: 50,
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
