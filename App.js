import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import AuthNavigator from "./src/navigations/AuthNavigator";
import { LocalizationProvider } from "./src/context/LocalizationProvider";
import { ThemeProvider } from "./src/context/ThemeProvider";
export default function App() {
  return (
    //Checking if the user is logged in or not here
    <LocalizationProvider>
      <ThemeProvider>
        <NavigationContainer>
          <AuthNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </LocalizationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
