import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { TextInput } from "react-native-paper";

import logo from "../../assets/logo.png";
import facebookLogo from "../../assets/facebookLogo.png";
import googleLogo from "../../assets/googleLogo.png";

import { COLORS, ROUTES, IMGS } from "../../constants";
export default Login = ({ navigation }) => {
  const [emailError, setemailError] = useState("");
  const [loginError, setloginError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(true);

  async function handleLogin() {
    navigation.navigate(ROUTES.HOME);

    // setemailError("");
    // setPasswordError("");
    // setloginError("");

    // if (email === "") setemailError("Email không được để trống");
    // else {
    //   let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    //   if (reg.test(email) === false) setemailError("Email không đúng");
    // }
    // if (password === "") setPasswordError("Mật khẩu không được để trống");

    // if (
    //   emailError === "" &&
    //   passwordError === "" &&
    //   email !== "" &&
    //   password !== ""
    // ) {
    //   console.log(email);
    //   console.log(password);

    //   console.log("login");
    // }
  }

  // for login
  // const deleteGroupMutation = useMutation(deleteGroup, {
  //   onError: (error) => {
  //
  //   },
  //   onSuccess: (response) => {
  //      setAuth({ user, accessToken, refreshToken });
  //   },Navigate
  //   },
  // });
  // const handleOK = async () => {
  //   await deleteGroupMutation.mutateAsync({
  //     groupID: id,
  //   });
  // };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.logo}
            source={IMGS.logo}
            resizeMode="contain"
          ></Image>
        </View>

        <View style={styles.authentication}>
          <View style={styles.content}>
            <Text style={styles.loginText}> Đăng nhập </Text>
            <View style={styles.loginArea}>
              <Text style={styles.textIntro}>
                Phát triển kỹ năng tiếng Anh nhanh nhất bằng cách học 1 kèm 1
                trực tuyến theo mục tiêu và lộ trình dành cho riêng bạn
              </Text>
              <View style={styles.formLogin}>
                <TextInput
                  style={styles.input}
                  value={email}
                  onChangeText={setEmail}
                  name="email"
                  label="ĐỊA CHỈ EMAIL "
                />
                {emailError !== "" && (
                  <Text style={styles.error}>{emailError}</Text>
                )}

                <TextInput
                  style={styles.input}
                  value={password}
                  onChangeText={setPassword}
                  name="password"
                  label="MẬT KHẨU "
                  secureTextEntry={passwordVisible}
                  right={
                    <TextInput.Icon
                      icon={passwordVisible ? "eye" : "eye-off"}
                      onPress={() => setPasswordVisible(!passwordVisible)}
                    />
                  }
                />

                {passwordError !== "" && (
                  <Text style={styles.error}>{passwordError}</Text>
                )}

                <TouchableOpacity
                  style={styles.forgotPass}
                  onPress={() => navigation.navigate(ROUTES.FORGOT_PASSWORD)}
                >
                  <Text style={styles.forgotPassText}> Quên mật khẩu? </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.loginButton}
                  onPress={handleLogin}
                >
                  <Text style={styles.loginButtonText}> ĐĂNG NHẬP </Text>
                </TouchableOpacity>
                {loginError !== "" && (
                  <Text style={styles.error}>{loginError}</Text>
                )}
              </View>

              <View style={styles.otherLogin}>
                <Text>Hoặc tiếp tục với</Text>
                <View style={styles.otherLoginIcons}>
                  <TouchableOpacity>
                    <Image
                      style={styles.otherLoginIcon}
                      source={facebookLogo}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      style={styles.otherLoginIcon}
                      source={googleLogo}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.registerText}>
                  <Text>Chưa có tài khoản? </Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate(ROUTES.REGISTER)}
                  >
                    <Text style={styles.forgotPassText}>Đăng ký</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 30,
  },
  error: {
    color: "red",
  },
  text: {
    fontSize: 25,
    fontWeight: "500",
  },
  header: {
    height: 80,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 10,
  },
  logo: {
    width: "50%",
    justifyContent: "center",
    alignContent: "center",
  },
  authentication: {
    padding: 20,
  },
  content: {
    height: "100%",
  },
  loginText: {
    fontSize: 30,
    fontWeight: "bold",
    color: COLORS.primary,
    alignSelf: "center",
  },
  loginArea: {
    padding: 20,
    flexDirection: "column",
  },
  textIntro: {
    textAlign: "center",
  },

  formLogin: {
    flexDirection: "column",
    paddingVertical: 20,
  },

  input: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    marginVertical: 10,
  },
  forgotPass: {
    marginVertical: 20,
  },
  forgotPassText: {
    color: COLORS.primary,
  },
  loginButton: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 50,
    backgroundColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    borderRadius: 5,
  },
  loginButtonText: {
    color: "white",
    alignSelf: "center",
    fontSize: 15,
    fontWeight: "bold",
  },

  otherLogin: {
    flexDirection: "column",
    alignItems: "center",
    margin: 20,
  },

  otherLoginIcons: {
    flexDirection: "row",
    margin: 10,
    padding: 20,
    width: "70%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  otherLoginIcon: {
    height: 50,
  },
  phoneIcon: {
    width: 50,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: COLORS.primary,
    alignItems: "center",
  },
  registerText: {
    flexDirection: "row",
    alignSelf: "center",
  },
});
