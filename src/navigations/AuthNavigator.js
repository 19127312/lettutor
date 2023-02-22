import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Login, Register, ForgotPassword } from "../screens";
import { ROUTES } from "../constants";
import DrawerNavigator from "./DrawerNavigator";
const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.LOGIN}
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ROUTES.REGISTER}
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ROUTES.FORGOT_PASSWORD}
        component={ForgotPassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ROUTES.HOME}
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
