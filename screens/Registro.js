import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Alert } from 'react-native';
import {ToastAndroid} from 'react-native';
import { SocialIcon } from 'react-native-elements';

export default class Registro extends Component {

/*
  registraUsuario = () => {
          fetch('http://localhost:3000', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: this.state.email,
      contrasenya: this.state.contrasenya,
    }),
  });

Alert.alert("Usuario registrado correctamente")
  }

guardarEmail=(email)=>{
  this.setState({email: email})
  }

guardarContrasenya=(pass)=>{
this.setState({contrasenya: pass})
}

*/

 // DB_URL='http://localhost:3000';

constructor() {
    super();

    this.state = {
      correo: "",
      password: ""
    }
  }


  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>

      
        <Image
            style={styles.imageStyle}
            source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTj437oAk7NxkxrUESQMtw9jsHD-k82UO4tJptOqsBzRXwuHoWo'}}>
        </Image>
      
        <TextInput
            style={styles.textInput}
            placeholder={"Usuario"}  
        />  

        <TextInput
            style={styles.textInput}
            placeholder={"Contraseña"}
        />

        <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>


        <View style={{flexDirection:"row", marginTop:10}}>

          <SocialIcon style={styles.iconofacebook}
          type='facebook' 
          onPress={()=> Alert.alert('hola')}
          />

          <SocialIcon style={styles.iconogoogle}
          type='google' 
          />
        </View>



     

      </View>
    );
  }
}

const styles = StyleSheet.create({
  title:{
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 5
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#8cccc3"
  },

  button: {
    width: 275,
    paddingTop: 8,
    paddingBottom: 8,
    marginTop: 7,
    borderRadius: 10,
    backgroundColor: "#eea37c",
    borderRightWidth: 5,
    borderLeftWidth: 5,
    borderRightColor: '#b56a24',
    borderLeftColor: '#b56a24',  
  },


  buttonText:{
    fontSize: 20,
    textAlign:'center',
    color: 'black',
    fontWeight: 'bold'
  }, 

  textInput: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    width: 250,
    fontSize: 15,
    color: 'black',
    backgroundColor: 'white',
    borderRadius: 5,
    margin: 5
    
  },


  /*
  imageStyle: {
      width: 240,
      height: 240,
      marginBottom: 10
    }
    */
});