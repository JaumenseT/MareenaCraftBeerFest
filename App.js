import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import 'react-native-gesture-handler';
import LoginScreen from './screens/LoginScreen';
import InfoEmpresaScreen from './screens/InfoEmpresaScreen';

export const Navegador  = createStackNavigator({
  Login: {screen: LoginScreen},
  InfoEmpresa: {screen: InfoEmpresaScreen}
},
{initialRouteName: 'InfoEmpresa'});


const AppContainer = createAppContainer(Navegador);

export default class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}