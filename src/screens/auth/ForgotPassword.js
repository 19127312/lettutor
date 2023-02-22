import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-paper";
import logo from "../../assets/logo.png";
import { COLORS, ROUTES } from "../../constants";

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [forgotPassState, setForgotPassState] = useState();
  const [successState, setSuccessState] = useState(false);

  function handleForgotPass() {
    setForgotPassState(undefined);
    if (email === "") setEmailError("Email không được để trống");
    else {
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
      if (reg.test(email) === false) setEmailError("Email không đúng");
    }

    if (emailError === "") {
      console.log(email);
      console.log("forgot password");
      setSuccessState(true);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.logo} source={logo} resizeMode="contain"></Image>
        </View>

        <View style={styles.authentication}>
          <Text style={styles.forgotPasswordText}> Đặt lại mật khẩu </Text>
          {!successState ? (
            <View style={styles.forgotPasswordArea}>
              <Text style={styles.textIntro}>
                Vui lòng nhập email của bạn để nhận liên kết đặt lại mật khẩu
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

                <TouchableOpacity
                  style={styles.confirmButton}
                  onPress={handleForgotPass}
                >
                  <Text style={styles.confirmButtonText}> Xác nhận </Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View style={styles.forgotPasswordArea}>
              <Text style={styles.textIntro}>
                Kiểm tra email của bạn để thực hiện thay đổi mật khẩu
              </Text>
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: "white",
  },
  error: {
    color: "red",
  },
  header: {
    height: 80,
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
    flex: 1,
    justifyContent: "center",
  },
  forgotPasswordText: {
    fontSize: 30,
    fontWeight: "bold",
    color: COLORS.primary,
    alignSelf: "center",
  },
  forgotPasswordArea: {
    padding: 10,
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

  confirmButton: {
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
  confirmButtonText: {
    color: "white",
    alignSelf: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
});
