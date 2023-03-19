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
import Animated from "react-native-reanimated";
import BottomSheet from "reanimated-bottom-sheet";
import { AntDesign } from "@expo/vector-icons";
import LocalizationContext from "../../context/LocalizationProvider";
import { Rating, AirbnbRating } from "react-native-elements";
import { COLORS } from "../../constants";
import { ScrollView } from "react-native-virtualized-view";
import ListTag from "../../components/ListTag";
import CommentCard from "../../components/CommentCard";
import BookingBottomSheet from "../../components/BookingBottomSheet";
import { Video, AVPlaybackStatus } from "expo-av";
import { Modal, Portal, Provider, TextInput } from "react-native-paper";
import { FlatList } from "react-native-gesture-handler";
import { getSpecialitiesListLabel } from "../../business/handleTagSpecialities";
import { getLanguagesListLabel } from "../../business/handleTagLanguage";
import { favorAction } from "../../services/tutorAPI";
export default function TeacherDetail({ route }) {
  const { data, isLiked } = route.params;
  const { i18n } = useContext(LocalizationContext);
  const video = React.useRef(null);
  const sheetRef = React.useRef(null);

  const [visible, setVisible] = useState(false);
  const [report, setReport] = useState("");
  const [liked, setLiked] = useState(isLiked);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const listLanguages = getLanguagesListLabel(data.languages.split(","));
  const listSpecialies = getSpecialitiesListLabel(data.specialties.split(","));
  const listRating = data.feedbacks;
  const sentReport = () => {
    console.log(report);
    hideModal();
  };

  const handleBooking = (item) => {
    console.log(item);
    sheetRef.current.snapTo(2);
  };
  const handleLike = async () => {
    setLiked(!liked);
    await favorAction(data.id);
  };
  const renderContent = () => (
    <BookingBottomSheet onBooking={(item) => handleBooking(item)} />
  );
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Provider>
        {/* Report Modal */}

        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={styles.modalStyle}
          >
            <TextInput
              mode="outlined"
              style={styles.input}
              value={report}
              onChangeText={setReport}
              name="Report"
              label={i18n.t("Report")}
              defaultValue=""
              multiline={true}
              numberOfLines={4}
            />
            <TouchableOpacity
              style={{
                ...styles.interactButton,
                backgroundColor: "white",
                borderWidth: 2,
                borderColor: COLORS.danger,
              }}
              onPress={sentReport}
            >
              <Text
                style={{ ...styles.interactButtonText, color: COLORS.danger }}
              >
                {i18n.t("Sent")}
              </Text>
            </TouchableOpacity>
          </Modal>
        </Portal>

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
                      uri: data.avatar,
                    }}
                  />
                </View>
                {/* Profile Name and Bio */}
                <View style={styles.nameAndBioView}>
                  <Text style={styles.userFullName}>{data.name}</Text>
                </View>
                <Rating
                  type="custom"
                  readonly={true}
                  startingValue={data.rating}
                  style={{
                    marginVertical: 1,
                    alignSelf: "center",
                  }}
                  imageSize={20}
                  ratingBackgroundColor="transparent"
                />
                {/* Book,Message, Report */}
                <View style={styles.countsView}>
                  <View
                    style={{
                      ...styles.countView,
                      flex: 4,
                      alignItems: "flex-start",
                      marginLeft: 30,
                    }}
                  >
                    <Text style={styles.countText}>From {data.country}</Text>
                  </View>
                  <View style={{ ...styles.countView, flex: 1 }}>
                    <TouchableOpacity onPress={handleLike}>
                      <AntDesign
                        name={liked ? "heart" : "hearto"}
                        size={24}
                        color="blue"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                {/* Video*/}
                <Video
                  ref={video}
                  style={styles.video}
                  source={{
                    uri: data.video,
                  }}
                  useNativeControls
                  resizeMode="contain"
                  isLooping
                />

                {/* Interact Buttons View */}
                <View style={styles.interactButtonsView}>
                  <TouchableOpacity
                    style={styles.interactButton}
                    onPress={() => sheetRef.current.snapTo(0)}
                  >
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
                    onPress={showModal}
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
                <Text style={styles.paragraph}>{data.bio}</Text>
                <Text style={styles.headingParagraph}>
                  {i18n.t("Language")}
                </Text>
                <View style={styles.tagItem}>
                  <ListTag tags={listLanguages} />
                </View>
                <Text style={styles.headingParagraph}>
                  {i18n.t("Education")}
                </Text>
                <Text style={styles.paragraph}>{data.education}</Text>
                <Text style={styles.headingParagraph}>
                  {i18n.t("Experience")}
                </Text>
                <Text style={styles.paragraph}>{data.experience}</Text>
                <Text style={styles.headingParagraph}>
                  {i18n.t("Interests")}
                </Text>
                <Text style={styles.paragraph}>{data.interests}</Text>
                <Text style={styles.headingParagraph}>
                  {i18n.t("Professional")}
                </Text>
                <Text style={styles.paragraph}>{data.profession}</Text>
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
                <FlatList
                  data={listRating}
                  renderItem={({ item }) => <CommentCard data={item} />}
                  style={styles.commentList}
                />
              </View>
            </View>
          </>
        </ScrollView>
      </Provider>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[450, 300, 0]}
        borderRadius={10}
        renderContent={renderContent}
        initialSnap={2}
        enabledInnerScrolling={true}
      />
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
  commentList: {
    marginTop: 5,
    marginHorizontal: 30,
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
    marginBottom: 10,
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
  modalStyle: {
    backgroundColor: "white",
    padding: 20,
    height: 200,
  },
});
