import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useState, useContext, useEffect } from "react";
import LocalizationContext from "../../context/LocalizationProvider";
import { Searchbar } from "react-native-paper";
import CourseCard from "../../components/CourseCard";
import { getListCourse } from "../../services/courseAPI";
import ThemeContext from "../../context/ThemeProvider";

export default function Courses() {
  const { themeData, setMode } = useContext(ThemeContext);

  const { i18n } = useContext(LocalizationContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [dataCourse, setDataCourse] = useState([]);
  const [page, setPage] = useState(1);
  async function fetchData(page) {
    const response = await getListCourse({ page: page, search: "" });
    setDataCourse([...dataCourse, ...response.data.data.rows]);
  }
  useEffect(() => {
    fetchData(1);
  }, []);

  useEffect(() => {
    if (searchQuery == "") {
      fetchData(1);
    }
  }, [searchQuery]);
  const onChangeSearch = (query) => setSearchQuery(query);
  const handleSearch = async () => {
    const response = await getListCourse({ page: 1, search: searchQuery });
    if (response.data.data.rows.length > 0) {
      setDataCourse(response.data.data.rows);
    } else {
      setDataCourse([]);
    }
  };
  return (
    <View
      style={[styles.container, { backgroundColor: themeData.backgroundColor }]}
    >
      <Searchbar
        placeholder={i18n.t("Search")}
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchBar}
        onIconPress={handleSearch}
      />
      <FlatList
        data={dataCourse}
        renderItem={({ item }) => <CourseCard data={item} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
        style={styles.flatList}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          setPage(page + 1);
          fetchData(page + 1);
        }}
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
