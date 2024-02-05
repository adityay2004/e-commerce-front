import {
  Image,
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  ImageBackground,
  Pressable,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from "react-native";

import React, { useState, useRef, useEffect } from "react";
import Carousel from "react-native-snap-carousel";
import { Card } from "react-native-shadow-cards";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Feather from "react-native-vector-icons/Feather";
import { Rating, AirbnbRating } from 'react-native-ratings';
import Category from "./Api/Category";
import Chair from "./Api/Chair";
import Trendingproduct from "./Api/Trendingproduct";
import Offerzone from "./Api/Offerzone";
import Furniture from "./Api/Furniture";
const { width: screenWidth } = Dimensions.get("window");

const renderitem = ({ item }) => {
  return (
    <View
      style={{
         backgroundColor: "#e6e6e6",
         marginTop: 10,
        marginLeft: -8,
        paddingBottom:20,
      }}>
      <View
        style={{
          justifyContent: "space-between",
          marginTop: 10,
          marginLeft: 20,
        }}
      >
        <Text style={{ fontSize: 15, fontWeight: "700", color: '#333333' }}>
          Offer Zone</Text>
      </View>
      <View>
        <Card
          style={{
            marginTop: 10,
            height: 100,
            width: '92%',
            backgroundColor: "white",
            flexDirection: "row",
            marginLeft: 20,
          }}>
          <Image
            source={{
              uri: item.url,
            }}
            style={{
              height: 80,
              width: 90,
              resizeMode: "contain",
              marginLeft: 10,
              marginTop: 10,
              backgroundColor: "#f4f4f4",
            }}
          ></Image>

          <View style={{ marginLeft: 10, marginTop: 10 }}>
            <Text style={{ fontSize: 15, color: '#666666', fontWeight: '500' }}>{item?.name}</Text>
            <Text numberOfLines={1} style={{ marginTop: 2, fontSize: 13, color: '#a6a6a6', fontWeight: '400' }}>
              {item?.des}</Text>
            <View style={{ flexDirection: "row" }}>
              <Rating
                type='star'
                ratingCount={5}
                imageSize={13}
                isDisabled={false}
                startingValue={item?.ratting}
                onFinishRating={{}}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 10,
                marginTop: 3,
              }}>
              <Text
                style={{
                  color: '#404040',
                  fontSize: 14,
                  fontWeight: "bold",
                  flexDirection: "row",
                }}>
                {item?.price}
              </Text>

              <TouchableOpacity style={styles.circleview2} onPress={() => console.log("add to cart")}>
                <Icon name="cart" size={15} color="white"></Icon>
              </TouchableOpacity>
            </View>
          </View>
        </Card>
      </View>
    </View>
  );
};


const Home = () => {
  const [catindex, setCatindex] = useState(1);
  const [categoryData, setcategoryData] = useState([]);

  const isCarousel = useRef(null);
  const isCarousel1 = useRef(null);
  function clickcategory(data) {
    setCatindex(data);
    if (data == 1) setcategoryData(Chair)
    else setcategoryData([])

  }
  useEffect(() => {
    setcategoryData(Chair)
  }, [])
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
         
          <ImageBackground
            source={require('../assets/banner-1.jpg')}
            style={styles.imgbackground}
            imageStyle={{ borderRadius: 6 }}
            resizeMode="cover"
          >
            <Text style={styles.imgtext1}>Best Shelling</Text>
            <Text style={styles.imgtext2}>Comfort & modern</Text>
            <Text style={styles.imgtext2}>Life style sofa</Text>

            <Pressable
              onPress={() => console.log("View more pressed")}
              style={{ flexDirection: "row" }}
            >
              <Text style={styles.Viewmore}>View More</Text>
              <Icon
                name="arrow-right"
                size={20}
                color="white"
                style={{ marginLeft: 10, marginTop: 45 }}
              ></Icon>
            </Pressable>
          </ImageBackground>
          <View>
            <FlatList
              style={{ marginLeft: 10, marginRight: 10 }}
              keyExtractor={(key) => key.index}
              horizontal
              showsHorizontalScrollIndicator={false}
              data={Category}
              loop={true}
              renderItem={({ item }) => {
                return (
                  <Pressable key={item.index}
                    style={{
                      height: 40,
                      backgroundColor: catindex == item.index ? ("#122636") : ("#d9d9d9"),
                      marginTop: 20,
                      marginRight: 10,
                      borderRadius: 5,
                      paddingTop: 8,
                      paddingBottom: 8,
                      paddingLeft: 18,
                      paddingRight: 18,
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'row'
                    }}
                    onPress={() => {
                      clickcategory(item.index)
                    }}
                  >
                    {
                      catindex == item.index ? (<Icon name="sofa" color="#f2f2f2" style={{ marginRight: 10 }} size={20}></Icon>) : (null)
                    }
                    <Text style={{
                      fontSize: 16,
                      color: catindex == item.index ? ("#f2f2f2") : ("#404040"),
                    }}>{item.name}{" "}</Text>

                  </Pressable>
                );
              }}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
              marginLeft: 10,
              marginRight: 10,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 15, color: '#333333' }}>
              New Arrivals
            </Text>
            <TouchableOpacity onPress={() => console.log("Vie all pressed")}>
              <Text style={{ fontSize: 13, color: "gray" }}>View all</Text>
            </TouchableOpacity>
          </View>
          <View style={{
            flexDirection: "row", marginLeft: 3,
            marginRight: 10,
          }}>
            <FlatList
              style={{ marginLeft: 10, marginRight: 10 }}
              keyExtractor={(key) => key.index}
              horizontal
              showsHorizontalScrollIndicator={false}
              data={categoryData}
              renderItem={({ item }) => {
                return (
                  <Card style={styles.cardnew} key={item.index}>
                    <TouchableOpacity onPress={() => console.log("Heart")}>
                      <Image source={{ uri: item.mediaUrl }}
                        style={{
                          height: 80,
                          width: 145,
                          resizeMode: "contain",
                          margin: 5,
                          backgroundColor: "white",
                          borderRadius: 5,
                        }}
                      >
                      </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.circleview} onPress={() => console.log("Heart")}>
                      <Icon name="heart" color="red" size={15}></Icon>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.circleview1} onPress={() => console.log("add to cart")}>
                      <Icon name="cart" size={15} color="white"></Icon>
                    </TouchableOpacity>

                    <View style={{ marginLeft: 10, marginTop: 10 }}>
                      <Text style={{ fontSize: 15, color: '#666666', fontWeight: '500' }}>{item.name}</Text>
                      <Text numberOfLines={1} style={{ marginTop: 2, fontSize: 13, color: '#a6a6a6', fontWeight: '400' }}>
                        {item.description}</Text>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          marginBottom: 10,
                          marginTop: 10,
                        }}>
                        <Text
                          style={{
                            color: '#404040',
                            fontSize: 14,
                            fontWeight: "bold",
                            flexDirection: "row",
                          }}>
                          {item?.variants[0]["sellingPrice"]}
                        </Text>
                        <Text
                          style={{
                            textDecorationLine: "line-through",
                            color: "gray",
                            marginRight: 50,
                          }}>
                          {item?.variants[0]['mrp']}
                        </Text>
                        <Icon
                          name="star"
                          color="#FFBF00"
                          style={{ marginRight: 10, marginTop: 5 }}>
                          <Text
                            style={{ fontSize: 13, marginRight: 20, color: "black" }}
                          >
                            {item?.rating}
                          </Text>
                        </Icon>
                      </View>
                    </View>

                  </Card>
                )
              }}></FlatList>

          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
              marginLeft: 10,
              marginRight: 10,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "700", color: '#333333' }}>
              Trending Furniture
            </Text>
            <TouchableOpacity onPress={() => console.log("View all pressed")}>
              <Text style={{ color: "gray", fontSize: 13 }}>View all</Text>
            </TouchableOpacity>
          </View>

          <View style={{ marginLeft: 10, marginBottom: 3 }}>
            <FlatList
              keyExtractor={(key) => key.index}
              showsHorizontalScrollIndicator={false}
              data={Trendingproduct}
              renderItem={({ item }) => {
                return (
                  <Card
                    style={{
                      marginTop: 10,
                      width: '96%',
                      marginRight: 15,
                      backgroundColor: "#f4f4f4",
                      flexDirection: "row",
                      marginLeft: 2,
                      marginBottom: 3
                    }}>
                    <Image
                      source={{ uri: item.image }}
                      style={{
                        height: 80,
                        width: 90,
                        marginBottom: 10,
                        resizeMode: "contain",
                        marginLeft: 10,
                        marginTop: 10,
                        backgroundColor: "white",
                        borderRadius: 5
                      }}></Image>
                    <View>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          marginTop: 10,
                          marginLeft: 10
                        }}>
                        <Text style={{ fontSize: 15, color: '#666666', fontWeight: '500' }}>{item?.name}</Text>
                        <View style={{ marginLeft: 187, position: 'absolute' }}>
                          <Icon
                            name="star"
                            color="#FFBF00"
                          >
                            <Text style={{ fontSize: 13, color: "black" }}>{item?.ratting}</Text>
                          </Icon>
                        </View>

                      </View>
                      <Text numberOfLines={1} style={{ marginTop: 2, fontSize: 13, color: '#a6a6a6', fontWeight: '400', marginLeft: 10 }}>
                        {item?.description}</Text>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          marginBottom: 10,
                          marginTop: 10,
                          marginLeft: 10
                        }}>
                        <View style={{ flexDirection: 'row' }}>
                          <Text
                            style={{
                              color: '#404040',
                              fontSize: 14,
                              fontWeight: "bold",
                              flexDirection: "row",
                            }}>
                            {item?.mrp}
                          </Text>
                          <Text
                            style={{
                              color: "gray",
                              fontSize: 12,
                              marginLeft: 5,
                              alignSelf: 'center',
                              color: 'red'
                            }}>
                            {item?.discount}
                          </Text>
                        </View>
                        <TouchableOpacity style={styles.circleview2} onPress={() => console.log("add to cart")}>
                          <Icon name="cart" size={15} color="white"></Icon>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </Card>
                )
              }}></FlatList>



          </View>
          <ImageBackground
            source={{
              uri: "https://themes.pixelstrap.com/fuzzy/assets/images/banner/banner-2.jpg",
            }}
            style={styles.imgbackground}
            imageStyle={{ borderRadius: 10 }}
            resizeMode="cover"
          >
            <Text style={styles.imgtext1}>Best Shelling</Text>
            <Text style={styles.imgtext2}>Comfort & modern</Text>
            <Text style={styles.imgtext2}>Life style sofa</Text>
            <Pressable
              onPress={() => console.log("View more pressed")}
              style={{ flexDirection: "row" }}
            >
              <Text style={styles.Viewmore}>View More</Text>
              <Icon
                name="arrow-right"
                size={20}
                color="white"
                style={{ marginTop: 45, marginLeft: 10 }}
              ></Icon>
            </Pressable>
          </ImageBackground>

          <Carousel
            ref={isCarousel}
            data={Offerzone}
            renderItem={renderitem}
            sliderWidth={screenWidth - 1}
            itemWidth={screenWidth - 1}
            loop
          ></Carousel>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
              marginLeft: 10,
              marginRight: 10,
            }}>
            <Text style={{ fontSize: 15, fontWeight: "700", color: '#333333' }}>
              Furniture and Decore
            </Text>
            <TouchableOpacity onPress={() => console.log("View all pressed")}>
              <Text style={{ color: "gray", fontSize: 13 }}>View all</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{ flexDirection: "row",marginTop:5, justifyContent: "space-between" }}
          >
            <FlatList
              keyExtractor={(key) => key.index}
              showsHorizontalScrollIndicator={false}
              numColumns={2}
              data={Furniture}
              renderItem={({ item }) => {
                return (
                  <Card
                    style={{
                      backgroundColor: "#f4f4f4",
                      height: 230,
                      width: 166,
                      marginTop: 10,
                      marginBottom:5,
                      marginLeft: 10,
                    }}
                  >
                    <Image
                      source={{
                        uri: item?.image,
                      }}
                      style={{
                        height: 150,
                        width: 150,
                        backgroundColor: "white",
                        margin: 8,
                        resizeMode: "contain",
                        borderRadius: 5,
                      }}
                    ></Image>
                    <TouchableOpacity style={styles.circleviewheart} onPress={() => console.log("Heart")}>
                      <Icon name="heart" color="red" size={15}></Icon>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.circleview3} onPress={() => console.log("add to cart")}>
                      <Icon name="cart" size={15} color="white"></Icon>
                    </TouchableOpacity>

                    <View style={{ marginLeft: 10, marginTop: 2 }}>
                      <Text style={{ fontSize: 13, color: '#666666', fontWeight: '500' }}>{item.name}</Text>
                      <View style={{flexDirection:'row'}}>
                      <Text numberOfLines={1} style={{ marginTop: 6, fontSize: 12, color: '#a6a6a6', fontWeight: '400',width:'70%' }}>
                        {item.desc}</Text>
                        <Text
                          style={{
                            color: '#404040',
                            fontSize: 14,
                            fontWeight: "bold",
                            flexDirection: "row",
                            marginTop: 6, 
                            marginLeft:10
                          }}>
                          {item?.mrp}
                        </Text>
                      </View>
                      
                    </View>
                  </Card>
                )
              }}></FlatList>
          </View>


          <View
            style={{ flexDirection: "row", marginLeft: 10,marginRight:10,marginBottom:10,marginTop:20, justifyContent: "space-between" }}
          >
            <ImageBackground
              source={require('../assets/banner-3.jpg')}
              style={{
                height: 170,
                width: 165,
                borderRadius: 20,
               }}
               imageStyle={{borderRadius:8}}
            >
              <Text
                style={{
                  color: "#ffffff",
                  fontSize: 15,
                  marginTop: 20,
                  marginLeft: 10,
                  fontWeight: "bold",
                }}
              >
                Wingback
              </Text>
              <Text
                style={{
                  color: "#ffffff",
                  fontSize: 14,
                  marginLeft: 10,
                  fontWeight: "bold",
                }}
              >
                Chair
              </Text>
              <TouchableOpacity onPress={() => console.log("Aroow pressed")}>
                <Icon
                  name="arrow-right"
                  color="white"
                  size={23}
                  style={{ marginTop: 30, marginLeft: 10 }}
                ></Icon>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => console.log("View more pressed")}
              >
                 <Text  style={{ marginTop: 0,marginLeft: 10, fontSize: 12, color: 'white', fontWeight: '400',width:'70%' }}>
                       
                  View More
                </Text>
              </TouchableOpacity>
            </ImageBackground>
            <ImageBackground
             source={require('../assets/banner-4.jpg')}
             imageStyle={{borderRadius:8}}
              style={{
                height: 170,
                width: 165,
               
              }}
            >
              <Text
                style={{
                  color: "#e6e6e6",
                  fontSize: 15,
                  marginTop: 20,
                  marginLeft: 10,
                  fontWeight: "bold",
                }}
              >
                Wingback
              </Text>
              <Text
                style={{
                  color: "#e6e6e6",
                  fontSize: 14,
                  marginLeft: 10,
                  fontWeight: "bold",
                }}
              >
                Chair
              </Text>
              <TouchableOpacity onPress={() => console.log("Aroow pressed")}>
                <Icon
                  name="arrow-right"
                  color="white"
                  size={23}
                  style={{ marginTop: 30, marginLeft: 10 }}
                ></Icon>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => console.log("View more pressed")}
              >
                <Text style={{ color: "white", fontSize: 13, marginLeft: 10 }}>
                  View More
                </Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
        </View>
      </ScrollView>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backfaceVisibility: "#f4f4f4",
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 12,
    // marginBottom: -30,
    // backgroundColor:'red'
  },
  navouter: {
    height: 38,
    width: 38,
    borderWidth: 1,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#d9d9d9',
    backgroundColor: ''
  },
  header2: {
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 10,

  },
  imgbackground: {
    height: 150,
    width: 340,
    marginTop: 20,
    marginLeft: 10,
    borderRadius: 10,

  },
  imgtext1: {
    color: "white",
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 10,
  },
  imgtext2: {
    color: "white",
    marginLeft: 10,
  },
  Viewmore: {
    color: "white",
    marginLeft: 10,
    marginTop: 45,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  input: {
    height: 40,
    borderRadius: 10,
    width: '74%',
    marginLeft: 10,
    // paddingLeft: 30,
  },
  moreinput: {
    flexDirection: "row",
    //justifyContent: "space-evenly",
  },

  chair: {
    height: 40,
    width: 60,
    backgroundColor: "#f4f4f4",
    marginTop: 20,
    textAlign: "center",
    marginLeft: 10,
  },

  card: {
    backgroundColor: "#f4f4f4",
    height: 250,
    width: 170,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 15,
  },
  cardnew: {
    backgroundColor: "#f2f2f2",
    width: 156,
    marginTop: 20,
    marginBottom:1,
    marginRight: 15,
    borderWidth: 1,
    borderColor: '#e6e6e6',
    
    borderRadius: 5
  },
  circleview: {
    height: 18,
    width: 18,
    borderRadius: 30,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#ffffff",
    borderColor: '#e6e6e6',
    position: 'absolute',
    marginLeft: 130,
    marginTop: 7
  },
  circleviewheart: {
    height: 20,
    width: 20,
    borderRadius: 30,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#ffffff",
    borderColor: '#e6e6e6',
    position: 'absolute',
    marginLeft: 134,
    marginTop: 12
  },
  circleview1: {
    height: 23,
    width: 23,
    borderRadius: 30,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "rgb(18,38,54)",
    borderColor: '#e6e6e6',
    position: 'absolute',
    marginLeft: 130,
    marginTop: 75
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
    marginLeft: 190
  },
  circleview3: {
    height: 25,
    width: 25,
    borderRadius: 30,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "rgb(18,38,54)",
    borderColor: '#e6e6e6',
    position: 'absolute',
    marginLeft: 128,
    marginTop: 143
  }
});

export default Home;
