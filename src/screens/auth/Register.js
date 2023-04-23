import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-paper";

import logo from "../../assets/logo.png";
import facebookLogo from "../../assets/facebookLogo.png";
import googleLogo from "../../assets/googleLogo.png";
import { register } from "../../services/authAPI";
import { COLORS, ROUTES } from "../../constants";
const Register = ({ navigation }) => {
  const [emailError, setemailError] = useState("");
  const [loginError, setloginError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [passwordCheckVisible, setPasswordCheckVisible] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(true);

  async function handleRegister() {
    setemailError("");
    setPasswordError("");
    setloginError("");
    if (email === "") setemailError("Email không được để trống");
    else {
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
      if (reg.test(email) === false) setemailError("Email không đúng");
    }
    if (password === "") setPasswordError("Mật khẩu không được để trống");
    else if (password !== rePassword)
      setPasswordError("Xác nhận mật khẩu không đúng");

    if (emailError === "" && passwordError === "") {
      try {
        const response = await register({ email, password });
        navigation.navigate(ROUTES.LOGIN);
      } catch (error) {
        setloginError("Đăng ký thất bại");
      }
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <View
          style={styles.header}
          onPress={() => navigation.navigate(ROUTES.LOGIN)}
        >
          <Image style={styles.logo} source={logo} resizeMode="contain"></Image>
        </View>

        <View style={styles.authentication}>
          <View style={styles.content}>
            <Text style={styles.titleText}> Đăng ký </Text>
            <View style={styles.registerArea}>
              <Text style={styles.textIntro}>
                {" "}
                Phát triển kỹ năng tiếng Anh nhanh nhất bằng cách học 1 kèm 1
                trực tuyến theo mục tiêu và lộ trình dành cho riêng bạn
              </Text>
              <View style={styles.formRegister}>
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
                <TextInput
                  style={styles.input}
                  value={rePassword}
                  onChangeText={setRePassword}
                  name="passwordCheck"
                  label="XÁC NHẬN MẬT KHẨU "
                  secureTextEntry={passwordCheckVisible}
                  right={
                    <TextInput.Icon
                      icon={passwordCheckVisible ? "eye" : "eye-off"}
                      onPress={() =>
                        setPasswordCheckVisible(!passwordCheckVisible)
                      }
                    />
                  }
                />
                {passwordError !== "" && (
                  <Text style={styles.error}>{passwordError}</Text>
                )}

                <TouchableOpacity
                  style={styles.registerButton}
                  onPress={handleRegister}
                >
                  <Text style={styles.registerButtonText}> ĐĂNG KÝ </Text>
                </TouchableOpacity>
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
                <View style={styles.loginText}>
                  <Text>Đã có tài khoản? </Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate(ROUTES.LOGIN)}
                  >
                    <Text style={styles.linkText}>Đăng nhập</Text>
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

export default Register;

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
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    color: COLORS.primary,
    alignSelf: "center",
  },
  registerArea: {
    padding: 20,
    flexDirection: "column",
  },

  textIntro: {
    textAlign: "center",
  },

  formRegister: {
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
  linkText: {
    color: COLORS.primary,
  },
  registerButton: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 50,
    backgroundColor: COLORS.primary,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    borderRadius: 5,
    marginTop: 10,
  },
  registerButtonText: {
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
  loginText: {
    flexDirection: "row",
    alignSelf: "center",
  },
});
