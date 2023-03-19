import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import TeacherCard from "../../components/TeacherCard";
import LocalizationContext from "../../context/LocalizationProvider";
import { Searchbar } from "react-native-paper";
import DropDownPicker from "react-native-dropdown-picker";
import { getListTutor } from "../../services/tutorAPI";
import { getSpecialitiesListLabel } from "../../business/handleTagSpecialities";
export default function Teachers() {
  const { i18n } = useContext(LocalizationContext);
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  const [listTutor, setListTutor] = React.useState([]);
  const [rawListTutor, setRawListTutor] = React.useState([]);

  const [openCourses, setOpenCourses] = useState(false);
  const [valueCourses, setValueCourses] = useState([]);
  const [itemsCourses, setItemsCourses] = useState([
    { label: "STARTERS", value: "starters" },
    { label: "MOVERS", value: "movers" },
    { label: "FLYERS", value: "flyers" },
    { label: "KET", value: "ket" },
    { label: "PET", value: "pet" },
    { label: "IELTS", value: "ielts" },
    { label: "TOEFL", value: "toefl" },
    { label: "TOIEC", value: "toeic" },
  ]);
  useEffect(() => {
    async function fetchData() {
      const response = await getListTutor(1, 60);
      const data = response.tutors.rows.filter((item) => {
        return item.avatar != null && item.level != null;
      });
      setListTutor(data);
      setRawListTutor(data);
    }
    fetchData();
  }, []);
  useEffect(() => {
    const newList = rawListTutor.filter((item) => {
      const listSpecialies = item.specialties.split(",");
      return valueCourses.every((val) => listSpecialies.includes(val));
    });
    setListTutor(newList);
  }, [valueCourses]);
  return (
    <View style={styles.container}>
      <Searchbar
        placeholder={i18n.t("Search")}
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchBar}
      />
      <DropDownPicker
        placeholder={i18n.t("Specilities")}
        multiple={true}
        style={styles.filterBar}
        open={openCourses}
        value={valueCourses}
        items={itemsCourses}
        setOpen={setOpenCourses}
        setValue={setValueCourses}
        setItems={setItemsCourses}
        theme="LIGHT"
        mode="BADGE"
        badgeDotColors={[
          "#e76f51",
          "#00b4d8",
          "#e9c46a",
          "#e76f51",
          "#8ac926",
          "#00b4d8",
          "#e9c46a",
        ]}
      />
      <FlatList
        data={listTutor}
        renderItem={({ item }) => <TeacherCard data={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  searchBar: {
    width: "90%",
    borderRadius: 10,
    alignSelf: "center",
    marginVertical: 10,
  },
  filterBar: {
    width: "90%",
    marginTop: 5,
    alignSelf: "center",
    marginBottom: 5,
  },
});
