import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useState, useContext } from "react";
import LocalizationContext from "../../context/LocalizationProvider";
import { Searchbar } from "react-native-paper";
import CourseCard from "../../components/CourseCard";

export default function Courses() {
  const { i18n } = useContext(LocalizationContext);
  const [searchQuery, setSearchQuery] = useState("");
  const arr = [1, 2, 3, 4, 5];

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
        data={arr}
        renderItem={({ item }) => <CourseCard />}
        keyExtractor={(item) => item.toString()}
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
