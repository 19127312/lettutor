import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useContext, useEffect } from "react";
import TeacherCard from "../../components/TeacherCard";
import LocalizationContext from "../../context/LocalizationProvider";
import { COLORS, ROUTES } from "../../constants";
import { getListTutor } from "../../services/tutorAPI";
import AvatarContext from "../../context/AvatarProvider";
export default function Home({ navigation }) {
  const { avatar } = useContext(AvatarContext);
  const { i18n } = useContext(LocalizationContext);
  const [listTutor, setListTutor] = React.useState([]);
  const [favoriteTutor, setFavoriteTutor] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  async function fetchData() {
    const response = await getListTutor(1, 60);
    setFavoriteTutor(() => {
      const newListID = response.favoriteTutor.map((item) => item.secondId);
      return newListID;
    });

    const data = response.tutors.rows.filter((item) => {
      return item.level != null;
    });
    setListTutor(data);
    setIsLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, [avatar]);

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.welcomeText}>{i18n.t("WelcomeHome")}</Text>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => {
            navigation.navigate(ROUTES.TEACHERS);
          }}
        >
          <Text style={styles.ButtonText}> {i18n.t("BookALesson")} </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{i18n.t("TopTeachers")}</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(ROUTES.TEACHERS);
          }}
        >
          <Text style={styles.seeMore}>{i18n.t("SeeAll")}</Text>
        </TouchableOpacity>
      </View>
      <>
        {isLoading ? (
          <ActivityIndicator
            size="large"
            color={COLORS.primary}
            style={styles.centerLoading}
          />
        ) : (
          <FlatList
            data={listTutor}
            renderItem={({ item }) => (
              <TeacherCard
                data={item}
                isLiked={favoriteTutor.includes(item.id)}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        )}
      </>
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
  title: {
    fontSize: 15,
    fontWeight: "bold",
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
  centerLoading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
