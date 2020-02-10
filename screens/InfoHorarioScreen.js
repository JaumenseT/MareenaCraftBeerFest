import * as React from 'react';
import { Text, View, StyleSheet,Image,Dimensions } from 'react-native';
import {ButtonGroup} from 'react-native-elements';

var rangoHor = Dimensions.get('screen').height;
var rangoVer = Dimensions.get('screen').width;

export default class InfoHorarioScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor () {
  super()
  this.state = {
    selectedIndex: 0
  }
  this.updateIndex = this.updateIndex.bind(this)
}
updateIndex (selectedIndex) {
  this.setState({selectedIndex})
}
moveToEvent(selectedIndex){
  if(selectedIndex==1){
    this.props.navigation.navigate('InfoPartners')
  }else if(selectedIndex==2){
    this.props.navigation.navigate('InfoEmpresaMareenaBeer');
  }
}
  render() {
    const buttons = ['Horario', 'Partners', 'Nosotros']
    const { selectedIndex } = this.state
    let numero = 0
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
          <View style={{flex:0.9}}>
            <Image
          style={{width:rangoVer,height:rangoHor,marginLeft:-5}}
          source={require('../images/horario.jpeg')}
        />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    backgroundColor:'#8cccc3',
  },
});