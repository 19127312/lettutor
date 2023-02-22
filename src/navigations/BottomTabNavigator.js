import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Courses, Schedule, Teachers } from "../screens";
import { ROUTES, COLORS } from "../constants";
import Icon from "react-native-vector-icons/Ionicons";
const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerTitleAlign: "center",
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: COLORS.gray,
        tabBarActiveTintColor: COLORS.primary,
        // headerTintColor: COLORS.white,
        // headerStyle: {
        //   backgroundColor: COLORS.primary,
        // },
        tabBarIcon: ({ focused, color, size }) => {
          return (
            <Icon
              name={
                route.name === ROUTES.HOME_TAB
                  ? focused
                    ? "home"
                    : "home-outline"
                  : route.name === ROUTES.COURSES
                  ? focused
                    ? "book"
                    : "book-outline"
                  : route.name === ROUTES.SCHEDULE
                  ? focused
                    ? "calendar"
                    : "calendar-outline"
                  : focused
                  ? "people"
                  : "people-outline"
              }
              size={size}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen
        name={ROUTES.HOME_TAB}
        component={Home}
        options={{ tabBarLabel: "Home" }}
      />
      <Tab.Screen name={ROUTES.SCHEDULE} component={Schedule} />
      <Tab.Screen name={ROUTES.TEACHERS} component={Teachers} />
      <Tab.Screen name={ROUTES.COURSES} component={Courses} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
