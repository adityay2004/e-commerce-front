import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import { Card } from "react-native-shadow-cards";
import Feather from "react-native-vector-icons/Feather";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Category from "./Api/Category";
const Categories = () => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.header2}>
          <View style={{ flexDirection: 'row', backgroundColor: '#d9d9d9', alignItems: 'center', borderRadius: 5 }}>
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

        </View>
        <View style={{marginTop:10}}>
         <FlatList
          keyExtractor={(key) => key.index}
          showsHorizontalScrollIndicator={false}
          data={Category}
          renderItem={({ item }) => {
            return (
             
                <Card
                  style={{
                    //height: 200,
                    width: '95%',
                    backgroundColor: "#f4f4f4",
                   marginBottom:15,
                    marginLeft: 10,
                    marginRight: 10,
                    paddingBottom:15
                  }}
                >
                  <Text
                    style={{
                      marginTop: 40,
                      color: "#4d4d4d",
                      marginLeft: 10,
                      fontSize: 18,
                      fontWeight:'600'
                    }}
                  >
                    {item?.name}
                  </Text>
                  <Text style={{ color: "gray", marginLeft: 10,fontWeight:'400' }}>
                    Total {item?.items} items available
                  </Text>
                  <Icon
                    name="arrow-right"
                    size={30}
                    color="#595959"
                    style={{ marginLeft: 10, marginTop: 30 }}
                  ></Icon>
                  <Image
                    source={{
                      uri: item?.image
                    }}
                    style={{
                      height: 150,
                      width: 150,
                      resizeMode: "contain",
                      marginLeft: 190,
                      position:'absolute',
                      marginTop: 5,
                                          
                    }}
                  ></Image>
                </Card>
             
            )
          }}></FlatList>
</View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
  header2: {
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    justifyContent: 'center',
    marginBottom: 10
  },
  input: {
    height: 40,
    borderRadius: 10,
    width: '90%',
    marginLeft: 10,
    height: 55

  },
  navouter: {
    height: 38,
    width: 38,
    borderWidth: 1,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#d9d9d9',
    marginTop: 25,
    marginLeft: 95
  },
});



export default Categories