import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import {ToastAndroid} from 'react-native';

export default class LoginScreen extends Component {

  DB_URL='http://localhost:3000';

  constructor(props) {
    super(props);
    this.state = {
      user: "",
      password: ""
    }
  }

  /*login = () => {
    fetch(this.DB_URL+'/usuaris?userName='+this.state.user+'&contrasenya='+this.state.password)
      .then(resp => resp.json())
      .then(data => {
        if (data.length>0) {
          this.props.navigation.navigate('Home', {user: data[0]});
        } else {
          ToastAndroid.showWithGravity('Usuario o contraseña incorrectos', ToastAndroid.LONG, ToastAndroid.TOP);
        }
      });
  }*/

  /*register = () => {
    this.props.navigation.navigate('Register');
  }*/

  render() {
    return (
      <View style={styles.container}>
          <View style={{flex: 1, alignSelf: 'flex-end', marginRight: 2}}>
            <TouchableOpacity
            style={styles.button_invitado}
            //onPress={this.register}
            >

            <Text style={styles.buttonText_register}>
                Entrar como invitado
            </Text>

            </TouchableOpacity>
           </View>
           <View style={{flex:5, alignContent: 'center', justifyContent: 'center', alignItems: 'center'}}> 
        <Image
            style={styles.imageStyle}
            source={require('../images/mareenabeer.jpg')}>
        </Image>

        <TextInput
            style={styles.textInput}
            placeholder={"User"}
        //onChangeText={(user) => this.setState({user})}
        //value={this.state.user}  
        />  

        <TextInput
            style={styles.textInput}
            placeholder={"Password"}
            secureTextEntry={true} 
        //onChangeText={(password) => this.setState({password})}
        //value={this.state.password}
        />

        <TouchableOpacity
            style={styles.button}
        //onPress={this.login}
        >

        <Text style={styles.buttonText}>
          Entrar
        </Text>

      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button_register}
        //onPress={this.register}
        >

        <Text style={styles.buttonText_register}>
          o regístrate
        </Text>

      </TouchableOpacity> 
      </View>      

      </View>
    );
  }
}

const styles = StyleSheet.create({
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

  button_register: {
    width: 275,
    paddingTop: 8,
    paddingBottom: 8,
    borderRightWidth: 5,
    borderLeftWidth: 5,
    borderRightColor: '#dba470',
    borderLeftColor: '#dba470',
    marginTop: 7,
    borderRadius: 10,
    backgroundColor: "#f6e8cb"   
  },
  
  button_invitado: {
    width: 275,
    paddingTop: 8,
    paddingBottom: 8,
    borderRightWidth: 5,
    borderLeftWidth: 5,
    borderRightColor: '#dba470',
    borderLeftColor: '#dba470',
    marginTop: 7,
    borderRadius: 10,
    backgroundColor: "#f6e8cb",
  },

  buttonText:{
    fontSize: 20,
    textAlign:'center',
    color: 'black',
    fontWeight: 'bold'
  },

  buttonText_register:{
    fontSize: 18,
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
  imageStyle: {
      width: 240,
      height: 240,
      marginBottom: 10,
      alignSelf: 'center'
    }
});