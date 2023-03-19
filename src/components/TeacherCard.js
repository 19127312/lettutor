import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useState } from "react";
import ListTag from "./ListTag";
import { AntDesign } from "@expo/vector-icons";
import { COLORS, IMGS, ROUTES } from "../constants";
import { Rating } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { getSpecialitiesListLabel } from "../business/handleTagSpecialities";
import { favorAction } from "../services/tutorAPI";
export default function TeacherCard({ data, isLiked }) {
  const navigation = useNavigation();
  const [followStatus, setFollowStatus] = useState(isLiked);
  const listSpecialies = getSpecialitiesListLabel(data.specialties.split(","));

  return (
    <View style={styles.outerContainer}>
      <Pressable
        onPress={() => {
          navigation.navigate(ROUTES.TEACHER_DETAIL, { data, isLiked });
        }}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.HeaderRight}>
              <Image style={styles.avtimg} source={{ uri: data.avatar }} />
              <View style={styles.nameContainer}>
                <Text style={styles.name}>{data.name}</Text>

                <Rating
                  type="custom"
                  readonly={true}
                  startingValue={data.rating}
                  style={{
                    marginVertical: 1,
                    alignSelf: "flex-start",
                  }}
                  imageSize={20}
                  ratingBackgroundColor="transparent"
                />
                <Image style={styles.flag} source={IMGS.vi} />
              </View>
            </View>
            <View style={styles.HeaderLeft}>
              <Pressable
                style={styles.btnFollow}
                onPress={async () => {
                  setFollowStatus(!followStatus);
                  await favorAction(data.id);
                }}
              >
                <AntDesign
                  name={followStatus ? "heart" : "hearto"}
                  size={24}
                  color="blue"
                />
              </Pressable>
            </View>
          </View>
          <View style={styles.tagItem}>
            <ListTag tags={listSpecialies} />
          </View>
          <View style={styles.descript}>
            <Text numberOfLines={4} style={styles.textDescript}>
              {data.bio}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
  },

  outerContainer: {
    flex: 1,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.26,
    overflow: "hidden",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    backgroundColor: COLORS.white,
    marginVertical: 5,
    borderRadius: 16,
    marginHorizontal: 16,
  },
  header: {
    flexDirection: "row",
  },
  HeaderRight: {
    flexDirection: "row",
    flex: 4,
    marginTop: 20,
    marginLeft: 20,
  },
  HeaderLeft: {
    flex: 1,
    alignItems: "flex-end",
    marginRight: 20,
    marginTop: 20,
  },
  avtimg: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 0.5,
    borderColor: "gray",
  },
  name: {
    fontSize: 18,
    fontWeight: "400",
  },
  ensign: {
    width: 40,
    height: 30,
    marginRight: 10,
  },
  labelCountry: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    marginBottom: 8,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  nonrating: {
    fontStyle: "italic",
    opacity: 0.6,
  },
  tagItem: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: 12,
    marginVertical: 10,
  },
  descript: {
    marginHorizontal: 20,
    marginBottom: 15,
  },
  textDescript: {
    color: COLORS.black,
  },
  nameContainer: {
    flexDirection: "column",
    marginLeft: 10,
  },
  flag: {
    width: 30,
    height: 20,
  },
});
