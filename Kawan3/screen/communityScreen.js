import React,  {Component} from 'react';
import {View, Text, Image, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import 'react-native-gesture-handler';

class communityScreen extends React.Component {
    static navigationOptions= {
        title: 'communitylScreen',
        header: null
    }
    render(){
        return(
            <View style={{flex: 1}}>
               <View style={{flex: 1}}></View>
                <View style={{backgroundColor: 'white', flexDirection: 'row', height: 54}}>
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <TouchableOpacity onPress={()=> this.props.navigation.navigate('searchScreen')}>
                            <Image source={require('../src/image/Search.png')}  styles={{width: 20, height: 20}}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <TouchableOpacity onPress={()=> this.props.navigation.navigate('communityScreen')}>
                            <Image source={require('../src/image/Group-Active.png')} styles={{width: 20, height: 20}}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginBottom: 40}}>
                        <TouchableOpacity onPress={()=> this.props.navigation.navigate('addScreen')}>
                            <Image source={require('../src/image/Add.png')} styles={{width: 20, height: 20}}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <TouchableOpacity onPress={()=> this.props.navigation.navigate('homeScreen')}>
                            <Image source={require('../src/image/Home.png')} styles={{width: 20, height: 20}}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <TouchableOpacity  onPress={()=> this.props.navigation.navigate('profilScreen')}>
                            <Image source={require('../src/image/User.png')} styles={{width: 20, height: 20}}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

export default communityScreen;