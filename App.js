import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import 'react-native-gesture-handler';
import LoginScreen from './screens/LoginScreen';

export const Navegador  = createStackNavigator({
  Login: {screen: LoginScreen}
},
{initialRouteName: 'Login'});


const AppContainer = createAppContainer(Navegador);

export default class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}