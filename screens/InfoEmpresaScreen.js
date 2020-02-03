import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import {ToastAndroid} from 'react-native';

export default class InfoEmpresaScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={{flex: 2}}>
                    <Text>NombreEmpresa</Text>
                    <Text>Número de Cervezas</Text>
                    <Image
                        style={styles.imageStyle}
                        source={require('../images/mahou-logo.jpg')}>
                    </Image>
                </View>
                <View style={{flex: 5}}>
                    
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
    imageStyle: {
        width: 240,
        height: 240,
        marginBottom: 10
    }
})
