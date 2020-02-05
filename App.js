import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import 'react-native-gesture-handler';
import LoginScreen from './screens/LoginScreen';
import InfoEmpresaScreen from './screens/InfoEmpresaScreen';
import AddProductScreen from './screens/AddProductScreen';
import HomeScreen from './screens/HomeScreen';
import RegistroScreen from './screens/RegistroScreen';

export const Navegador  = createStackNavigator({
  Login: {screen: LoginScreen},
  InfoEmpresa: {screen: InfoEmpresaScreen},
  AddProduct: {screen: AddProductScreen},
  Home: {screen: HomeScreen},
  Registro: {screen: RegistroScreen}
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