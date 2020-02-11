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
      id:"",
      idMarc:"",
      nom:"",
      graduacio:"",
      IBUS:"",
      tokens:"",
      nombreMarca:"",
      photo:null,
      isUpload:false,
      productos:[]
    }
  }

  componentDidMount(){
    if(this.props.mode == 2){
      //Al renderizar no se muestran los datos que se pasan por los props
      this.setState({id: this.props.beer.id})
      this.setState({idMarc: this.props.beer.idMarc})
      this.setState({graduacio: this.props.beer.graduacio})
      this.setState({IBUS: this.props.beer.IBUS})
      this.setState({tokens: this.props.beer.tokens})
      this.setState({nom: this.props.beer.nom}) 
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
        var permitir = true;
        if(this.state.nom =="" ||this.state.tokens == "" || this.state.graduacio == "" || this.state.IBUS == "" ){
          permitir = false
          return(alert("INSERTA TODOS LOS DATOS"))
        }
        if(this.props.mode == 1 && permitir == true){
          
          fetch('http://localhost:3000/cervezas', {
            method: 'POST',
            headers: {
              
              'Content-Type': 'application/json',
            },
            body:JSON.stringify({
              id:"",
              idMarca: this.props.idEmpresa,
              nom:this.state.nom,
              graduacio:this.state.graduacio,
              IBUS:this.state.IBUS,
              tokens:this.state.tokens
            })
          })
        }
        else if(this.props.mode == 2 && permitir == true){
          let x={
              id:this.props.beer.id,
              idMarca: this.props.idEmpresa,
              nom:this.state.nom,
              graduacio:this.state.graduacio,
              IBUS:this.state.IBUS,
              tokens:this.state.tokens
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
              Alert.alert("Dades actualitzades correctament {" + x.id + "," + x.nom + "," + x.graduacio+ "}");
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
      console.log("show "+this.state.nom)
      return(
        
        <View  style={styles.alinear}> 
        {this.props.mode == 1?
          <Text style={styles.titulo}>Añadir Producto</Text>:
          <Text style={styles.titulo}>Modificar Producto</Text>
        }
            
                <View style={styles.alinear}>
                  <View style={{flexDirection:"row"}}>
                    <TextInput onChangeText={(text) => this.setState({nom: text})} value={this.state.nom}   placeholder={"Nombre"}  style={styles.textImput} keyboardType={"default"} />
                  </View>
                <View>
                  
                   
                    <View style={{flexDirection:"row"}}>
                    <TextInput onChangeText={(text) => this.setState({graduacio: text})} value={this.state.graduacio}   placeholder={"graduacion"}  style={styles.numericImput} keyboardType={"numeric"}/>
                    <TextInput onChangeText={(text) => this.setState({IBUS: text})} value={this.state.IBUS}   placeholder={"IBUS"}  style={styles.numericImput} keyboardType={"numeric"}/>
                    <TextInput onChangeText={(text) => this.setState({tokens: text})} value={this.state.tokens}   placeholder={"tokens"}  style={styles.numericImput} keyboardType={"numeric"}/>
                    </View>
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
