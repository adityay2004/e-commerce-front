import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../Home';
import Bottom from './Bottom';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Drawer = createDrawerNavigator()
export default function DrawerNavigation() {
  const navigation = useNavigation()
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      initialRouteName='Dashboard'
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#aa18ea',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: 'Roboto-Medium',
          fontSize: 15,
        },
      }}>
      <Drawer.Screen
        name="Dashboard"
        component={Bottom}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
          headerTitle: false,
          headerTitle: "",
          headerLeft: () => (
            <View style={styles.header}>
              <View style={styles.navouter} >
                <EvilIcons name="navicon" size={35} onPress={() =>
                  navigation.dispatch(DrawerActions.toggleDrawer())
                }></EvilIcons>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Image
                  source={require('../../assets/profile.png')}
                  style={{ height: 40, width: 40, marginLeft: 10 }}
                ></Image>
                <Text style={{ color: "gray", fontSize: 15, fontWeight: '500', marginLeft: 10 }}>
                  Hello
                </Text>
                <Text
                  style={{
                    marginTop: 18,
                    marginLeft: -40,
                    fontSize: 18,
                    fontWeight: "700",
                    color: '#4d4d4d'
                  }}
                >
                  Aditya !
                </Text>
              </View>

            </View>
          ),
          headerRight: ({ color }) => (
            <View style={[styles.navouter, { marginRight: 10,marginTop:8 }]}>
              <Icon name="bell" size={25} style={{}}></Icon>
            </View>
          ),
          headerShown: true,
        }}
      />


    </Drawer.Navigator>

  )
}


const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 12,
    marginTop:8
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
})