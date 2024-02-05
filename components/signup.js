import {
  View,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Text,
  TextInput,
  Button,
  Pressable,
  KeyboardAvoidingView,
  Alert,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontIcon from "react-native-vector-icons/Fontisto";
const Signup = () => {
  const [password, setPassword] = useState("");
  const [name, setname] = useState("");
  const [errors, setErrors] = useState({});
  const [email, setEmail] = useState("");
  //const [isChecked, setChecked] = useState(false);
  const navigation = useNavigation();
  const validateForm = () => {
    let errors = {};

    if (!email) errors.email = "Email address is required";
    if (!password) errors.password = "Password is required";
    if (!name) errors.name = "Name is required";
    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Submitted", email, password);
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (emailRegex.test(email)) {
      } else {
        Alert.alert("Error", "Please enter a valid email address.");
      }
      setEmail("");
      setPassword("");
      setname("");
      setErrors({});
    }
    // const handleCheckboxChange = () => {
    // setChecked(!isChecked);
    //};
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ImageBackground
          style={styles.image}
          source={require('../assets/auth_bg.jpg')}
        >
          <Text style={styles.imgtext}>Let's you in</Text>
          <Text style={styles.imgtext2}>Hey,you have been missed!</Text>
        </ImageBackground>
        <KeyboardAvoidingView
         
          keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
          style={styles.container}
        >
          <View>
            <Text style={styles.label}>Name</Text>
            <View style={[styles.input, { flexDirection: 'row' }]}>
            <View style={styles.leftcolor}></View>
            <AntDesign name="user" size={20} color="white" style={{ marginTop: -2 }} />
              <TextInput
                style={styles.inputBox}
                placeholder="Enter your password"
                placeholderTextColor="gray"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </View>
            {errors.email ? (
              <Text style={styles.errorText}>{errors.name}</Text>
            ) : null}
            <Text style={styles.label}>Email id</Text>
            <View style={[styles.input, { flexDirection: 'row' }]}>
            <View style={styles.leftcolor}></View>
              <FontIcon name="email" size={20} color="white" style={{ marginTop: -2 }} />
              <TextInput
                placeholder="Enter your Email address"
                placeholderTextColor="gray"
                value={email}
                onChangeText={setEmail}
                style={styles.inputBox}
              />
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

            <View style={styles.signupbtn}>
              <Button title="Sign Up" onPress={handleSubmit} color="#E49B0F" />
            </View>
            <Text style={styles.ortext}>OR</Text>

            <View style={styles.line1} />
            <View style={styles.line2} />
            <View style={{ flexDirection: "row", marginLeft: 70 }}>
              <Text style={styles.acctext}>Already have an account?</Text>
              <Pressable onPress={() => { navigation.navigate("Login");}}>
                <Text style={styles.signintext}>Sign in</Text>
              </Pressable>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
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
    fontSize: 24,
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
    marginTop: 18,
  },
  input: {
    marginLeft: 19,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 8,
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
  errorText: {
    color: "red",
    marginLeft: 50,
  },
  signupbtn: {
    marginRight: 45,
    marginTop: 20,
    marginLeft: 45,
    borderRadius: 10,
  },
  ortext: {
    marginLeft: 170,
    color: "gray",
    marginTop: 30,
  },
  line1: {
    height: 1,
    backgroundColor: "gray",
    marginVertical: -9,
    width: 140,
    marginLeft: 20,

   
  },
  line2: {
    height: 1,
    backgroundColor: "gray",
    marginVertical: 8,
    width: 140,
    marginLeft: 200,
  },
  acctext: {
    fontSize: 15,
    textAlign: "center",
    color: "gray",
    marginTop: 10,
  },
  signintext: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 5,
    color: "white",
  },
});

export default Signup;
