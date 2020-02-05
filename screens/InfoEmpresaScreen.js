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
                <View style={{flex: 3, flexDirection:"row"}}>
                    <View style={{flex: 1}}>
                        <Text style={styles.textStyle}>NombreEmpresa</Text>
                        <Text style={styles.textStyle}>Número de Cervezas</Text>
                    </View>
                    <View style={{flex: 1}}>
                        <Image
                            style={styles.imageStyle}
                            source={require('../images/mahou-logo.jpg')}>
                        </Image>
                    </View>
                </View>
                <View style={{flex: 5}}>
                    <Text style={styles.textStyle}>Aquí iría una Flatlist</Text>
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
        backgroundColor: "#f6e8cb"
    },
    imageStyle: {
        width: 200,
        height: 200,
        margin: 20,
    },
    textStyle: {
        margin: 25,
        fontSize: 20,
        fontWeight: 'bold'
    }
})
