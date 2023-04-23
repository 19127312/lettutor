import { Text, View, Dimensions } from "react-native";
import React from "react";

export default function ChatItem({ item }) {
  return (
    <View style={{ marginTop: 6 }}>
      <View
        style={{
          maxWidth: Dimensions.get("screen").width * 0.8,
          backgroundColor: "#3a6ee8",
          alignSelf: item.role === "user" ? "flex-end" : "flex-start",
          marginHorizontal: 10,
          padding: 10,
          borderRadius: 8,
          borderBottomLeftRadius: item.fromMe ? 8 : 0,
          borderBottomRightRadius: item.fromMe ? 0 : 8,
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 16,
          }}
        >
          {item.content}
        </Text>
      </View>
    </View>
  );
}
