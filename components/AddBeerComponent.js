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
      beerName:"",
      beerDescription:"",
      beerType:"",
      Nacionalidad:"",
      filePath: {},
      photo:false,
    };
  }

      Insertar(){
        if(this.state.photo == false){
          this.setState({filePath: '../images/mareenabeer.jpg'})
        }
        var data = new FormData();
        data.append('my_photo', {
          
          uri: this.state.filePath, // your file path string
          name: 'my_photo.jpg',
          type: 'image/jpg'
        })
        fetch('http://localhost:3000/elements', {
            method: 'POST',
            headers: {
              
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              beerName:this.state.beerName,
              beerDescription:this.state.beerDescription,
              beerType:this.state.beerType,
              Nacionalidad:this.state.Nacionalidad,
              img:data,
            })
          })
        }
      

      chooseFile = () => {
        var options = {
          title: 'Select Image',
          customButtons: [
            { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
          ],
          storageOptions: {
            skipBackup: true,
            path: 'images',
          },
        };
        ImagePicker.showImagePicker(options, response => {
          console.log('Response = ', response);
     
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
            alert(response.customButton);
          } else {
            let source = response;
            this.setState({
              filePath: source,
              photo:true
            });
          }
        });
      };

    render(){
      console.log(this.state.photo)
      return(
        
        <View  style={styles.alinear}> 
            <Text style={styles.titulo}>Añadir Producto</Text>
                <View style={styles.alinear}>
                
                <View>
                    <TextInput onChangeText={(beerName) => this.setState({beerName})} value={this.state.beerName}   placeholder={"Pon el nombre de la cerveza"}  style={styles.textImput} keyboardType={"default"}/>
                    <TextInput onChangeText={(beerDescription) => this.setState({beerDescription})} placeholder={"Pon la descripcion de la cerveza"} style={styles.textImput} keyboardType={"default"}/>
                    <TextInput onChangeText={(beerType) => this.setState({beerType})} placeholder={"Pon el tipo de la cerverza"} style={styles.textImput} keyboardType={"default"}/>
                    <TextInput onChangeText={(Nacionalidad) => this.setState({Nacionalidad})} placeholder={"Pon la Nacionalidad"} style={styles.textImput} keyboardType={"default"}/>
                </View>

                <TouchableHighlight style={styles.button}  onPress={this.chooseFile.bind(this)} >
                <Text style={styles.buttonText}>Insertar Foto de perfil</Text>
            </TouchableHighlight>
                {this.state.photo == false?
                    <Image
                      source={
                        require('../images/mareenabeer.jpg')
                      }
                     style={{ width: 150, height: 150, borderWidth:1, borderColor:'black', marginTop:20, marginBottom:10 }}
                    />
                :
                    <Image
                      source={{
                      uri: 'data:image/jpeg;base64,' + this.state.filePath.data,
                      }}
                      style={{ width: 150, height: 150, borderWidth:1, borderColor:'black', marginTop:20, marginBottom:10 }}
                    />
                }

            <TouchableHighlight style={styles.buttonConf} /*onPress={this.Insertar}*/>
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