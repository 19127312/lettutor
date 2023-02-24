import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import TeacherCard from "../../components/TeacherCard";
import LocalizationContext from "../../context/LocalizationProvider";
import { COLORS } from "../../constants";

export default function Home() {
  const { i18n } = useContext(LocalizationContext);

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.welcomeText}>{i18n.t("WelcomeHome")}</Text>
        <TouchableOpacity style={styles.Button}>
          <Text style={styles.ButtonText}> {i18n.t("BookALesson")} </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{i18n.t("TopTeachers")}</Text>
        <Text style={styles.seeMore}>{i18n.t("SeeAll")}</Text>
      </View>
      <FlatList
        data={arr}
        renderItem={({ item }) => <TeacherCard />}
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
  welcomeText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  Button: {
    alignItems: "center",
    justifyContent: "center",
    width: "30%",
    height: 50,
    backgroundColor: COLORS.white,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    borderRadius: 100,
    marginTop: 10,
  },
  ButtonText: {
    fontSize: 12,
    fontWeight: "bold",
    color: COLORS.primary,
  },
  seeMore: {
    fontSize: 12,
    fontWeight: "bold",
    color: COLORS.primary,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 5,
  },
});
