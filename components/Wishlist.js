import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import { Card } from "react-native-shadow-cards";
import { Button } from "react-native-elements";

const Wishlist = () => {
 

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{ marginLeft: 10, marginRight: 8, marginTop: 10, marginBottom: 2 }}>
          <Card
            style={{
              marginTop: 10,
              height: 100,
              width: '100%',
              backgroundColor: "#f4f4f4",
              flexDirection: "row",
            }}>
            <Image
              source={{
                uri: "https://themes.pixelstrap.com/fuzzy/assets/images/product/18.png",
              }}
              style={{
                height: 80,
                width: 90,
                resizeMode: "contain",
                marginTop: 10,
                marginLeft: 6,
                backgroundColor: "white",
              }}
            ></Image>

            <View style={{
              marginTop: 10,
              marginLeft: 10,
            }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    fontSize: 15, color: '#666666', fontWeight: '500'
                  }}>
                  Lounge chair
                </Text>
                <TouchableOpacity onPress={() => console.log("item deleted")}>
                  <Entypo
                    name="cross"
                    color="#808080"
                    size={23}
                    style={{ marginLeft: 120, }}
                  ></Entypo>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text
                  style={{ fontSize: 13, color: '#808080', fontWeight: '500', }}
                >
                  Qty: 1</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  marginTop: 12
                }}
              >
                <Text
                  style={{
                    color: '#404040',
                    fontWeight: "bold",
                    fontSize: 15,
                  }}>
                  $130
                </Text>
                <Text
                  style={{
                    textDecorationLine: "line-through",
                    color: "gray",
                    marginLeft: 8,
                  }}>
                  $160
                </Text>
               
                 <TouchableOpacity style={styles.circleview2} onPress={() => console.log("add to cart")}>
                <Icon name="cart" size={15} color="white"></Icon>
              </TouchableOpacity>
               
              </View>
            </View>
          </Card>
          <Card
            style={{
              marginTop: 15,
              height: 100,
              width: '100%',
              backgroundColor: "#f4f4f4",
              flexDirection: "row",
            }}>
            <Image
              source={{
                uri: "https://themes.pixelstrap.com/fuzzy/assets/images/product/19.png",
              }}
              style={{
                height: 80,
                width: 90,
                resizeMode: "contain",
                marginTop: 10,
                marginLeft: 6,
                backgroundColor: "white",
              }}
            ></Image>

            <View style={{
              marginTop: 10,
              marginLeft: 10,
            }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    fontSize: 15, color: '#666666', fontWeight: '500'
                  }}>
                 Bedroom Lamp
                </Text>
                <TouchableOpacity onPress={() => console.log("item deleted")}>
                  <Entypo
                    name="cross"
                    color="#808080"
                    size={23}
                    style={{ marginLeft: 105, }}
                  ></Entypo>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text
                  style={{ fontSize: 13, color: '#808080', fontWeight: '500', }}
                >
                  Qty: 1</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  marginTop: 12
                }}
              >
                <Text
                  style={{
                    color: '#404040',
                    fontWeight: "bold",
                    fontSize: 15,
                  }}>
                  $30
                </Text>
                <Text
                  style={{
                    textDecorationLine: "line-through",
                    color: "gray",
                    marginLeft: 8,
                  }}>
                  $60
                </Text>
               
                 <TouchableOpacity style={styles.circleview2} onPress={() => console.log("add to cart")}>
                <Icon name="cart" size={15} color="white"></Icon>
              </TouchableOpacity>
               
              </View>
            </View>
          </Card>
          <Card
            style={{
              marginTop: 15,
              height: 100,
              width: '100%',
              backgroundColor: "#f4f4f4",
              flexDirection: "row",
            }}>
            <Image
              source={{
                uri: "https://themes.pixelstrap.com/fuzzy/assets/images/product/20.png",
              }}
              style={{
                height: 80,
                width: 90,
                resizeMode: "contain",
                marginTop: 10,
                marginLeft: 6,
                backgroundColor: "white",
              }}
            ></Image>

            <View style={{
              marginTop: 10,
              marginLeft: 10,
            }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    fontSize: 15, color: '#666666', fontWeight: '500'
                  }}>
                 Marble Flower Vase
                </Text>
                <TouchableOpacity onPress={() => console.log("item deleted")}>
                  <Entypo
                    name="cross"
                    color="#808080"
                    size={23}
                    style={{ marginLeft: 75, }}
                  ></Entypo>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text
                  style={{ fontSize: 13, color: '#808080', fontWeight: '500', }}
                >
                  Qty: 1</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  marginTop: 12
                }}
              >
                <Text
                  style={{
                    color: '#404040',
                    fontWeight: "bold",
                    fontSize: 15,
                  }}>
                  $50
                </Text>
                <Text
                  style={{
                    textDecorationLine: "line-through",
                    color: "gray",
                    marginLeft: 8,
                  }}>
                  $00
                </Text>
               
                 <TouchableOpacity style={styles.circleview2} onPress={() => console.log("add to cart")}>
                <Icon name="cart" size={15} color="white"></Icon>
              </TouchableOpacity>
               
              </View>
            </View>
          </Card>
        </View>

      </ScrollView>
      
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  circleview2: {
    height: 28,
    width: 28,
    borderRadius: 30,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "rgb(18,38,54)",
    borderColor: '#e6e6e6',
    position: 'absolute',
    marginLeft: 197
  },
});

export default Wishlist;

