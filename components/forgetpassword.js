import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  KeyboardAvoidingView,
  TextInput,
  Button,
  Alert,
} from "react-native";
import { useState } from "react";
import FontIcon from "react-native-vector-icons/Fontisto";
import { useNavigation } from "@react-navigation/native";
const Forgetpassword = () => {
  const [errors, setErrors] = useState({});
  const [email, setEmail] = useState("");
  const navigation = useNavigation();
  const validateForm = () => {
    let errors = {};
    if (!email) errors.email = "Email address is required";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Submitted", email);
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (emailRegex.test(email)) {
        navigation.navigate('Otpvarify')
      } else {
        Alert.alert("Error", "Please enter a valid email address.");
      }
      setEmail("");
      setErrors({});
    }
  };
  
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('../assets/auth_bg.jpg')}
      >
        <Text style={styles.imgtext}>Forget Password</Text>
      </ImageBackground>

      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
        style={styles.container}
      >
        <View>
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
          <View style={styles.otpbtn}>
            <Button
              title="Send OTP"
              onPress={()=>handleSubmit()}
              color="#E49B0F"
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
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
    marginLeft:10,
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 22,
    marginTop: 220,
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
  otpbtn: {
    marginRight: 22,
    marginTop: 20,
    marginLeft: 22,
    borderRadius: 10,
  },
});
export default Forgetpassword;
