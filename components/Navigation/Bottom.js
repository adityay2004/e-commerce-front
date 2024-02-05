import React from 'react'
import Home from '../Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Categories from '../Categories';
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import Card from '../Card';
import Wishlist from '../Wishlist';
import Profile from '../Profile';
import Innerstack from './InnerStack';

const Bottom = () => {
    const bottom = createBottomTabNavigator();
    return (
        <bottom.Navigator>
            <bottom.Screen
                name="Home"
                component={Innerstack}
                options={{
                    tabBarLabel: "Home",
                    tabBarShowLabel: false,
                    tabBarLabelStyle: { color: "#008E97" },
                    headerShown: false,
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <AntDesign name="home" size={26} color="#9999ff" />
                        ) : (
                            <AntDesign name="home" size={26} color="#808080" />
                        ),
                }}
            />
            <bottom.Screen
                name="Categories"
                component={Categories}
                options={{
                    tabBarLabel: "Categories",
                    tabBarShowLabel: false,
                    tabBarLabelStyle: { color: "#008E97" },
                    headerShown: false,
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <MaterialCommunityIcons name="gamepad-circle" size={26} color="#9999ff" />
                        ) : (
                            <MaterialCommunityIcons name="gamepad-circle" size={26} color="#808080" />
                        ),
                }}
            />
            <bottom.Screen
                name="Card"
                component={Card}
                options={{
                    tabBarLabel: "Card",
                    tabBarShowLabel: false,
                    tabBarLabelStyle: { color: "#008E97" },
                    headerShown: false,
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Ionicons name="bag-outline" size={26} color="#9999ff" />
                        ) : (
                            <Ionicons name="bag-outline" size={26} color="#808080" />
                        ),
                }}
            />

            <bottom.Screen
                name="Wishlist"
                component={Wishlist}
                options={{
                    tabBarLabel: "Wishlist",
                    tabBarShowLabel: false,
                    tabBarLabelStyle: { color: "#008E97" },
                    headerShown: false,
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <AntDesign name="hearto" size={26} color="#9999ff" />
                        ) : (
                            <AntDesign name="hearto" size={26} color="#808080" />
                        ),
                }}
            />
              <bottom.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: "Profile",
                    tabBarShowLabel: false,
                    tabBarLabelStyle: { color: "#008E97" },
                    headerShown: false,
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Feather name="user" size={26} color="#9999ff" />
                        ) : (
                            <Feather name="user" size={26} color="#808080" />
                        ),
                }}
            />

        </bottom.Navigator>
    );
}

export default Bottom