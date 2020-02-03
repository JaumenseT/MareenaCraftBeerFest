import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
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
          Login
        </Text>

      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button_register}
        //onPress={this.register}
        >

        <Text style={styles.buttonText_register}>
          ...or register
        </Text>

      </TouchableOpacity>      

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    width: 275,
    paddingTop: 8,
    paddingBottom: 8,
    marginTop: 7,
    borderRadius: 5,
    backgroundColor: "#4ec0a5"   
  },

  button_register: {
    width: 275,
    paddingTop: 8,
    paddingBottom: 8,
    marginTop: 7,
    borderRadius: 5,
    backgroundColor: "#4e4ec0"   
  },  

  buttonText:{
    fontSize: 20,
    textAlign:'center',
    color: '#FFFFFF',
    fontWeight: 'bold'
  },

  buttonText_register:{
    fontSize: 18,
    textAlign:'center',
    color: '#FFFFFF',
    fontWeight: 'bold'
  },  

  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 250,
    margin: 3,
    fontSize: 15

  },
});