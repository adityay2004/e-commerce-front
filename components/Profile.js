import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";


const Profile = () => {
  const navigation=useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={{
            backgroundColor: "#f4f4f4",
            marginTop: 30,
            width: 400,
            height: 20,
          }}
        >
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ backgroundColor: '#fff', position: 'absolute', marginTop: -15, justifyContent: 'center', alignItems: 'center', marginLeft: 10, padding: 8, borderRadius: 10 }}>
            <Image
              source={{
                uri: "https://themes.pixelstrap.com/fuzzy/assets/images/icons/profile1.png",
              }}
              style={{
                height: 50,
                width: 55,
                borderRadius: 10,
              }}
            ></Image>
          </View>

          <Text style={{ marginLeft: 90, position: 'absolute', color: '#333333', marginTop: -13, fontWeight: '600', fontSize: 16 }}>Aditya Yadav</Text>

          <View style={{ backgroundColor: '#fff', position: 'absolute', marginTop: -15, justifyContent: 'center', alignItems: 'center', marginLeft: 315, padding: 8, borderRadius: 10 }}>
            <FontAwesome
              name="edit"
              size={20}
              style={{}}
            ></FontAwesome>

          </View>
        </View>
        <View style={{ flexDirection: "row", marginTop: 45 }}></View>
        <View style={styles.boxView}>
          <TouchableOpacity style={styles.boxbtnStyle} onPress={() =>navigation.navigate('Orderhistory')}>
            <View style={styles.iconView}>
              <Icon
                name="package-variant-closed"
                size={28}
                style={{}}
              ></Icon>
            </View>
            <View style={styles.textBox}>
              <Text style={styles.text1}>
                Orders
              </Text>
              <Text style={styles.text2}>
                Ongoing orders,Recent orders
              </Text>
            </View>

          </TouchableOpacity>

        </View>

        <View style={styles.outerstyle}>
          <TouchableOpacity style={styles.boxbtnStyle} onPress={() => navigation.navigate('Categories')}>
            <View style={styles.iconView}>
              <Icon
                name="heart-outline"
                size={28}
                style={{}}
              ></Icon>
            </View>
            <View style={styles.textBox}>
              <Text style={styles.text1}>
                Wishlist
              </Text>
              <Text style={styles.text2}>
                you save product
              </Text>

            </View>
          </TouchableOpacity>

        </View>
        <View style={styles.outerstyle}>
          <TouchableOpacity style={styles.boxbtnStyle} onPress={() => console.log("payment history")}>
            <View style={styles.iconView}>
              <Icon
                name="wallet-outline"
                size={28}
              ></Icon>
            </View>

            <View style={styles.textBox}>
              <Text style={styles.text1}>
                Payment
              </Text>
              <Text style={styles.text2}>
                Saved card,wallet
              </Text>

            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.outerstyle}>
          <TouchableOpacity style={styles.boxbtnStyle} onPress={() => console.log("payment history")}>
            <View style={styles.iconView}>
              <Icon
                name="map-marker-outline"
                size={28}
              ></Icon>
            </View>
            <View style={styles.textBox}>
              <Text style={styles.text1}>
                Saved Address
              </Text>
              <Text style={styles.text2}>
                Home,Office
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.outerstyle}>
          <TouchableOpacity style={styles.boxbtnStyle} onPress={() => console.log("payment history")}>
            <View style={styles.iconView}>
              <Icon
                name="copyright"
                size={28}
              ></Icon>
            </View>
            <View style={styles.textBox}>
              <Text style={styles.text1}>
                Language
              </Text>
              <Text style={styles.text2}>
                Select your Language here
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.outerstyle}>
          <TouchableOpacity style={styles.boxbtnStyle} onPress={() => console.log("payment history")}>
            <View style={styles.iconView}>
              <Icon
                name="bell-outline"
                size={28}
              ></Icon>
            </View>
            <View style={styles.textBox}>
              <Text style={styles.text1}>
                Notification
              </Text>
              <Text style={styles.text2}>
                Offers,Order tracking messages
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.outerstyle}>
          <TouchableOpacity style={styles.boxbtnStyle} onPress={() => console.log("payment history")}>
            <View style={styles.iconView}>
              <Icon
                name="cog-outline"
                size={28}
              ></Icon>
            </View>
            <View style={styles.textBox}>
              <Text style={styles.text1}>
                Settings
              </Text>
              <Text style={styles.text2}>
                app settings,Dark mode
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.outerstyle}>
          <TouchableOpacity style={styles.boxbtnStyle} onPress={() => console.log("payment history")}>
          <View style={styles.iconView}>
              <Icon
                  name="restore-alert"
                size={28}
              ></Icon>
            </View>
            <View style={styles.textBox}>
              <Text style={styles.text1}>
              Terms & Conditions
              </Text>
              <Text style={styles.text2}>
              T&C for use of platform
              </Text>
            </View> 
            </TouchableOpacity>
         </View>
        <View style={styles.outerstyle}>
          <TouchableOpacity style={styles.boxbtnStyle} onPress={() => console.log("payment history")}>
          <View style={styles.iconView}>
              <Icon
                  name="phone-outline"
                size={28}
              ></Icon>
            </View>
            <View style={styles.textBox}>
              <Text style={styles.text1}>
              Help
              </Text>
              <Text style={styles.text2}>
              Customer Support,FAQs
              </Text>
            </View> 
          </TouchableOpacity>
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
  boxView: {
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 10,
  },
  boxbtnStyle: {
    flexDirection: "row",
    marginTop: 14,
    width: '100%',
    paddingTop: 1,
    paddingBottom: 17
  },
  outerstyle: {
    flexDirection: "row",
    borderTopWidth: 0.5,
    marginLeft: 10,
    marginRight: 10,
    borderColor: '#d9d9d9'
  },
  iconView: {
    backgroundColor: "#f4f4f4",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    borderRadius: 10
  },
  textBox: {
    marginLeft: 15
  },
  text1: {
    color: '#4d4d4d',
    fontSize: 16,
    fontWeight: '500'
  },
  text2: {
    color: '#737373',
    fontSize: 14,
    fontWeight: '400'
  },
});


export default Profile