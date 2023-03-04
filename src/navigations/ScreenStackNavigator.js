import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Login,
  Register,
  ForgotPassword,
  CourseDetail,
  TeacherDetail,
  Video,
  PDFView,
} from "../screens";
import { ROUTES } from "../constants";
import DrawerNavigator from "./DrawerNavigator";
const Stack = createStackNavigator();

function ScreenStackNavigator() {
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
      <Stack.Screen name={ROUTES.COURSE_DETAIL} component={CourseDetail} />
      <Stack.Screen
        name={ROUTES.TEACHER_DETAIL}
        component={TeacherDetail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ROUTES.VIDEO}
        component={Video}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={ROUTES.PDF_VIEW} component={PDFView} />
    </Stack.Navigator>
  );
}

export default ScreenStackNavigator;
