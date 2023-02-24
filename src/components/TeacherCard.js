import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import ListTag from "./ListTag";
import { AntDesign } from "@expo/vector-icons";
import { COLORS, IMGS } from "../constants";
import { Rating, AirbnbRating } from "react-native-elements";

export default function TeacherCard() {
  const listSpecialies = [
    "English",
    "Math",
    "Physics",
    "IEOS",
    "FES",
    "FESe",
    "FEsssS",
  ];
  return (
    <TouchableOpacity
      onPress={() => {
        console.log("Press");
      }}
      style={styles.containerTouchable}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.HeaderRight}>
            <Image style={styles.avtimg} source={IMGS.user} />
            <View style={styles.nameContainer}>
              <Text style={styles.name}>Teacher Seeeee</Text>

              <Rating
                type="custom"
                readonly={true}
                startingValue={3}
                style={{
                  marginVertical: 1,
                  alignSelf: "flex-start",
                }}
                imageSize={20}
                ratingBackgroundColor="transparent"
              />
            </View>
          </View>
          <View style={styles.HeaderLeft}>
            <AntDesign name="hearto" size={24} color="blue" />
          </View>
        </View>
        <View style={styles.tagItem}>
          <ListTag tags={listSpecialies} />
        </View>
        <View style={styles.descript}>
          <Text numberOfLines={4} style={styles.textDescript}>
            1 2 3 5234 123 123 123 123 123 325sd fsdf sdf sdf sdf
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    marginBottom: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 16,
    marginHorizontal: 16,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  header: {
    flexDirection: "row",
  },
  HeaderRight: {
    flexDirection: "row",
    flex: 4,
    marginTop: 20,
    marginLeft: 20,
  },
  HeaderLeft: {
    flex: 1,
    alignItems: "flex-end",
    marginRight: 20,
    marginTop: 20,
  },
  avtimg: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 0.5,
    borderColor: "gray",
  },
  name: {
    fontSize: 18,
    fontWeight: "400",
  },
  ensign: {
    width: 40,
    height: 30,
    marginRight: 10,
  },
  labelCountry: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    marginBottom: 8,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  nonrating: {
    fontStyle: "italic",
    opacity: 0.6,
  },
  tagItem: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: 12,
    marginVertical: 10,
  },
  descript: {
    marginHorizontal: 20,
    marginBottom: 15,
  },
  textDescript: {
    color: COLORS.black,
  },
  nameContainer: {
    flexDirection: "column",
    marginLeft: 10,
  },
});
