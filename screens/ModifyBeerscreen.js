import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
  Alert,
  FlatList,
  TextInput,
  Image,

  TouchableOpacity,

  
  
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { exportDefaultSpecifier, tsImportEqualsDeclaration } from '@babel/types';

import 'react-native-gesture-handler';
import { block } from 'react-native-reanimated';
import AddBeerComponent from '../components/AddBeerComponent'

export default class ModifyBeerScreen extends Component{
constructor(props){
    super(props)
    this.state={
        beers:[]
    }
}  

componentDidMount(){
    let x = this.props.navigation.getParam('beer')
    this.setState({beers: x}) 
    
}

    render(){
      return(
        <View style={styles.container}> 
          <AddBeerComponent idEmpresa={this.state.beers.idMarca} mode={2} beer={this.state.beers}/>
        </View>
  
  
      )
    }
  
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#DBA470',
      flex:1,
      alignContent:'center',
      alignItems:'center',
    
      
    },

  });
