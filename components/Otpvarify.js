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
import OTPTextInput from 'react-native-otp-textinput';
const Otpvarify = () => {
    const [errors, setErrors] = useState({});
    const [otp, setOtp] = useState('');

    const validateForm = () => {
        let errors = {};
        console.log(otp.length)
        if (otp.length!=5) errors.otp = "OTP is required";
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = () => {
        
        if (validateForm()) {
            console.log("Submitted", otp);
            setOtp("");
            setErrors({});
        }
    };

    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.image}
                source={require('../assets/auth_bg.jpg')}
            >
                <Text style={styles.imgtext}>OTP Verification</Text>

            </ImageBackground>

            <KeyboardAvoidingView
                behavior="padding"
                keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
                style={styles.container}
            >
                <View>
                    <Text style={styles.imgtext2}>
                        We have send a verification code to
                    </Text>
                    <Text style={styles.txtemail}>
                       ask@gmail.com
                    </Text>
                    <View style={[styles.input, { flexDirection: 'row' }]}>
                    <OTPTextInput
                        inputCount={5}
                        textInputStyle={{ borderBottomWidth: 0, width: 50, height: 50, color: '#9a0065', fontSize: 24 ,backgroundColor:'rgb(31, 48, 60)',borderRadius:5}}
                        tintColor="#000000"
                        offTintColor="#000000"
                        //selectionColor={COLORS.secondaryButtonBackgroungColor}
                        handleTextChange={(code) => setOtp(code)}
                    />
                    </View>
                    {errors.otp ? (
                        <Text style={styles.errorText}>{errors.otp}</Text>
                    ) : null}
                    <View style={styles.otpbtn}>
                        <Button
                            title="Verify"
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
        marginLeft: 10,
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 22,
        marginTop: 220,
    },
    imgtext2: {
        marginLeft: 19,
        fontSize: 15,
        fontWeight: "bold",
        color: "#a6a6a6",
        marginTop: 1,
    },
    txtemail:{
        marginLeft: 19,
        fontSize: 18,
        fontWeight: "bold",
        color: "#e6e6e6",
        marginTop: 4,
    },
    label: {
        marginLeft: 19,
        color: "#ffffff",
        fontSize: 17,
        fontWeight: "bold",
        marginTop: 18,
    },
    input: {
        marginLeft: 27,
        marginTop: 25,
        height: 55,
        marginRight: 19,
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
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10

    },
    errorText: {
        color: "red",
        marginLeft: 35,
    },
    otpbtn: {
        marginRight: 22,
        marginTop: 20,
        marginLeft: 22,
        borderRadius: 10,
      
    },
});



export default Otpvarify;