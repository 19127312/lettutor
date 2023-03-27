import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useState, useContext, useEffect } from "react";
import LocalizationContext from "../../context/LocalizationProvider";
import { Searchbar } from "react-native-paper";
import CourseCard from "../../components/CourseCard";
import { getListCourse } from "../../services/courseAPI";
export default function Courses() {
  const { i18n } = useContext(LocalizationContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [dataCourse, setDataCourse] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await getListCourse();
      setDataCourse(response.data.data.rows);
    }
    fetchData();
  }, []);
  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <View style={styles.container}>
      <Searchbar
        placeholder={i18n.t("Search")}
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchBar}
      />
      <FlatList
        data={dataCourse}
        renderItem={({ item }) => <CourseCard data={item} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
        style={styles.flatList}
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
  flatList: {
    width: "90%",
    marginTop: 5,
    alignSelf: "center",
    marginBottom: 5,
  },
});
