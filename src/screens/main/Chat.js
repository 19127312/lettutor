import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  Dimensions,
} from "react-native";
import { Icon } from "react-native-elements";

export default function ChatScreen1() {
  const [currentUser] = useState({
    name: "John Doe",
  });

  const [messages, setMessages] = useState([
    { sender: "John Doe", message: "Hey there!", time: "6:01 PM" },
    {
      sender: "Robert Henry",
      message: "Hello, how are you doing?",
      time: "6:02 PM",
    },
    {
      sender: "John Doe",
      message: "I am good, how about you?",
      time: "6:02 PM",
    },
    {
      sender: "John Doe",
      message: `😊😇`,
      time: "6:02 PM",
    },
    {
      sender: "Robert Henry",
      message: `Can't wait to meet you.`,
      time: "6:03 PM",
    },
    {
      sender: "John Doe",
      message: `That's great, when are you coming?`,
      time: "6:03 PM",
    },
    {
      sender: "Robert Henry",
      message: `This weekend.`,
      time: "6:03 PM",
    },
    {
      sender: "Robert Henry",
      message: `Around 4 to 6 PM.`,
      time: "6:04 PM",
    },
    {
      sender: "John Doe",
      message: `Great, don't forget to bring me some mangoes.`,
      time: "6:05 PM",
    },
    {
      sender: "Robert Henry",
      message: `Sure!`,
      time: "6:05 PM",
    },
  ]);

  const [inputMessage, setInputMessage] = useState("");

  function sendMessage() {
    if (inputMessage === "") {
      return setInputMessage("");
    }
    setMessages([
      ...messages,
      {
        sender: currentUser.name,
        message: inputMessage,
      },
    ]);
    setInputMessage("");
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <FlatList
          style={{ backgroundColor: "#f2f2ff" }}
          inverted={true}
          data={JSON.parse(JSON.stringify(messages)).reverse()}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback>
              <View style={{ marginTop: 6 }}>
                <View
                  style={{
                    maxWidth: Dimensions.get("screen").width * 0.8,
                    backgroundColor: "#3a6ee8",
                    alignSelf:
                      item.sender === currentUser.name
                        ? "flex-end"
                        : "flex-start",
                    marginHorizontal: 10,
                    padding: 10,
                    borderRadius: 8,
                    borderBottomLeftRadius:
                      item.sender === currentUser.name ? 8 : 0,
                    borderBottomRightRadius:
                      item.sender === currentUser.name ? 0 : 8,
                  }}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 16,
                    }}
                  >
                    {item.message}
                  </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          )}
        />

        <View style={{ paddingVertical: 10 }}>
          <View style={styles.messageInputView}>
            <TextInput
              defaultValue={inputMessage}
              style={styles.messageInput}
              placeholder="Message"
              onChangeText={(text) => setInputMessage(text)}
              onSubmitEditing={() => {
                sendMessage();
              }}
            />
            <TouchableOpacity
              style={styles.messageSendView}
              onPress={() => {
                sendMessage();
              }}
            >
              <Icon name="send" type="material" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  headerLeft: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  userProfileImage: { height: "100%", aspectRatio: 1, borderRadius: 100 },
  container: {
    flex: 1,
    backgroundColor: "#f2f2ff",
  },
  messageInputView: {
    display: "flex",
    flexDirection: "row",
    marginHorizontal: 14,
    backgroundColor: "#fff",
    borderRadius: 4,
  },
  messageInput: {
    height: 40,
    flex: 1,
    paddingHorizontal: 10,
  },
  messageSendView: {
    paddingHorizontal: 10,
    justifyContent: "center",
  },
});
