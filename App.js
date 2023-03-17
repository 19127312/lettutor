import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import ScreenStackNavigator from "./src/navigations/ScreenStackNavigator";
import { LocalizationProvider } from "./src/context/LocalizationProvider";
import { ThemeProvider } from "./src/context/ThemeProvider";
import { AuthProvider } from "./src/context/AuthProvider";
export default function App() {
  return (
    //Checking if the user is logged in or not here
    <LocalizationProvider>
      <AuthProvider>
        <ThemeProvider>
          <NavigationContainer>
            <ScreenStackNavigator />
          </NavigationContainer>
        </ThemeProvider>
      </AuthProvider>
    </LocalizationProvider>
  );
}
