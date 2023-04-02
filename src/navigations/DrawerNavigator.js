import React, { useContext } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  BecomeTeacher,
  FavoriteTeachers,
  HistoryCourses,
  Logout,
  Profile,
  Settings,
} from "../screens";
import { ROUTES, COLORS } from "../constants";
import Icon from "react-native-vector-icons/Ionicons";
import CustomDrawer from "../components/CustomDrawer";

import BottomTabNavigator from "./BottomTabNavigator";
import LocalizationContext from "../context/LocalizationProvider";
import ThemeContext from "../context/ThemeProvider";
import { AvatarProvider } from "../context/AvatarProvider";
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  const { i18n } = useContext(LocalizationContext);
  const { themeData } = useContext(ThemeContext);
  return (
    <AvatarProvider>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
          headerTitleAlign: "center",
          headerTintColor: themeData.color,
          drawerActiveBackgroundColor: COLORS.primary,
          drawerActiveTintColor: COLORS.white,
          drawerInactiveTintColor: themeData.color,
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          drawerStyle: {
            backgroundColor: themeData.backgroundColor,
            borderColor: COLORS.white,
            borderWidth: 1,
          },
        }}
      >
        <Drawer.Screen
          name={ROUTES.HOME_DRAWER}
          component={BottomTabNavigator}
          options={{
            title: "Let Tutor",
            drawerIcon: ({ focused, color, size }) => (
              <Icon name="home-sharp" size={18} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name={ROUTES.PROFILE}
          component={Profile}
          options={{
            // title: "Let Tutor",
            drawerIcon: ({ focused, color, size }) => (
              <Icon name="person-sharp" size={18} color={color} />
            ),
            title: i18n.t("Profile"),
          }}
        />
        <Drawer.Screen
          name={ROUTES.FAVORITE_TEACHERS}
          component={FavoriteTeachers}
          options={{
            // title: "Let Tutor",
            drawerIcon: ({ focused, color, size }) => (
              <Icon name="heart" size={18} color={color} />
            ),
            title: i18n.t("FavoriteTeachers"),
          }}
        />
        <Drawer.Screen
          name={ROUTES.BECOME_TEACHER}
          component={BecomeTeacher}
          options={{
            // title: "Let Tutor",
            drawerIcon: ({ focused, color, size }) => (
              <Icon name="body" size={18} color={color} />
            ),
            title: i18n.t("BecomeTeacher"),
          }}
        />
        <Drawer.Screen
          name={ROUTES.HISTORY_COURSES}
          component={HistoryCourses}
          options={{
            // title: "Let Tutor",
            drawerIcon: ({ focused, color, size }) => (
              <Icon name="hourglass" size={18} color={color} />
            ),
            title: i18n.t("HistoryCourses"),
          }}
        />
        <Drawer.Screen
          name={ROUTES.SETTINGS}
          component={Settings}
          options={{
            // title: "Let Tutor",
            drawerIcon: ({ focused, color, size }) => (
              <Icon name="settings" size={18} color={color} />
            ),
            title: i18n.t("Settings"),
          }}
        />
        <Drawer.Screen
          name={ROUTES.LOGOUT}
          component={Logout}
          options={{
            // title: "Let Tutor",
            drawerIcon: ({ focused, color, size }) => (
              <Icon name="log-out" size={18} color={color} />
            ),
            title: i18n.t("Logout"),
          }}
        />
      </Drawer.Navigator>
    </AvatarProvider>
  );
}

export default DrawerNavigator;
