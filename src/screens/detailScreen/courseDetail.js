import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  FlatList,
} from "react-native";
import React, { useContext } from "react";
import { COLORS, ROUTES } from "../../constants";
import CourseBackground from "../../assets/CourseBackground.png";
import CourseCard from "../../components/CourseCard";
import LocalizationContext from "../../context/LocalizationProvider";
import Icon from "react-native-vector-icons/Ionicons";
import { ScrollView } from "react-native-virtualized-view";
import { useNavigation } from "@react-navigation/native";
export default function CourseDetail() {
  const navigation = useNavigation();
  const { i18n } = useContext(LocalizationContext);
  const arr = ["He", "LO", "HI", "Ha", "hu", "He", "OK", "KO", "SD"];
  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <CourseCard style={{ marginHorizontal: 20, flex: 0 }} />
        <Text style={styles.headingTitle}>{i18n.t("Overview")}</Text>
        <View style={styles.headingContainer}>
          <Icon
            name="help-circle"
            size={20}
            color={"black"}
            style={{ alignSelf: "center" }}
          />
          <Text style={styles.headingParagraph}>
            {i18n.t("WhyTakeThisCourse")}
          </Text>
        </View>

        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla
          neque, scelerisque sit amet velit eu, vestibulum ultricies odio.
          Quisque eu ex vitae nisi venenatis euismod. Etiam vitae erat suscipit,
          congue dolor vitae, malesuada mauris. Vivamus sit amet sapien
          lobortis, auctor est eget, feugiat lorem. Fusce a lacus eget mauris
          rhoncus venenatis accumsan in sem.
        </Text>
        <View style={styles.headingContainer}>
          <Icon
            name="help-circle"
            size={15}
            color={"black"}
            style={{ alignSelf: "center" }}
          />
          <Text style={styles.headingParagraph}>
            {i18n.t("WhatWillYouBeAbleToDo")}
          </Text>
        </View>

        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla
          neque, scelerisque sit amet velit eu, vestibulum ultricies odio.
          Quisque eu ex vitae nisi venenatis euismod. Etiam vitae erat suscipit,
          congue dolor vitae, malesuada mauris. Vivamus sit amet sapien
          lobortis, auctor est eget, feugiat lorem. Fusce a lacus eget mauris
          rhoncus venenatis accumsan in sem.
        </Text>
        <Text style={styles.headingTitle}>{i18n.t("ExperienceLevel")}</Text>
        <View style={styles.headingContainer}>
          <Icon
            name="people"
            size={15}
            color={"black"}
            style={{ alignSelf: "center" }}
          />
          <Text style={styles.headingParagraph}>{i18n.t("Beginner")}</Text>
        </View>
        <Text style={styles.headingTitle}>{i18n.t("CourseLength")}</Text>
        <View style={styles.headingContainer}>
          <Icon
            name="book"
            size={15}
            color={"black"}
            style={{ alignSelf: "center" }}
          />
          <Text style={styles.headingParagraph}>9</Text>
        </View>
        <Text style={styles.headingTitle}>{i18n.t("ListTopics")}</Text>
        <FlatList
          data={arr}
          renderItem={({ item, index }) => (
            <Pressable
              onPress={() => {
                navigation.navigate(ROUTES.PDF_VIEW);
              }}
            >
              <View style={styles.itemTopic}>
                <Text style={styles.headingParagraph}>
                  {index + 1}-{item}
                </Text>
              </View>
            </Pressable>
          )}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  imgContainer: {
    margin: 5,
    height: 240,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.26,
    overflow: "hidden",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    backgroundColor: COLORS.white,
    marginHorizontal: 20,
    overflow: "hidden",
  },
  courseImg: {
    width: "100%",
    height: "100%",
  },
  headingTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.primary,
    marginLeft: 20,
  },
  headingParagraph: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.black,
    marginLeft: 10,
    marginVertical: 5,
  },
  paragraph: {
    fontSize: 15,
    marginHorizontal: 20,
    marginVertical: 5,
  },
  headingContainer: {
    flexDirection: "row",
    marginLeft: 20,
    alignContent: "center",
    justifyContent: "flex-start",
  },
  itemTopic: {
    marginHorizontal: 10,
  },
});
