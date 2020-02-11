import * as React from 'react';
import { Text, View, StyleSheet,ScrollView } from 'react-native';
import {ButtonGroup, ListItem} from 'react-native-elements';

const list = [
  {
    name: 'San Miguel',
    avatar_url: require('../images/san-miguel.jpg'),
  },
  {
    name: 'Alhambra',
    avatar_url: require('../images/alhambra.png'),
  },
  {
    name: 'Heineken',
    avatar_url: require('../images/heineken-logo.jpg'),
  },
  {
    name: 'Mahou',
    avatar_url: require('../images/mahou-logo.jpg'),
  },
  {
    name: 'Desperados',
    avatar_url: require('../images/desperados.jpg'),
  }
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
                    source: l.avatar_url
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
    backgroundColor: '#8cccc3',
    padding: 8,
  },
});