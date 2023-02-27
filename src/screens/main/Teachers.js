import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useContext, useState } from "react";
import TeacherCard from "../../components/TeacherCard";
import LocalizationContext from "../../context/LocalizationProvider";
import { Searchbar } from "react-native-paper";
import DropDownPicker from "react-native-dropdown-picker";

export default function Teachers() {
  const { i18n } = useContext(LocalizationContext);
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  const [openCourses, setOpenCourses] = useState(false);
  const [valueCourses, setValueCourses] = useState([]);
  const [itemsCourses, setItemsCourses] = useState([
    { label: "STARTERS", value: "STARTERS" },
    { label: "MOVERS", value: "MOVERS" },
    { label: "FLYERS", value: "FLYERS" },
    { label: "KET", value: "KET" },
    { label: "PET", value: "PET" },
    { label: "IELTS", value: "IELTS" },
    { label: "TOEFL", value: "TOEFL" },
    { label: "TOIEC", value: "TOIEC" },
  ]);
  const arr = [];

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
