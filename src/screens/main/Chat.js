import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ActivityIndicator,
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
  const [allMessages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [inputMessage, setInputMessage] = useState("");

  async function sendMessage() {
    if (inputMessage === "") {
      setInputMessage("");
      return;
    }
    setMessages((pre) => {
      return [...pre, { content: inputMessage, role: "user" }];
    });
    setInputMessage("");
    allMessages.push({ content: inputMessage, role: "user" });
    const apikey = REACT_APP_API_KEY;
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [...allMessages],
      },
      {
        headers: {
          Authorization: `Bearer ${apikey}`,
          "Content-Type": "application/json",
        },
      }
    );
    const res = response.data.choices[0].message.content;
    let mess = res.replace(/^\n/, "");
    mess = mess.replace(/^\n/, "");
    setMessages((pre) => {
      return [...pre, { content: mess, role: "assistant" }];
    });
    setLoading(false);
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <FlatList
          style={{ backgroundColor: "#f2f2ff" }}
          inverted={true}
          data={JSON.parse(JSON.stringify(allMessages)).reverse()}
          renderItem={({ item }) => <ChatItem item={item} />}
        />
        {loading && (
          <View style={styles.loading}>
            <ActivityIndicator size="large" />
          </View>
        )}

        <View style={{ paddingVertical: 10 }}>
          <View style={styles.messageInputView}>
            <TextInput
              defaultValue={inputMessage}
              style={styles.messageInput}
              placeholder="Message"
              onChangeText={(text) => setInputMessage(text)}
              onSubmitEditing={() => {
                setLoading(true);
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
    justifyContent: "center",
  },
  messageInputView: {
    display: "flex",
    flexDirection: "row",
    marginHorizontal: 10,
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
  loading: {
    marginVertical: 10,
  },
});
