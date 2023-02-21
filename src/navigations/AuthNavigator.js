import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Login, Register } from "../screens";
import { ROUTES } from "../constants";
const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.LOGIN}
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={ROUTES.REGISTER} component={Register} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
