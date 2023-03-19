// import { getListTutor } from "../../services/tutorAPI";
import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import ThemeContext from "../../context/ThemeProvider";
import TeacherCard from "../../components/TeacherCard";
import { tutor, favoriteTutors } from "../../mock_data/teacher";
export default function FavoriteTeachers() {
  const { themeData } = useContext(ThemeContext);
  const [listTutor, setListTutor] = React.useState([]);
  const [favoriteTutor, setFavoriteTutor] = React.useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = tutor;

      setFavoriteTutor(() => {
        // const newListID = response.favoriteTutor.map((item) => item.secondId);
        const newListID = favoriteTutors.map((item) => item.secondId);

        return newListID;
      });

      // const data = response.tutors.rows.filter((item) => {
      //   return item.level != null;
      // });
      const data = tutor.filter((item) => {
        return item.level != null;
      });
      setListTutor(data);
    }
    fetchData();
  }, []);

  return (
    <View
      style={[styles.container, { backgroundColor: themeData.backgroundColor }]}
    >
      <FlatList
        data={listTutor}
        renderItem={({ item }) => (
          <TeacherCard data={item} isLiked={favoriteTutor.includes(item.id)} />
        )}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  list: {
    marginTop: 10,
  },
});
