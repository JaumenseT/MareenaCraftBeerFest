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


export default class AddBeerComponent extends Component{
  constructor(props) {
    super(props);
    this.state = {
      nom:"",
      desc:"",
      photo:null,
      isUpload:false,
  
    }
  }

  componentDidMount(){
    if(this.props.beer != ""){
      this.setState({id: this.props.beer.id})
     this.setState({nom: this.props.beer.nombre})
     this.setState({desc: this.props.beer.descripcion})
 
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

      insertar = () => {
        if(this.props.beer == ""){
          var data = new FormData();
          data.append('photo', {
            
            uri: this.state.photo.uri, // your file path string
            name: this.state.photo.fileName,
            type: this.state.photo.type,
          })
          fetch('http://localhost:3000/cervezas', {
            method: 'POST',
            headers: {
              
              'Content-Type': 'application/json',
            },
            body:JSON.stringify({
              id:"",
              nombre:this.state.nom,
              descripcion:this.state.desc,
              photo:this.state.photo
            })
          })
        }
        else{
          let x={
            id:this.state.id,
            nombre:this.state.nom,
            descripcion:this.state.desc
          }
          fetch('http://localhost:3000/cervezas/'+ x.id, {
            method: 'PUT',
            body: JSON.stringify(x),
            headers: {
              'Content-Type': 'application/json; charset=UTF-8'
            }
          })
            .then((resposta) => {
              if (resposta.ok) {
                return resposta.json();
              } else {
                console.log("Error fent el PUT")
              }
            })
            .then(respostaJson => {
              console.log(respostaJson);
              Alert.alert("Dades actualitzades correctament {" + x.id + "," + x.nombre + "," + x.descripcion+ "}");
            })
            .catch(error => {
              console.log("Error de xarxa: " + error);
            })
        }
       
      }
          
        
        
        
      

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

    render(){
    
      return(
        
        <View  style={styles.alinear}> 
            <Text style={styles.titulo}>Añadir Producto</Text>
                <View style={styles.alinear}>
                
                <View>
                    <TextInput onChangeText={(text) => this.setState({nom: text})} value={this.state.nom}   placeholder={"Pon el nombre de la cerveza"}  style={styles.textImput} keyboardType={"default"}/>
                    <TextInput onChangeText={(text) => this.setState({desc: text})} value={this.state.desc} placeholder={"Pon la descripcion de la cerveza"} style={styles.textImput} keyboardType={"default"}/>
                </View>

                <TouchableHighlight style={styles.button}  onPress={this.handleChoosePhoto} >
                <Text style={styles.buttonText}>Insertar Foto de perfil</Text>
            </TouchableHighlight>
                {this.state.isUpload == false?
                    <Image
                      source={
                        require('../images/mareenabeer.jpg')
                      }
                     style={{ width: 150, height: 150, borderWidth:1, borderColor:'black', marginTop:20, marginBottom:10 }}
                    />
                :
                    <Image
                      source={{
                      uri: this.state.photo.uri
                      }}
                      style={{ width: 150, height: 150, borderWidth:1, borderColor:'black', marginTop:20, marginBottom:10 }}
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
      color:"white",
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