import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Card } from "react-native-shadow-cards";
import Feather from "react-native-vector-icons/Feather";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const Orderhistory = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 8
          }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              color: '#4d4dff'
            }}>
            Order history
          </Text>
        </View>
        <View style={{ flexDirection: 'row', marginLeft: 10, marginRight: 7, marginTop: 5, backgroundColor: '#d9d9d9', alignItems: 'center', borderRadius: 5 }}>
          <Feather
            name="search"
            size={18}
            style={{ marginLeft: 10, }}
          ></Feather>
          <TextInput
            placeholder="search here .."
            style={styles.input}
          ></TextInput>
        </View>

        <View style={{ marginBottom: 10 }}>
          <Card style={styles.cardstyle}>
            <View style={{ flexDirection: 'row' }}>
              <Image
                source={{
                  uri: "https://themes.pixelstrap.com/fuzzy/assets/images/product/3.png",
                }}
                style={styles.imagestyle}
              ></Image>

              <View style={styles.box2Style}>
                <View style={{ flexDirection: 'row', width: '83.5%', justifyContent: 'space-between', }}>
                  <Text style={styles.text1}>Wingback Chair</Text>
                  <View style={[styles.satusback, { backgroundColor: '#c6ecc6', }]}>
                    <Text style={[styles.textstatus, { color: '#267326' }]}>Ongoing</Text>
                  </View>
                </View>
                <Text style={styles.text2}>Qty: 1</Text>
                <Text style={{ fontSize: 14, fontWeight: '600', marginTop: 6, color: "red", }}>
                  View Details
                </Text>
              </View>
            </View>

            <View style={styles.header2}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.orderStyle}>Order :</Text>
                <Text
                  style={{ color: "gray", marginLeft: 5 }}
                >
                  26 Jan'23
                </Text>
              </View>
              <Text style={styles.orderStyle}>
                Dispatched
              </Text>

            </View>
          </Card>

          <Card style={styles.cardstyle}>
            <View style={{ flexDirection: 'row' }}>
              <Image
                source={{
                  uri: "https://themes.pixelstrap.com/fuzzy/assets/images/product/6.png",
              }}
                style={styles.imagestyle}
              ></Image>

              <View style={styles.box2Style}>
                <View style={{ flexDirection: 'row', width: '83.5%', justifyContent: 'space-between', }}>
                  <Text style={styles.text1}>Wingback Chair</Text>
                  <View style={[styles.satusback, { backgroundColor: '#c6ecc6', }]}>
                    <Text style={[styles.textstatus, { color: '#267326' }]}>Ongoing</Text>
                  </View>
                </View>
                <Text style={styles.text2}>Qty: 1</Text>
                <Text style={{ fontSize: 14, fontWeight: '600', marginTop: 6, color: "red", }}>
                  View Details
                </Text>
              </View>
            </View>

            <View style={styles.header2}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.orderStyle}>Order :</Text>
                <Text
                  style={{ color: "gray", marginLeft: 5 }}
                >
                  26 Jan'23
                </Text>
              </View>
              <Text style={styles.orderStyle}>
                Dispatched
              </Text>

            </View>
          </Card>

          <Card style={styles.cardstyle}>
            <View style={{ flexDirection: 'row' }}>
              <Image
                source={{
                  uri: "https://themes.pixelstrap.com/fuzzy/assets/images/product/7.png",
              }}
                style={styles.imagestyle}
              ></Image>

              <View style={styles.box2Style}>
                <View style={{ flexDirection: 'row', width: '83.5%', justifyContent: 'space-between', }}>
                  <Text style={styles.text1}>Wingback Chair</Text>
                  <View style={[styles.satusback, { backgroundColor: '#ffb3b3', }]}>
                    <Text style={[styles.textstatus, { color: '#cc0000' }]}>Delivered</Text>
                  </View>
                </View>
                <Text style={styles.text2}>Qty: 1</Text>
                <Text style={{ fontSize: 14, fontWeight: '600', marginTop: 6, color: "red", }}>
                  View Details
                </Text>
              </View>
            </View>

            <View style={styles.header2}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.orderStyle}>Order :</Text>
                <Text
                  style={{ color: "gray", marginLeft: 5 }}
                >
                  26 Jan'23
                </Text>
              </View>
              <Text style={styles.orderStyle}>
                Dispatched
              </Text>

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
  input: {
    borderRadius: 10,
    width: '90%',
    marginLeft: 10,
    height: 40

  },
  imagestyle: {
    height: 75,
    width: 85,
    resizeMode: "contain",
    marginLeft: 10,
    marginTop: 10,
    backgroundColor: "white",
    borderRadius: 7,
  },
  cardstyle: {
    backgroundColor: "#f4f4f4",
    width: 342,
    marginTop: 15,
    marginLeft: 10,

  },
  text1: {
    color: '#4d4d4d',
    fontSize: 15,
    fontWeight: '500'
  },
  text2: {
    color: '#737373',
    fontSize: 13,
    fontWeight: '400'
  },
  box2Style: {
    marginLeft: 10,
    marginTop: 16,

  },
  satusback: {
    marginLeft: 17,
    height: 20,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textstatus: {
    marginLeft: 9,
    marginRight: 9,
    marginTop: -2,
    fontSize: 12,
    fontWeight: '500'
  },
  header2: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#d9d9d9',
    marginLeft: 10,
    marginRight: 8,
    marginTop: 13,
    marginBottom: 13,
    paddingTop: 10,
    justifyContent: 'space-between'
  },
  orderStyle: {
    color: '#333333',
    fontWeight: '500'
  },
});
export default Orderhistory;

