import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  Alert,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import "react-native-gesture-handler";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import * as firebase from 'firebase';

class homeScreen extends React.Component {
  componentDidMount = () => {};
  static navigationOptions = {
    title: "homeScreen",
    header: null
  };

  constructor(props){
    super(props);
    this.state ={
      email: "",
      name: "",
      gender: "",
      date: ""
    };
    this.ref = firebase.firestore().collection("Accounts");
  }

  _onPressButton() {
    Alert.alert("Join Success");
  }

  UNSAFE_componentWillMount() {
    var email = firebase.auth().currentUser.email
    var e = "";
    var n = "";
    var g = "";

    this.ref.get().then(ss => {
        ss.docs.forEach(doc => {
            if(email == doc.get("email")){
                e = doc.get("email");
                n = doc.get("username");
                g = doc.get("gender");
            }
        });
    
        this.setState({
            email: e,
            name: n,
            gender: g
        })
    });

    var months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    var days = ["","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    var day = days[new Date().getDay()];
    var date = new Date().getDate();
    var month = months[new Date().getMonth() + 1];
    var year = new Date().getFullYear();

    this.setState({
      date: day + ", " + date + " " + month + " " + year
    })
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#E5E5E5" }}>
        <View
          style={{ marginHorizontal: 17, flexDirection: "row", paddingTop: 30 }}
        >
          <View>
            <Text
              style={{ fontWeight: "bold", fontSize: 28, color: "#526EDD" }}
            >
              Home
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginLeft: 147 }}>
            <TouchableOpacity>
              <Image
                source={require("../src/image/History.png")}
                style={{ marginRight: 13 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("notifScreen")}
            >
              <Image source={require("../src/image/Notif.png")} />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView>
          <View
            style={{
              flex: 0,
              flexDirection: "row",
              marginTop: 20,
              paddingBottom: 10,
              borderRadius: 15,
              marginHorizontal: 17,
              backgroundColor: "#50A5D3"
            }}
          >
            <Image
              source={require("../src/image/Prof1.png")}
              style={{ margin: 13 }}
            />
            <View style={{ marginLeft: 30, marginTop: 10 }}>
              <Text
                style={{ fontSize: 20, fontWeight: "bold", color: "white" }}
              >
                Hello, {this.state.name}!
              </Text>
              <Text style={{ fontSize: 16, marginTop: 10, color: "white" }}>
                {this.state.date}
              </Text>
            </View>
          </View>
          <View style={{ flex: 0, marginHorizontal: 17, marginTop: 30 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 8 }}>
              Event you might like
            </Text>
            <ScrollView horizontal={true} style={{ flexDirection: "row" }}>
              <View
                style={{
                  marginRight: 18,
                  height: 230,
                  width: 183,
                  backgroundColor: "white",
                  borderRadius: 15,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <View style={{ alignItems: "center", paddingTop: 10 }}>
                  <Image source={require("../src/image/Event1.png")} />
                  <Text>Pesta Kembang Api</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    flex: 0,
                    justifyContent: "center"
                  }}
                >
                  <Image source={require("../src/image/Sign.png")} />
                  <Text style={{ fontSize: 9, color: "gray" }}>
                    Jl. Gajah Mada, Pontianak
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    marginHorizontal: 10,
                    marginTop: 4
                  }}
                >
                  <View style={{ flex: 1, height: 40, width: 80 }}>
                    <Text style={{ color: "gray", fontSize: 11 }}>
                      Distance
                    </Text>
                    <Text style={{ fontSize: 12, fontWeight: "bold" }}>
                      524 meters
                    </Text>
                  </View>
                  <View style={{ flex: 1, height: 40, width: 80 }}>
                    <Text style={{ color: "gray", fontSize: 11 }}>
                      People Join
                    </Text>
                    <Text style={{ fontSize: 12, fontWeight: "bold" }}>
                      10,000 people
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    marginHorizontal: 10,
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >
                  <TouchableOpacity
                    onPress={this._onPressButton}
                    style={{
                      width: 70,
                      height: 30,
                      backgroundColor: "#50A5D3",
                      marginRight: 18,
                      borderRadius: 4
                    }}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        marginTop: 5,
                        fontSize: 12,
                        fontWeight: "bold",
                        color: "white"
                      }}
                    >
                      Join Now
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text
                      style={{ fontSize: 11, color: "gray", marginRight: 10 }}
                    >
                      View More
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  marginRight: 18,
                  height: 230,
                  width: 183,
                  backgroundColor: "white",
                  borderRadius: 15,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <View style={{ alignItems: "center", paddingTop: 10 }}>
                  <Image source={require("../src/image/Event1.png")} />
                  <Text>Pesta Tahun Baru</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    flex: 0,
                    justifyContent: "center"
                  }}
                >
                  <Image source={require("../src/image/Sign.png")} />
                  <Text style={{ fontSize: 9, color: "gray" }}>
                    Jl. Gajah Mada, Pontianak
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    marginHorizontal: 10,
                    marginTop: 4
                  }}
                >
                  <View style={{ flex: 1, height: 40, width: 80 }}>
                    <Text style={{ color: "gray", fontSize: 11 }}>
                      Distance
                    </Text>
                    <Text style={{ fontSize: 12, fontWeight: "bold" }}>
                      524 meters
                    </Text>
                  </View>
                  <View style={{ flex: 1, height: 40, width: 80 }}>
                    <Text style={{ color: "gray", fontSize: 11 }}>
                      People Join
                    </Text>
                    <Text style={{ fontSize: 12, fontWeight: "bold" }}>
                      10,000 people
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    marginHorizontal: 10,
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >
                  <TouchableOpacity
                    onPress={this._onPressButton}
                    style={{
                      width: 70,
                      height: 30,
                      backgroundColor: "#50A5D3",
                      marginRight: 18,
                      borderRadius: 4
                    }}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        marginTop: 5,
                        fontSize: 12,
                        fontWeight: "bold",
                        color: "white"
                      }}
                    >
                      Join Now
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text
                      style={{ fontSize: 11, color: "gray", marginRight: 10 }}
                    >
                      View More
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  marginRight: 18,
                  height: 230,
                  width: 183,
                  backgroundColor: "white",
                  borderRadius: 15,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <View style={{ alignItems: "center", paddingTop: 10 }}>
                  <Image source={require("../src/image/Event1.png")} />
                  <Text>Pesta Petasan</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    flex: 0,
                    justifyContent: "center"
                  }}
                >
                  <Image source={require("../src/image/Sign.png")} />
                  <Text style={{ fontSize: 9, color: "gray" }}>
                    Jl. Gajah Mada, Pontianak
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    marginHorizontal: 10,
                    marginTop: 4
                  }}
                >
                  <View style={{ flex: 1, height: 40, width: 80 }}>
                    <Text style={{ color: "gray", fontSize: 11 }}>
                      Distance
                    </Text>
                    <Text style={{ fontSize: 12, fontWeight: "bold" }}>
                      524 meters
                    </Text>
                  </View>
                  <View style={{ flex: 1, height: 40, width: 80 }}>
                    <Text style={{ color: "gray", fontSize: 11 }}>
                      People Join
                    </Text>
                    <Text style={{ fontSize: 12, fontWeight: "bold" }}>
                      10,000 people
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    marginHorizontal: 10,
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >
                  <TouchableOpacity
                    onPress={this._onPressButton}
                    style={{
                      width: 70,
                      height: 30,
                      backgroundColor: "#50A5D3",
                      marginRight: 18,
                      borderRadius: 4
                    }}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        marginTop: 5,
                        fontSize: 12,
                        fontWeight: "bold",
                        color: "white"
                      }}
                    >
                      Join Now
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text
                      style={{ fontSize: 11, color: "gray", marginRight: 10 }}
                    >
                      View More
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>
          <View style={{ flex: 1, marginHorizontal: 17, marginTop: 40 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 15
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                May You Like Community
              </Text>
              <TouchableOpacity>
                <Text style={{ color: "#526EDD", fontWeight: "bold" }}>
                  Show All
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View
                style={{
                  height: 103,
                  width: 55,
                  backgroundColor: "#576EC9",
                  borderRadius: 50,
                  marginRight: 10,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <TouchableOpacity>
                  <Image source={require("../src/image/btnAdd.png")} />
                </TouchableOpacity>
                <Image source={require("../src/image/book1.png")} />
              </View>
              <View
                style={{
                  height: 103,
                  width: 55,
                  backgroundColor: "#576EC9",
                  borderRadius: 50,
                  marginRight: 10,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <TouchableOpacity>
                  <Image source={require("../src/image/btnAdd.png")} />
                </TouchableOpacity>
                <Image source={require("../src/image/gitar1.png")} />
              </View>
              <View
                style={{
                  height: 103,
                  width: 55,
                  backgroundColor: "#576EC9",
                  borderRadius: 50,
                  marginRight: 10,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <TouchableOpacity>
                  <Image source={require("../src/image/btnAdd.png")} />
                </TouchableOpacity>
                <Image source={require("../src/image/brain1.png")} />
              </View>
              <View
                style={{
                  height: 103,
                  width: 55,
                  backgroundColor: "#576EC9",
                  borderRadius: 50,
                  marginRight: 10,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <TouchableOpacity>
                  <Image source={require("../src/image/btnAdd.png")} />
                </TouchableOpacity>
                <Image source={require("../src/image/blood1.png")} />
              </View>
              <TouchableOpacity>
                <Image source={require("../src/image/btnNext.png")} />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <View
          style={{ backgroundColor: "white", flexDirection: "row", height: 54 }}
        >
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("searchScreen")}
            >
              <Image
                source={require("../src/image/Search.png")}
                styles={{ width: 20, height: 20 }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("communityScreen")}
            >
              <Image
                source={require("../src/image/Group.png")}
                styles={{ width: 20, height: 20 }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 40
            }}
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("addScreen")}
            >
              <Image
                source={require("../src/image/Add.png")}
                styles={{ width: 20, height: 20 }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("homeScreen")}
            >
              <Image
                source={require("../src/image/Home-Active.png")}
                styles={{ width: 20, height: 20 }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("profilScreen")}
            >
              <Image
                source={require("../src/image/User.png")}
                styles={{ width: 20, height: 20 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default homeScreen;
