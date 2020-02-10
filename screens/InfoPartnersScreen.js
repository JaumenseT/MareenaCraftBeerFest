import * as React from 'react';
import { Text, View, StyleSheet,ScrollView } from 'react-native';
import {ButtonGroup,ListItem} from 'react-native-elements';

const list = [
  {
    name: 'Fanta',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  },
  {
    name: 'Cocacola',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
  },
  {
    name: 'Negrita',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
  },
  {
    name: 'Peluquería Paco',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
  },
  {
    name: 'AntonioYMacaco',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
  },
]

export default class InfoPartnersScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor () {
  super()
  this.state = {
    selectedIndex: 1
  }
  this.updateIndex = this.updateIndex.bind(this)
}
updateIndex (selectedIndex) {
  this.setState({selectedIndex})
}
moveToEvent(selectedIndex){
  if(selectedIndex==0){
    this.props.navigation.navigate('InfoHorario');
  }else if(selectedIndex==2){
    this.props.navigation.navigate('InfoEmpresaMareenaBeer');
  }
}
  render() {
    const buttons = ['Horario', 'Partners', 'Nosotros']
    const { selectedIndex } = this.state
    let numero = 1
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
          <ScrollView>
            {
              list.map((l, i) => (
                <ListItem
                  key={i}
                  leftAvatar={{
                    size:'large',
                    source: { uri: l.avatar_url }
                    }}
                  title={<Text style={{fontSize:25}}>
                    {l.name}</Text>}
                  bottomDivider
                />
              ))
            }
          </ScrollView>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});