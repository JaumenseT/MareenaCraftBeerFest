import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import 'react-native-gesture-handler';
import LoginScreen from './screens/LoginScreen';
import InfoEmpresaScreen from './screens/InfoEmpresaScreen';
import AddProductScreen from './screens/AddProductScreen';
import HomeScreen from './screens/HomeScreen';
import BeerDetailsScreen from './screens/BeerDetailsScreen';
import InfoEmpresaMareenaBeerScreen from './screens/InfoEmpresaMareenaBeerScreen';
import InfoHorarioScreen from './screens/InfoHorarioScreen';
import InfoPartnersScreen from './screens/InfoPartnersScreen';
//import MapScreen from './screens/MapScreen';
//import RegistroScreen from './screens/RegistroScreen';

export const Navegador  = createStackNavigator({
  Login: {screen: LoginScreen},
  InfoEmpresa: {screen: InfoEmpresaScreen},
  AddProduct: {screen: AddProductScreen},
  Home: {screen: HomeScreen},
  BeerDetails: {screen: BeerDetailsScreen},
  InfoEmpresaMareenaBeer: {screen: InfoEmpresaMareenaBeerScreen},
  InfoHorario: {screen: InfoHorarioScreen},
  InfoPartners: {screen: InfoPartnersScreen},
  //Map: {screen: MapScreen},

  //Registro: {screen: RegistroScreen}
},
{initialRouteName: 'InfoHorario'});


const AppContainer = createAppContainer(Navegador);

export default class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}