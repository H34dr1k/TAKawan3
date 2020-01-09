import React from  'react';
import { StyleSheet, Text, View, Image, requireNativeComponent } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

export default class intro extends React.Component {

    async componentDidMount(){
        await Font.loadAsync({
            roboto: require("./assets/font/roboto/Roboto-Regular.ttf"),
        }); 
    }

    render(){
        return(
            <View style={styles.container}>
                <Image styles={styles.img1} source={require('./src/img/header.png')} />
                <Text styles={styles.judul}>Welcome To Our App</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: "center",
    },
    img1: {
        width: wp('100%')
    },
    judul: {
        fontFamily: "roboto",
    }

});
