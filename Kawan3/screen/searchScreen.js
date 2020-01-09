import React,  {Component} from 'react';
import {View, Text, Image, TouchableOpacity, ImageBackground, ScrollView, TextInput} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import 'react-native-gesture-handler';

class searchScreen extends React.Component {
    static navigationOptions= {
        title: 'searchScreen',
        header: null
    }
    render(){
        return(
            <View style={{flex: 1}}>
                <View style={{flex: 0, backgroundColor: '#4FB5D6', height: 273, paddingTop: 26.5}}>
                    <ImageBackground source={require('../src/image/banner3.png')} style={{width: '100%', height: '100%'}}> 
                    <TouchableOpacity>
                        <Image source={require('../src/image/arrowBack.png')} />
                    </TouchableOpacity>
                    <View style={{marginHorizontal: 31}}>
                        <Text style={{fontSize: 38, fontWeight: 'bold', color: 'white'}}>Let's Explore</Text>
                        <Text style={{fontSize: 14, color: 'white'}}>Try to find a friend</Text>
                    </View>
                    <View style={{marginHorizontal: 31, marginTop: 40}}>
                        <TextInput placeholder="Try to find a hobby or friend" style={{height: 41, paddingLeft: 40, paddingRight: 20, borderWidth: 1, borderColor: 'white', backgroundColor: 'white', borderRadius: 50}} />
                        <Image source={require('../src/image/search-icon.png')} style={{position: 'absolute', top: 10, left:10}} />
                    </View>
                    </ImageBackground>
                </View>
                <View style={{flex: 1, backgroundColor: '#EFEEEE'}}>
                    <View style={{alignItems: 'center', width: 300, height: 41, flexDirection: 'row', justifyContent: 'space-around', marginTop: 20, backgroundColor: 'white', borderRadius: 15, marginHorizontal: 29}}>
                        <TouchableOpacity>
                            <Text style={{fontSize: 14, color: '#526EDD', fontWeight: 'bold', marginBottom: 10}}>HOBBY</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{fontSize: 14, color: '#F8B814'}}>FRIENDS</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{fontSize: 14, color: '#49438D'}}>EVENTS</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                 <View style={{backgroundColor: 'white', flexDirection: 'row', height: 54}}>
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <TouchableOpacity onPress={()=> this.props.navigation.navigate('searchScreen')}>
                            <Image source={require('../src/image/Search-Active.png')}  styles={{width: 20, height: 20}}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <TouchableOpacity onPress={()=> this.props.navigation.navigate('communityScreen')}>
                            <Image source={require('../src/image/Group.png')} styles={{width: 20, height: 20}}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginBottom: 40}}>
                        <TouchableOpacity  onPress={()=> this.props.navigation.navigate('addScreen')}>
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

export default searchScreen;