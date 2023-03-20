import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";
import { COLORS, ROUTES } from "../constants";
import CourseBackground from "../assets/CourseBackground.png";
import { useNavigation } from "@react-navigation/native";

export default function CourseCard({ style, data }) {
  const navigation = useNavigation();
  return (
    <View style={[styles.gridItem, style]}>
      <Pressable
        onPress={() => {
          console.log("Press card");
          navigation.navigate(ROUTES.COURSE_DETAIL, { data });
        }}
        style={{ flex: 1 }}
      >
        <View style={styles.innerContainer}>
          <Image source={{ uri: data.imageUrl }} style={styles.courseImg} />

          <Text style={styles.nameCourse}>{data.name}</Text>
          <Text style={styles.subtitle}>{data.description}</Text>
          <View style={styles.levelContainer}>
            <Text style={styles.levelText}>Level {data.level}</Text>
            <Text style={styles.levelText}>{data.topics.length} lessons</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  courseImg: {
    width: "100%",
    height: 150,
  },
  gridItem: {
    flex: 1,
    margin: 5,
    height: 260,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.26,
    overflow: "hidden",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    backgroundColor: COLORS.white,
  },
  innerContainer: {
    flex: 1,
    padding: 5,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  nameCourse: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "300",
    flex: 1,
    textAlign: "center",
  },
  levelText: {
    fontSize: 14,
    fontWeight: "600",
    marginHorizontal: 5,
  },
  levelContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    alignSelf: "flex-end",
  },
});
