import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { COLORS, IMGS, ROUTES } from "../constants";
import { Rating } from "react-native-elements";

export default function CommentCard() {
  return (
    <View style={styles.container}>
      <Image style={styles.avtimg} source={IMGS.user} />
      <View style={styles.innnerContainer}>
        <Text style={styles.name}>Teacher Se</Text>
        <Text style={styles.comment}>Good</Text>
      </View>
      <View style={{ ...styles.innnerContainer, alignItems: "flex-end" }}>
        <Rating
          type="custom"
          readonly={true}
          startingValue={3}
          imageSize={20}
          ratingBackgroundColor="transparent"
        />
        <Text style={styles.comment}>20-02-2002</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 16,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.26,
    overflow: "hidden",
    shadowOffset: { width: 0, height: 2 },
    backgroundColor: COLORS.white,
    marginVertical: 5,
    borderRadius: 16,
    alignItems: "center",
    padding: 10,
    flexDirection: "row",
  },
  avtimg: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 0.5,
    borderColor: "gray",
  },
  innnerContainer: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  comment: {
    fontSize: 14,
    fontWeight: "500",
    color: "gray",
  },
});
