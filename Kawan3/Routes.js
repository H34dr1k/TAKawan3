import React from 'react';
import { StyleSheet, View, Button, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// import LinearGradient from 'react-native-linear-gradient';
// import { Svg, Defs, LinearGradient, Stop, Rect } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';
import Text from './components/customText.js';
import { AppFontLoader } from './components/AppFontLoader.js';

import Intro from './screen/IntroScreen'
import Loading from './screen/LoadingScreen'
import Login from './screen/LoginScreen'
import SignUp1 from './screen/SignUp1'
import SignUp2 from './screen/SignUp2'
import homeScreen1 from './screen/homeScreen1'
import homeScreen from './screen/homeScreen'
import profilScreen from './screen/profilScreen'
import communityScreen from './screen/communityScreen'
import searchScreen from './screen/searchScreen'
import addScreen from './screen/addScreen'
import settingScreen from './screen/settingScreen'
import settingPrivasi from './screen/settingPrivasi'
import settingNotif from './screen/settingNotif'
import settingAbout from './screen/settingAbout'
import notifScreen from './screen/notificationScreen'

import firebase from 'firebase';
import {firebaseConfig} from './config';

try{
    firebase.initializeApp(firebaseConfig);
}catch (err) {
    // we skip the "already exists" message which is
    // not an actual error when we're hot-reloading
    if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)
    }
}

const AppNavigator = createStackNavigator({
    Intro: { 
        screen: Intro
    },
    Loading: {
        screen: Loading
    },
    Login: { 
        screen: Login
    },
    SignUp1:{
        screen: SignUp1
    },
    SignUp2:{
        screen: SignUp2
    },
    homeScreen1:{
        screen: homeScreen1
    },
    Loading:{
        screen:  Loading
    },
    homeScreen: {
        screen: homeScreen
    },
    profilScreen: {
        screen: profilScreen
    },
    communityScreen: {
        screen: communityScreen
    },
    searchScreen: {
        screen: searchScreen
    },
    addScreen: {
        screen: addScreen
    },
    settingScreen: {
        screen: settingScreen
    },
    settingPrivasi: {
        screen: settingPrivasi
    },
    settingNotif: {
        screen: settingNotif
    },
    settingAbout: {
        screen: settingAbout
    },
    notifScreen: {
        screen: notifScreen
    },
},

    {
        initialRouteName: 'homeScreen',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
                // textAlign: 'center',
                // flex: 1,
            }
        }
    },


);

// const AppNavigator = createStackNavigator(
//     {
//         Intro: IntroScreen,
//         Login: LoginScreen,
//     },
//     {
//         initialRouteName: 'Intro',
//         defaultNavigationOptions: {
//             headerStyle: {
//                 backgroundColor: 'blue',
//             },
//             headerTintColor: '#fff',
//             headerTitleStyle: {
//                 textAlign: 'center',
//                 flex: 1,
//             }
//         }
//     },


// );

export default createAppContainer(AppNavigator);