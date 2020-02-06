import * as React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';
import Constants from 'expo-constants';
import {ButtonGroup} from 'react-native-elements';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import InfoPartnersScreen from './InfoPartnersScreen';
import InfoHorarioScreen from './InfoHorarioScreen';


export default class InfoEmpresaMareenaBeerScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor () {
  super()
  this.state = {
    selectedIndex: 2
  }
  this.updateIndex = this.updateIndex.bind(this)
}
updateIndex (selectedIndex) {
  this.setState({selectedIndex})
}
moveToEvent(selectedIndex){
  if(selectedIndex==0){
    this.props.navigation.navigate('InfoEvent')
  }else if(selectedIndex==1){
    this.props.navigation.navigate('InfoPart')
  }
}
  render() {
    const buttons = ['Horario', 'Partners', 'Nosotros']
    const { selectedIndex } = this.state
    let numero = 2
    return (
      <View style={styles.container}>
        <View style={{flex:0.1,marginRight:-20,marginLeft:-20}}>
          <ButtonGroup
          selectedIndex={numero}
          onPress={(item) => {
            console.log(item)
            this.updateIndex(item)
            this.moveToEvent(item)
          }}
          buttons={buttons}
          />
          </View>
          <View style={{flex:0.9,alignSelf:'center',}}>
            <Image
              style={{width: 120, height: 120, marginTop: 50,alignSelf:'center'}}
              source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
            />
            <Text style={{fontSize:30, marginTop: 30,fontWeight: 'bold'}}>Marina Craft Beer</Text>

          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});