import * as React from 'react';
import { Text, View, StyleSheet, FlatList,Image,Button, TouchableOpacity,Alert,ScrollView } from 'react-native';
import { ListItem,Icon } from 'react-native-elements';

const list = [
  {
    id:1,
    title: 'AMBAR',
    cervezas: [
      {
        id:1,
        name: 'bianca',
        tipo: 'blanca',
      },
      {
        id:2,
        name: 'negra',
        tipo: 'Polla',
      },
    ],
  },
  {
    id:2,
    title: 'Trips',
    cervezas: [
      {
        id:3,
        name: 'bianca',
        tipo: 'blanca',
      },
      {
        id:4,
        name: 'negra',
        tipo: 'Polla',
      },
    ],
  },
];

export default class CasaScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
        <FlatList
          data={list}
          renderItem={({ item }) => (
            <View style={{flex:1}}>
            <View style={{backgroundColor:'white',borderBottomWidth:1,flexDirection:'row'}}>
            <View style={{flex:1}}>
              <Text style={{alignSelf:'center',fontSize:26,fontWeight:'bold'}}>{item.title}</Text>      
              </View>
              </View>
              <FlatList 
              data={item.cervezas}
              renderItem={({item})=>(
                <View>
                <TouchableOpacity onPress={() => console.log('hola')}>
                <View style={{backgroundColor:'green',borderBottomWidth:1}}>
                <Text >{item.name}</Text>
                <Text>{item.tipo}</Text>
                </View>
                </TouchableOpacity>
                </View>
              )}
              keyExtractor={item => item.name}
              />
            </View>
          )}
          keyExtractor={item => item.id}
        />
        </ScrollView>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});