import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { ROUTES } from "../../constants";

export default function Logout({ navigation }) {
  useEffect(() => {
    navigation.navigate(ROUTES.LOGIN);
  }, []);
  return (
    <View>
      <Text>Logout</Text>
    </View>
  );
}
