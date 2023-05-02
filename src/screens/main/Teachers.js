import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React, { useContext, useState, useEffect } from "react";
import TeacherCard from "../../components/TeacherCard";
import LocalizationContext from "../../context/LocalizationProvider";
import { Searchbar } from "react-native-paper";
import DropDownPicker from "react-native-dropdown-picker";
import { getListTutor } from "../../services/tutorAPI";
import { getFlag } from "../../business/handleFlag";
import { searchTutor } from "../../services/tutorAPI";
import { COLORS, ROUTES } from "../../constants";
import ThemeContext from "../../context/ThemeProvider";

export default function Teachers() {
  const { themeData, setMode } = useContext(ThemeContext);

  const { i18n } = useContext(LocalizationContext);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [flag, setflag] = useState("global");
  const onChangeSearch = (query) => setSearchQuery(query);
  const [listTutor, setListTutor] = React.useState([]);
  const [rawListTutor, setRawListTutor] = React.useState([]);
  const [favoriteTutor, setFavoriteTutor] = React.useState([]);

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
      setFavoriteTutor(() => {
        const newListID = response.favoriteTutor.map((item) => item.secondId);
        return newListID;
      });
      const data = response.tutors.rows.filter((item) => {
        return item.avatar != null && item.level != null;
      });
      setListTutor(data);
      setRawListTutor(data);
      setIsLoading(false);
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

  useEffect(() => {
    if (searchQuery == "") {
      setListTutor(rawListTutor);
    }
  }, [searchQuery]);

  const handleSearch = async () => {
    const response = await searchTutor(searchQuery);
    if (response.rows.length > 0) {
      const data = response.rows
        .filter((item) => {
          return item.avatar != null && item.level != null;
        })
        .filter((item) => {
          if (flag == "global") {
            return item.country == "VN";
          } else {
            return item;
          }
        });

      setListTutor(data);
    } else {
      setListTutor([]);
    }
  };

  return (
    <View
      style={[styles.container, { backgroundColor: themeData.backgroundColor }]}
    >
      <View style={styles.searchRow}>
        <Searchbar
          placeholder={i18n.t("Search")}
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={styles.searchBar}
          onIconPress={handleSearch}
        />
        <Pressable
          onPress={() => {
            setflag(flag == "VN" ? "global" : "VN");
            handleSearch();
          }}
        >
          <Image style={styles.flag} source={getFlag(flag)} />
        </Pressable>
      </View>

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
      <>
        {isLoading ? (
          <ActivityIndicator
            size="large"
            color={COLORS.primary}
            style={styles.centerLoading}
          />
        ) : listTutor.length > 0 ? (
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
        ) : (
          <View style={styles.emptyContainer}>
            <Image
              style={styles.emptyImg}
              source={require("../../assets/empty.png")}
            />
            <Text style={styles.emptyText}>{i18n.t("NoResult")}</Text>
          </View>
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
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyImg: {
    width: 300,
    height: 200,
  },
  emptyText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#e76f51",
    marginTop: 20,
  },
  searchRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginHorizontal: 10,
  },
  searchBar: {
    width: "80%",
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
  flag: {
    width: 30,
    height: 30,
  },
  centerLoading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
