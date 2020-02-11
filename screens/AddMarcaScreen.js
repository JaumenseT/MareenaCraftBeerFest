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
  TouchableHighlight,
  TouchableOpacity,

  
  
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { exportDefaultSpecifier, tsImportEqualsDeclaration } from '@babel/types';

import 'react-native-gesture-handler';
import { block } from 'react-native-reanimated';
import AddBeerComponent from '../components/AddBeerComponent'

export default class AddMarcaScreen extends Component{
  constructor(props){
    super(props);
    this.state = {
        nom:"",
        isUpload:false,
    }
  }

  createFormData = (photo, body) => {
    const data = new FormData();
  
    data.append("photo", {
      name: photo.fileName,
      type: photo.type,
      uri:
        Platform.OS === "android" ? photo.uri : photo.uri.replace("file://", "")
    });
  
    Object.keys(body).forEach(key => {
      data.append(key, body[key]);
    });
  
    return data;
  };

  handleChoosePhoto = () => {
    const options = {
      noData: true,
    }
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        this.setState({ photo: response, isUpload:true  })
      }
    })
  }

  insertar = () => {
    fetch('http://localhost:3000/marcas', {
        method: 'POST',
        headers: {
          
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({
          id:"",
          marca:this.state.nom
        })
      })
     this.setState({isUpload: false, nom: ""})
  }

    render(){
      return(
        <View  style={styles.alinear}> 

          <Text style={styles.titulo}>Añadir Marca</Text>

        
            
                <View style={styles.alinear}>
                  <View style={{flexDirection:"row"}}>
                    <TextInput onChangeText={(text) => this.setState({nom: text})} value={this.state.nom}   placeholder={"Nombre"}  style={styles.textImput} keyboardType={"default"} />
                  </View>
                <View></View>

                <TouchableHighlight style={styles.button}  onPress={this.handleChoosePhoto} >
                <Text style={styles.buttonText}>Insertar Foto de perfil de la marca</Text>
            </TouchableHighlight>
                {this.state.isUpload == false?
                    <Image
                      source={
                        require('../images/mareenabeer.jpg')
                      }
                     style={{ width: 300, height: 300, borderWidth:1, borderColor:'black', marginTop:20, marginBottom:10 }}
                    />
                :
                    <Image
                      source={{
                      uri: this.state.photo.uri
                      }}
                      style={{ width: 300, height: 300, borderWidth:1, borderColor:'black', marginTop:20, marginBottom:10 }}
                    />
                }

            <TouchableHighlight style={styles.buttonConf} onPress={this.insertar}>
                <Text style={styles.buttonText}>Confirmar</Text>
            </TouchableHighlight>
            
                </View>
        </View>
  
  
  
  
      )
    }
  
  }
  
  const styles = StyleSheet.create({
    button: {
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'black',
      backgroundColor:"#8cccc3",
      width:252,
      height:40,
      marginTop:10,
      alignItems:'center',
      alignContent:'center',
      justifyContent:'center',
      
      
      
    },

    buttonConf: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor:"#BDD12F",
        width:252,
        height:40,
        marginTop:10,
        alignItems:'center',
        alignContent:'center',
        justifyContent:'center',
        
        
        
      },
    buttonText:{
        fontSize:15,
        fontWeight:'bold',
        color:'black',
        textAlign:'center',
       
        
    },
    titulo:{
      fontSize: 25,
      fontWeight:"bold",
      color:"black",
      margin:10,
    },
    textImput: {
      fontSize: 17,
      fontWeight: 'bold',
      borderColor:"black",
      borderWidth:2,
      margin:5,
      backgroundColor:'white',
      borderRadius: 10,
      width:300,

    },
    numericImput:{
      fontSize: 17,
      fontWeight: 'bold',
      borderColor:"black",
      borderWidth:2,
      margin:5,
      width: 93,
      backgroundColor:'white',
      borderRadius: 10,
    },
    alinear:{
      alignItems: "center",
      textAlign:'center',
      flex:1
    
      
    },
    activeTitle: {
      color: 'red',
    },
    img: {
      
        }
  });
