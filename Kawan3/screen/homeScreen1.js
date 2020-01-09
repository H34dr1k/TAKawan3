import React from 'react';

import { StyleSheet, SafeAreaView, ScrollView, StatusBar, StatusBarStyle, Platform, View, Button, Image, ImageBackground, ActivityIndicator, TouchableOpacity, TextInput, ToastAndroid } from 'react-native';

import 'react-native-gesture-handler';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import Text from '../components/customText.js';
import { AppFontLoader } from '../components/AppFontLoader.js';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { Directions } from 'react-native-gesture-handler';

import normalize from 'react-native-normalize';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

class homeScreen1 extends React.Component {
    render(){
        return(
            <AppFontLoader>
                <SafeAreaView style={s.container}>
                    <View>
                        <Text style={{fontSize:hp('4%')}}>New Screen</Text>
                    </View>
                </SafeAreaView>
            </AppFontLoader>
        );
    }
}

export default homeScreen1;

const s =StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }


});