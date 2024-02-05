import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  ImageBackground,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Button,
  ScrollView,
  TouchableOpacity,
  Switch,
  Alert,
} from "react-native";
import { Checkbox } from "react-native-paper";
import React, { useRef, useState } from "react";
import { Card } from "react-native-shadow-cards";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FontIcon from "react-native-vector-icons/Fontisto";
import { useNavigation } from "@react-navigation/native";

const LoginForm = () => {
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  //const [isChecked, setChecked] = useState(false);

  const navigation = useNavigation();
  const validateForm = () => {
    let errors = {};

    if (!email) errors.email = "Email address is required";
    if (!password) errors.password = "Password is required";

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };
  const resetPassword = () => {
    if (email != null) {
    } else {
      Alert.alert("Error", "Please Enter email");
    }
  };
  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Submitted", email, password);
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (emailRegex.test(email)) {
        navigation.navigate("Dashboard");
      } else {
        Alert.alert("Error", "Please enter a valid email address.");
      }
      setEmail("");
      setPassword("");
      setErrors({});
    }

  };



  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
        style={styles.container}
      >
        <ScrollView>
          <ImageBackground
            style={styles.image}
            source={require('../assets/auth_bg.jpg')}
          >
            <Text style={styles.imgtext}>Hello again!</Text>
            <Text style={styles.imgtext2}>
              Welcome back,you have been missed !
            </Text>
          </ImageBackground>

          <View>

            <Text style={styles.label}>Email id</Text>
            <View style={[styles.input, { flexDirection: 'row' }]}>
            <View style={styles.leftcolor}></View>
              <FontIcon name="email" size={20} color="white" style={{ marginTop: -2 }} />
              <TextInput
                placeholder="Enter your Email address"
                placeholderTextColor="gray"
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={styles.inputBox}
              />
              {/* <TextInput placeholder="enter" style={{borderColor:'white'}}></TextInput> */}
            </View>


            {errors.email ? (
              <Text style={styles.errorText}>{errors.email}</Text>
            ) : null}

            <Text style={styles.label}>Password</Text>
            <View style={[styles.input, { flexDirection: 'row' }]}>
              <View style={styles.leftcolor}></View>
              <FontIcon name="key" size={20} color="white" style={{ marginTop: -2 }} />
              <TextInput
                style={styles.inputBox}
                placeholder="Enter your password"
                placeholderTextColor="gray"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </View>
            {errors.password ? (
              <Text style={styles.errorText}>{errors.password}</Text>
            ) : null}


            <View
              style={{
                flexDirection: "row",
              }}
            >

              <View style={{ marginLeft: 20, marginTop: 10 }}>
                <Checkbox
                  status={rememberMe ? "checked" : "unchecked"}
                  onPress={() => {
                    setRememberMe(!rememberMe);
                  }}
                  color={"white"}
                />
              </View>

              <Text style={{ color: "gray", marginTop: 17 }}>Remember me</Text>
              <TouchableOpacity onPress={() => {
                navigation.navigate("ForgatePass");
              }}>
                <Text style={styles.forgottext}>Forgot password ?</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.signinbtn}>
              <Button title="Sign In" onPress={handleSubmit} color="#E49B0F" />
            </View>

            <Text style={styles.ortext}>OR</Text>

            <View style={styles.line1} />
            <View style={styles.line2} />
            <View style={{ flexDirection: "row" }}>
              <Card style={styles.Card1}>
                <TouchableOpacity onPress={() => console.log("Facebook icon")}>
                  <Icon
                    name="facebook"
                    size={50}
                    color="#87CEEB"
                    style={{ marginTop: 9, marginLeft: 20 }}
                  ></Icon>
                </TouchableOpacity>
              </Card>
              <Card style={styles.Card1}>
                <TouchableOpacity onPress={() => console.log("Google icon")}>
                  <Icon
                    name="google"
                    size={50}
                    color="white"
                    style={{ marginTop: 9, marginLeft: 20 }}
                  ></Icon>

                </TouchableOpacity>
              </Card>
              <Card style={styles.Card1}>
                <TouchableOpacity onPress={() => console.log("Google icon")}>
                  <Icon
                    name="apple"
                    size={50}
                    color="white"
                    style={{ marginTop: 6, marginLeft: 22 }}
                  ></Icon>
                </TouchableOpacity>
              </Card>
            </View>
            <View
              style={{ flexDirection: "row", marginTop: 20, marginBottom: 10 }}
            >
              <Text style={styles.acctext}>Dono't have an account?</Text>

              <Text
                style={{ color: "white", fontSize: 13, marginLeft: 5 }}
                onPress={() => {
                  navigation.navigate("Signup");
                }}
              >
                Sign up
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView >
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(18,38,54)",
  },
  image: {
    height: 290,
    width: 330,
    marginTop: 50,
    marginLeft: 12,
    marginRight: 12,
  },
  imgtext: {
    marginLeft: 10,
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 200,
  },
  imgtext2: {
    marginLeft: 10,
    fontSize: 15,
    fontWeight: "bold",
    color: "#ffffff",
    marginTop: 1,
  },
  label: {
    marginLeft: 19,
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 20,
  },
  input: {
    marginLeft: 17,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    backgroundColor: "rgb(31, 48, 60)",
    height: 55,
    borderColor: "rgb(31,48,60)",
    padding: 18,
    marginRight: 20,

  },
  inputBox: {
    marginLeft: 10,
    height: 35,
    width: '90%',
    marginTop: -9,
  },
  leftcolor: {
    backgroundColor: '#E49B0F',
    position: 'absolute',
    width: 5,
    height: 54,
    marginTop: -1,
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10
   
  },
  forgottext: {
    color: "#FF5733",
    fontSize: 15,
    marginLeft: 60,
    marginTop: 15,
  },
  signinbtn: {
    marginRight: 20,
    marginTop: 20,
    marginLeft: 20,
    borderRadius: 10,
  },
  errorText: {
    color: "red",
    marginLeft: 50,
  },
  ortext: {
    marginLeft: 170,
    color: "gray",
    marginTop: 30,
  },
  line1: {
    height: 1, // Adjust the height of the line
    backgroundColor: "gray", // Adjust the color of the line
    marginVertical: -9,
    width: 140,
    marginLeft: 20, // Adjust the vertical margin
  },
  line2: {
    height: 1, // Adjust the height of the line
    backgroundColor: "gray", // Adjust the color of the line
    marginVertical: 8,
    width: 140,
    marginLeft: 200,
  },
  Card1: {
    backgroundColor: "rgb(31, 48, 62)",
    borderWidth: 1,
    height: 70,
    width: 100,
    borderRadius: 5,
    borderColor: "rgb(31,48,62)",
    marginLeft: 16,
    marginTop: 20,
  },

  cardimg1: {
    height: 100,
    width: 100,
  },
  acctext: {
    fontSize: 15,
    color: "gray",
    marginLeft: 80,
  },

  icon1: {
    height: 100,
    width: 100,
  },
});

export default LoginForm;
