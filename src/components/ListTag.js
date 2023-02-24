import React from "react";
import { FlatList, StyleSheet } from "react-native";
import TagItem from "./TagItem";

export default function ListTag({ tags }) {
  return (
    <FlatList
      columnWrapperStyle={styles.listTag}
      numColumns={10}
      data={tags}
      renderItem={TagItem}
      keyExtractor={(item) => item}
      style={styles.listTag}
    />
  );
}

const styles = StyleSheet.create({
  listTag: {
    flexWrap: "wrap",
  },
});
