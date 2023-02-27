import React, { useState, useContext, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Dimensions,
  Button,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import LocalizationContext from "../../context/LocalizationProvider";
import { Rating, AirbnbRating } from "react-native-elements";
import { COLORS } from "../../constants";
import { ScrollView } from "react-native-virtualized-view";
import ListTag from "../../components/ListTag";
import { Video, AVPlaybackStatus } from "expo-av";
export default function ProfileScreen1() {
  const { i18n } = useContext(LocalizationContext);
  const video = React.useRef(null);

  const listLanguages = ["English", "Math", "Physics"];
  const listSpecialies = ["English", "Math", "Physics"];
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <>
          <View>
            <Image
              style={styles.coverImage}
              source={{ uri: "https://picsum.photos/500/500?random=211" }}
            />
          </View>
          <View style={styles.profileContainer}>
            {/* Profile Details */}
            <View>
              {/* Profile Image */}
              <View style={styles.profileImageView}>
                <Image
                  style={styles.profileImage}
                  source={{
                    uri: "https://randomuser.me/api/portraits/women/46.jpg",
                  }}
                />
              </View>
              {/* Profile Name and Bio */}
              <View style={styles.nameAndBioView}>
                <Text style={styles.userFullName}>{"Sophie Welch"}</Text>
              </View>
              <Rating
                type="custom"
                readonly={true}
                startingValue={3}
                style={{
                  marginVertical: 1,
                  alignSelf: "center",
                }}
                imageSize={20}
                ratingBackgroundColor="transparent"
              />
              {/* Posts/Followers/Following View */}
              <View style={styles.countsView}>
                <View
                  style={{
                    ...styles.countView,
                    flex: 4,
                    alignItems: "flex-start",
                    marginLeft: 30,
                  }}
                >
                  <Text style={styles.countText}>From Viet Nam</Text>
                </View>
                <View style={{ ...styles.countView, flex: 1 }}>
                  <AntDesign name={"hearto"} size={24} color="blue" />
                </View>
              </View>
              {/* Video*/}
              <Video
                ref={video}
                style={styles.video}
                source={{
                  uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
                }}
                useNativeControls
                resizeMode="contain"
                isLooping
              />

              {/* Interact Buttons View */}
              <View style={styles.interactButtonsView}>
                <TouchableOpacity style={styles.interactButton}>
                  <Text style={styles.interactButtonText}>
                    {i18n.t("Book")}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    ...styles.interactButton,
                    backgroundColor: "white",
                    borderWidth: 2,
                    borderColor: "#4b7bec",
                  }}
                >
                  <Text
                    style={{ ...styles.interactButtonText, color: "#4b7bec" }}
                  >
                    {i18n.t("Message")}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    ...styles.interactButton,
                    flex: 1,
                    backgroundColor: "white",
                    borderWidth: 2,
                    borderColor: "#4b7bec",
                  }}
                >
                  <Text
                    style={{
                      ...styles.interactButtonText,
                      color: "#4b7bec",
                      textAlign: "center",
                    }}
                  >
                    ...
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* Profile Content */}
            <View style={styles.profileContent}>
              <Text style={styles.headingParagraph}>{i18n.t("AboutMe")}</Text>
              <Text style={styles.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                nulla neque, scelerisque sit amet velit eu, vestibulum ultricies
                odio.
              </Text>
              <Text style={styles.headingParagraph}>{i18n.t("Language")}</Text>
              <View style={styles.tagItem}>
                <ListTag tags={listLanguages} />
              </View>
              <Text style={styles.headingParagraph}>{i18n.t("Education")}</Text>
              <Text style={styles.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                nulla neque, scelerisque sit amet velit eu, vestibulum ultricies
                odio.
              </Text>
              <Text style={styles.headingParagraph}>
                {i18n.t("Expericence")}
              </Text>
              <Text style={styles.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                nulla neque, scelerisque sit amet velit eu, vestibulum ultricies
                odio.
              </Text>
              <Text style={styles.headingParagraph}>{i18n.t("Interests")}</Text>
              <Text style={styles.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                nulla neque, scelerisque sit amet velit eu, vestibulum ultricies
                odio.
              </Text>
              <Text style={styles.headingParagraph}>
                {i18n.t("Professional")}
              </Text>
              <Text style={styles.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                nulla neque, scelerisque sit amet velit eu, vestibulum ultricies
                odio.
              </Text>
              <Text style={styles.headingParagraph}>
                {i18n.t("Specilities")}
              </Text>
              <View style={styles.tagItem}>
                <ListTag tags={listSpecialies} />
              </View>
              <Text style={styles.headingParagraph}>{i18n.t("Course")}</Text>
              <Text style={styles.paragraph}>No Data</Text>
              <Text style={styles.headingParagraph}>
                {i18n.t("RatingAndComment")}
              </Text>
            </View>
          </View>
        </>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  coverImage: { height: 200, width: "100%" },
  profileContainer: {
    // height: 1000,
    backgroundColor: "#fff",
    marginTop: -100,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  profileImageView: { alignItems: "center", marginTop: -50 },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "#fff",
  },
  nameAndBioView: { alignItems: "center", marginTop: 10 },
  userFullName: { fontSize: 26 },
  userBio: {
    fontSize: 18,
    color: "#333",
    marginTop: 4,
  },
  countsView: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
    alignItems: "space-between",
    width: "100%",
  },
  countView: { flex: 1, alignItems: "center" },
  countNum: { fontSize: 20 },
  countText: { fontSize: 18, color: "#333", justifyContent: "flex-start" },
  interactButtonsView: {
    flexDirection: "row",
    marginTop: 10,
    paddingHorizontal: 20,
  },
  interactButton: {
    flex: 2,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#4b7bec",
    margin: 5,
    borderRadius: 4,
  },
  interactButtonText: {
    color: "#fff",
    fontSize: 18,
    paddingVertical: 6,
  },
  profileContentButtonsView: {
    flexDirection: "row",
    borderTopWidth: 2,
    borderTopColor: "#f1f3f6",
  },
  showContentButton: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
    borderBottomColor: "#000",
  },
  showContentButtonText: {
    fontSize: 18,
  },
  headingParagraph: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.primary,
    marginLeft: 30,
    marginVertical: 5,
  },
  paragraph: {
    fontSize: 15,
    marginHorizontal: 35,
    marginVertical: 5,
  },
  tagItem: {
    marginVertical: 5,
    marginHorizontal: 35,
  },
  video: {
    width: "100%",
    height: 200,
  },
});
