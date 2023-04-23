import { getListTutor } from "../../services/tutorAPI";
import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import ThemeContext from "../../context/ThemeProvider";
import TeacherCard from "../../components/TeacherCard";
import AvatarContext from "../../context/AvatarProvider";
import { use } from "i18next";
export default function FavoriteTeachers() {
  const { avatar } = useContext(AvatarContext);
  const { themeData } = useContext(ThemeContext);
  const [listTutor, setListTutor] = React.useState([]);
  const [favoriteTutor, setFavoriteTutor] = React.useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await getListTutor(1, 60);
      const newListID = response.favoriteTutor.map((item) => item.secondId);

      setFavoriteTutor(() => {
        return newListID;
      });
      let data = response.tutors.rows.filter((item) => {
        return item.avatar != null && item.level != null;
      });
      data = data.filter((item) => {
        return newListID.includes(item.id);
      });

      setListTutor(data);
    }
    fetchData();
  }, [avatar]);
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
