import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import {ToastAndroid} from 'react-native';


export default class RegisterScreen extends Component {

  DB_URL = 'http://localhost:3000';

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      user: "",
      password: "",
    }
  }


  registerUser = () => {
    console.log(this.DB_URL + "/usuarios?_sort=id&_order=desc&_limit=1");
    fetch(this.DB_URL + "/usuarios?_sort=id&_order=desc&_limit=1")
      .then(resp => resp.json())
      .then(data => {
        console.log(data[0].id + 1);
        let dades = {
          id: data[0].id + 1,
          user: this.state.user,
          password: this.state.password,
          admin: false
        };
        console.log(JSON.stringify(dades));
        fetch(this.DB_URL + "/usuarios", {
          method: 'POST',
          body: JSON.stringify(dades),
          headers: {
            'Content-Type': 'application/json; charset=UTF-8'
          }
        })
          .then(resp => {
            ToastAndroid.showWithGravity('Usuario registrado correctamente', ToastAndroid.LONG, ToastAndroid.TOP),
            this.props.navigation.navigate('Login');
          });

      });

  }

  render() {
    return (

      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder={"Name"}
          onChangeText={(name) => this.setState({ name })}
          value={this.state.name}
        />
        <TextInput style={styles.textInput}
          placeholder={"Username"}
          onChangeText={(user) => this.setState({ user })}
          value={this.state.user}
        />

        <TextInput style={styles.textInput}
          placeholder={"Password"}
          secureTextEntry={true}
          onChangeText={(password) => this.setState({ password })}
          value={this.state.password}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={this.registerUser}>

          <Text style={styles.buttonText}>
            Register
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

  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 250,
    margin: 3,
    fontSize: 15

  },
  button: {
    width: 275,
    paddingTop: 8,
    paddingBottom: 8,
    marginTop: 7,
    borderRadius: 5,
    backgroundColor: "#4ec0a5"
  },

  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold'
  }
});