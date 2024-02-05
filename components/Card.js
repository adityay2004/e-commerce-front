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
import { Card } from "react-native-shadow-cards";
import { Button } from "react-native-elements";

const Addtocart = () => {
  const [quantity, setQuantity] = useState(1);
  const [quantity1, setQuantity1] = useState(1);
  const [quantity2, setQuantity2] = useState(1);
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement1 = () => {
    setQuantity1(quantity1 + 1);
  };

  const handleDecrement1 = () => {
    if (quantity1 > 1) {
      setQuantity1(quantity1 - 1);
    }
  };
  const handleIncrement2 = () => {
    setQuantity2(quantity2 + 1);
  };

  const handleDecrement2 = () => {
    if (quantity2 > 1) {
      setQuantity2(quantity2 - 1);
    }
  };
  const handleColorPress = (color) => {
    onColorSelected(color);
  };
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
                uri: "https://themes.pixelstrap.com/fuzzy/assets/images/product/11.png",
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
                  <Icon
                    name="delete"
                    color="black"
                    size={20}
                    style={{ marginRight: 6, }}
                  ></Icon>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text
                  style={{ fontSize: 13, color: '#808080', fontWeight: '500', }}
                >
                  Qty:{quantity} |</Text>
                <View style={{ height: 12, width: 12, borderRadius: 10, backgroundColor: 'blue', borderColor: 'blue', alignSelf: 'center', marginLeft: 4 }}>

                </View>
                <Text style={{ fontSize: 14, color: '#808080', fontWeight: '400', flexDirection: 'row', marginLeft: 7 }}>Blue</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  marginTop: 8
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
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    backgroundColor: '#fff',
                    marginLeft: 70,
                    padding: 5,
                    borderRadius: 20
                  }}
                >
                  <TouchableOpacity
                    onPress={handleDecrement}
                    style={{
                      height: 22,
                      width: 22,
                      backgroundColor: "#e6e6e6",
                      borderRadius: 20,
                      justifyContent: 'center',
                      alignItems: 'center',

                    }}
                  >
                    <Text style={{ fontSize: 30, marginTop: -12, fontWeight: "bold" }}>-</Text>
                  </TouchableOpacity>
                  <Text style={{ fontSize: 18, marginLeft: 12, marginRight: 12, marginTop: -3 }}>
                    {quantity}
                  </Text>
                  <TouchableOpacity
                    onPress={handleIncrement}
                    style={{
                      backgroundColor: "rgb(18,38,54)",
                      height: 22,
                      width: 22,
                      borderRadius: 25,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Text style={{ fontSize: 23, marginTop: -5, fontWeight: "bold", color: 'white' }}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Card>
          <Card
            style={{
              marginTop: 12,
              height: 100,
              width: '100%',
              backgroundColor: "#f4f4f4",
              flexDirection: "row",
            }}>
            <Image
              source={{
                uri: "https://themes.pixelstrap.com/fuzzy/assets/images/product/13.png",
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
                  Hanging Light
                </Text>
                <TouchableOpacity onPress={() => console.log("item deleted")}>
                  <Icon
                    name="delete"
                    color="black"
                    size={20}
                    style={{ marginRight: 6, }}
                  ></Icon>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text
                  style={{ fontSize: 13, color: '#808080', fontWeight: '500', }}
                >
                  Qty:{quantity1} |</Text>
                <View style={{ height: 12, width: 12, borderRadius: 10, backgroundColor: 'black', borderColor: 'blue', alignSelf: 'center', marginLeft: 4 }}>

                </View>
                <Text style={{ fontSize: 14, color: '#808080', fontWeight: '400', flexDirection: 'row', marginLeft: 7 }}>Black</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  marginTop: 8
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
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    backgroundColor: '#fff',
                    marginLeft: 86,
                    padding: 5,
                    borderRadius: 20
                  }}
                >
                  <TouchableOpacity
                    onPress={handleDecrement1}
                    style={{
                      height: 22,
                      width: 22,
                      backgroundColor: "#e6e6e6",
                      borderRadius: 20,
                      justifyContent: 'center',
                      alignItems: 'center',

                    }}
                  >
                    <Text style={{ fontSize: 30, marginTop: -12, fontWeight: "bold" }}>-</Text>
                  </TouchableOpacity>
                  <Text style={{ fontSize: 18, marginLeft: 12, marginRight: 12, marginTop: -3 }}>
                    {quantity1}
                  </Text>
                  <TouchableOpacity
                    onPress={handleIncrement1}
                    style={{
                      backgroundColor: "rgb(18,38,54)",
                      height: 22,
                      width: 22,
                      borderRadius: 25,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Text style={{ fontSize: 23, marginTop: -5, fontWeight: "bold", color: 'white' }}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Card>
          <Card
            style={{
              marginTop: 12,
              height: 100,
              width: '100%',
              backgroundColor: "#f4f4f4",
              flexDirection: "row",
            }}>
            <Image
              source={{
                uri: "https://themes.pixelstrap.com/fuzzy/assets/images/product/7.png",
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
                  Side Table
                </Text>
                <TouchableOpacity onPress={() => console.log("item deleted")}>
                  <Icon
                    name="delete"
                    color="black"
                    size={20}
                    style={{ marginRight: 6, }}
                  ></Icon>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text
                  style={{ fontSize: 13, color: '#808080', fontWeight: '500', }}
                >
                  Qty:{quantity2} |</Text>
                <View style={{ height: 12, width: 12, borderRadius: 10, backgroundColor: '#8e2525', borderColor: '#8e2525', alignSelf: 'center', marginLeft: 4 }}>

                </View>
                <Text style={{ fontSize: 14, color: '#808080', fontWeight: '400', flexDirection: 'row', marginLeft: 7 }}>Brown</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  marginTop: 8
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
                  $10
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    backgroundColor: '#fff',
                    marginLeft: 86,
                    padding: 5,
                    borderRadius: 20
                  }}
                >
                  <TouchableOpacity
                    onPress={handleDecrement2}
                    style={{
                      height: 22,
                      width: 22,
                      backgroundColor: "#e6e6e6",
                      borderRadius: 20,
                      justifyContent: 'center',
                      alignItems: 'center',

                    }}
                  >
                    <Text style={{ fontSize: 30, marginTop: -12, fontWeight: "bold" }}>-</Text>
                  </TouchableOpacity>
                  <Text style={{ fontSize: 18, marginLeft: 12, marginRight: 12, marginTop: -3 }}>
                    {quantity2}
                  </Text>
                  <TouchableOpacity
                    onPress={handleIncrement2}
                    style={{
                      backgroundColor: "rgb(18,38,54)",
                      height: 22,
                      width: 22,
                      borderRadius: 25,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Text style={{ fontSize: 23, marginTop: -5, fontWeight: "bold", color: 'white' }}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Card>
        </View>

      </ScrollView>
      <View
        style={{ borderTopWidth: 1,marginBottom:5,paddingBottom:10, paddingTop: 13, borderTopColor: "#e6e6e6", elevation: 1, opacity: 3,flexDirection:'row' }}>
        <View
          style={{
           
          }}
        >
           <Text style={{ fontSize: 14, marginLeft: 20, color: "#999999", fontWeight: 500 }}>
          Total Price
        </Text>
          <Text style={{
            marginLeft: 20, fontSize: 20, color: '#404040',
            fontWeight: "bold",
          }}>$210.00</Text>
          </View>
          <TouchableOpacity
            style={{
              height: 50,
              width: 150,
              backgroundColor: "#122636",
              borderRadius: 10,
              justifyContent:'center',
              alignItems:'center',
              marginLeft:105
            }}
          >
            <Text
              style={{
                color: "#e6e6e6",
                fontWeight: "bold",
                fontSize: 15,
              }}
            >
              Checkout
            </Text>
          </TouchableOpacity>
        
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Addtocart;
