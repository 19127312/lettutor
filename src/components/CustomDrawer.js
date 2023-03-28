import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Image,
  View,
  Dimensions,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { COLORS, IMGS } from "../constants";
import { getUserInfo } from "../services/userAPI";

const { width } = Dimensions.get("screen");

const CustomDrawer = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getUser() {
      const { data } = await getUserInfo();
      setUser(data);
    }
    getUser();
  }, []);
  //Get the user's name and email from the props
  return (
    <DrawerContentScrollView {...props}>
      <ImageBackground source={IMGS.bgPattern} style={{ height: 140 }}>
        {user ? (
          <Image source={{ uri: user.user.avatar }} style={styles.userImg} />
        ) : (
          <Image source={IMGS.user} style={styles.userImg} />
        )}
      </ImageBackground>
      <View style={styles.drawerListWrapper}>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  userImg: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
    position: "absolute",
    left: width / 2 - 110,
    bottom: -110 / 2,
    borderWidth: 4,
    borderColor: COLORS.white,
  },
  drawerListWrapper: {
    marginTop: 65,
  },
});
