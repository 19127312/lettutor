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
} from "react-native";
import { Icon } from "react-native-elements";
import ChatItem from "../../components/ChatItem";
import axios from "axios";
import { REACT_APP_API_KEY } from "@env";

export default function ChatScreen1() {
  const [messages, setMessages] = useState([]);

  const [inputMessage, setInputMessage] = useState("");

  async function sendMessage() {
    if (inputMessage === "") {
      return setInputMessage("");
    }
    setMessages((pre) => {
      return [...pre, { message: inputMessage, fromMe: true }];
    });
    setInputMessage("");

    const apikey = REACT_APP_API_KEY;
    const response = await axios.post(
      "https://api.openai.com/v1/completions",
      {
        prompt: inputMessage,
        max_tokens: 60,
        temperature: 0.7,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        model: "text-davinci-003",
      },
      {
        headers: {
          Authorization: `Bearer ${apikey}`,
          "Content-Type": "application/json",
        },
      }
    );
    const res = response.data.choices[0].text;
    let mess = res.replace(/^\n/, "");
    mess = mess.replace(/^\n/, "");

    setMessages((pre) => {
      return [...pre, { message: mess, fromMe: false }];
    });
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <FlatList
          style={{ backgroundColor: "#f2f2ff" }}
          inverted={true}
          data={JSON.parse(JSON.stringify(messages)).reverse()}
          renderItem={({ item }) => <ChatItem item={item} />}
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
