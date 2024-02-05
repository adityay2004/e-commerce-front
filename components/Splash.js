
import { Card } from "react-native-shadow-cards";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    Animated,
    Easing,
    Button,
    TouchableOpacity,
    TextInput,
    Alert,
    ScrollView,
    SafeAreaView,
    StatusBar
} from "react-native";

import Carousel from "react-native-snap-carousel";
import React, { useState, useRef, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Carouselcomponent() {
    const [index, setindex] = useState(0);
    const isCarousel = useRef(null);
    const navigation = useNavigation();
    const { width: screenWidth } = Dimensions.get("window");

    const data = [
        {
            name: "Home Decor",
            url: "https://themes.pixelstrap.com/fuzzy/assets/images/onboarding/3.png",
        },
        {
            name: "Office Furniture",
            url: "https://themes.pixelstrap.com/fuzzy/assets/images/onboarding/1.png",
        },
        {
            name: "Relaxing Furniture",
            url: "https://themes.pixelstrap.com/fuzzy/assets/images/onboarding/2.png",
        },
    ];
    let rotateValueHolder = new Animated.Value(0);
    const startImageRotateFunction = () => {
        rotateValueHolder.setValue(0);
        Animated.timing(rotateValueHolder, {
            toValue: 1,
            duration: 3000,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start(() => startImageRotateFunction());
    };

    const rotateData = rotateValueHolder.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "360deg"],
    });
    const renderItem = ({ item }) => {
        return (
            <View>
                <Image
                    source={require('../assets/logo.png')}
                    style={{ height: 80, width: 170, marginLeft: 70, marginTop: 20 }}
                ></Image>
                <Animated.View style={{ transform: [{ rotate: rotateData }] }}>
                    <ImageBackground
                        source={require('../assets/design1.png')}
                        style={styles.backgroundImage}
                    ></ImageBackground>
                </Animated.View>

                <Image
                    source={{
                        uri: item.url,
                    }}
                    style={styles.image}
                ></Image>

                <Card style={styles.card}>
                    <Text style={[styles.Text]}>{item.name}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.line1} />
                        <View style={styles.line2} />
                        <View style={styles.line3} />
                    </View>
                    <Text style={[styles.text1]}>
                        The best payment method connects your money to friends,family,brands
                        and experience
                    </Text>
                </Card>
                <TouchableOpacity style={styles.buttonouter} onPress={() => {
                    navigation.navigate('Login')
                }}
                >
                    <View style={styles.buttoninner} >
                        <Icon
                            name="arrow-right"
                            size={25}
                            style={{ marginLeft: 5, marginTop: 5, color: "#404040" }}
                        ></Icon>
                    </View>
                </TouchableOpacity>

            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ marginBottom: 50 }}>
                <ScrollView>
                    <Carousel
                        ref={isCarousel}
                        data={data}
                        renderItem={renderItem}
                        sliderWidth={screenWidth}
                        itemWidth={screenWidth - 40}
                        autoplay
                        autoplayInterval={3000}
                        loop={true}
                    ></Carousel>
                </ScrollView>
            </View>
          
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(18, 38, 54)",
    },
    Text: {
        fontSize: 22,
        fontWeight: "600",
        color: "#a6a6a6",
        // marginLeft: 75,
        marginTop: 10,
    },

    text1: {
        color: "#a6a6a6",
        marginLeft: 30,
        fontSize: 13,
        marginTop: 16,
        marginBottom: 30,
        marginRight: 18,
        fontWeight: '600'
    },
    border: {
        borderWidth: 1,
        borderRadius: 1,
    },
    card: {
        backgroundColor: "#203342",
        marginTop: -93,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10,
    },
    image: {
        height: 550,
        width: 200,
        resizeMode: "contain",
        justifyContent: "center",
        marginLeft: 55,
        marginTop: -430,
    },
    backgroundImage: {
        height: 350,
        width: 300,
        resizeMode: "cover",
        marginTop: 10,
        marginLeft: 8
    },
    rotate: {},
    login: {
        height: 10,
        width: 20,
        marginBottom: "10",
        position: "absolute",
    },
    loginbutton: {
        marginTop: 10,
        marginLeft: 220,
        height: 40,
        width: 70,
        fontWeight: "bold",
        borderRadius: 20,
    },
    buttonouter: {
        height: 50,
        width: 50,
        marginLeft: 130,
        borderWidth: 1,
        borderColor: '#595959',
        marginTop: -25,
        borderRadius: 50,
        backgroundColor: "rgb(18, 38, 54)",

    },
    buttoninner: {
        height: 37,
        width: 37,
        marginLeft: 5.5,
        borderWidth: 1,
        borderColor: '#595959',
        marginTop: 5.5,
        borderRadius: 40,
        backgroundColor: "#b3b3b3",

    },
    line1: {
        height: 2,
        backgroundColor: "#E49B0F",
        marginVertical: -9,
        width: 20,
        marginLeft: 5,
        borderRadius: 10,
        marginTop: 8
    },
    line2: {
        height: 2,
        backgroundColor: "#E49B0F",
        marginVertical: 8,
        width: 50,
        marginLeft: 8,
        borderRadius: 10
    },
    line3: {
        height: 2,
        backgroundColor: "#E49B0F",
        marginVertical: 8,
        width: 20,
        marginLeft: 8,
        borderRadius: 10,
        // marginTop: -10
    },
});
