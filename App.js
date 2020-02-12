import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
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
import RegistroScreen from './screens/RegistroScreen';
import CasaScreen from './screens/CasaScreen';
import ModifyBeerScreen from './screens/ModifyBeerscreen'
//import MapScreen from './screens/MapScreen';
//import RegistroScreen from './screens/RegistroScreen';

const LoginScreens = createStackNavigator(
  {
    Login: LoginScreen,
    Registro: RegistroScreen,
  },
  {
    initialRouteName: "Login"
  }
);

const infoScreens= createStackNavigator(
  {
    InfoHorario: InfoHorarioScreen,
    InfoPartners: InfoPartnersScreen,
    InfoEmpresaMareenaBeer: InfoEmpresaMareenaBeerScreen,
  },
  {
    initialRouteName: "InfoHorario"
  }
);
const HomeMovementScreen= createStackNavigator(
  {
    Home: CasaScreen,
    BeerDetails: BeerDetailsScreen,
    InfoEmpresa:InfoEmpresaScreen,
  },
  {
    initialRouteName: "Home"
  }
);
/*const mapScreens= createStackNavigator(
{

}
);*/
const CervezerosScreens= createStackNavigator(
  {
    ModifyBeer: ModifyBeerScreen
  },
);
const HomeBottomNavigator = createBottomTabNavigator(
  {
    HomeMovementScreen,
    infoScreens,
    CervezerosScreens,
    LoginScreens,
  },
  {
      tabBarOptions: {
        showLabel: true,
        style: {
          backgroundColor: "black"
        }
      },
  }
);
/*const CervecerosBottomNavigator= createBottomTabNavigator(
  {

  },
);*/

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
  Registro: {screen: RegistroScreen}

},
{initialRouteName: 'InfoHorario',
headerMode: 'none'
})


const AppContainer = createAppContainer(HomeBottomNavigator);

export default class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}