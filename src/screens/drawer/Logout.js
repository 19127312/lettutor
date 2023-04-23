import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { ROUTES } from "../../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Logout({ navigation }) {
  useEffect(() => {
    async function logout() {
      await AsyncStorage.removeItem("accessToken");
      await AsyncStorage.removeItem("refreshToken");
      navigation.navigate(ROUTES.LOGIN);
    }
    logout();
  }, []);
  return (
    <View>
      <Text>Logout</Text>
    </View>
  );
}
