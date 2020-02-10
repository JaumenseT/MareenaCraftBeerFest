import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, Alert } from 'react-native';
import {ToastAndroid} from 'react-native';

export class Producto extends Component {
    DB_URL='http://localhost:3000';

    constructor(props) {
        super(props);
        this.state = {
            datos: props.datos,
        };
    }

    cambiaProducto = () => {
        this.setState({datos: this.props.datos});
        this.props.refrescaProductos();
    }

    modificar = () => {  
        this.props.navigator.navigate("ModifyProduct", 
            {datos: this.props.datos, 
            cambiaProducto: this.cambiaProducto
        });
    }

    leerMarca = () => {
        navigate('Home', {name: this.state.idMarca});
    }

    borrar = () => {
        Alert.alert(
            'Borrado de producto',
            '¿Seguro que quiere eliminar este producto?',
            [
                {
                    text: 'NO',
                },
                {
                    text: 'SÍ',
                    onPress: () => {
                        ToastAndroid.showWithGravity('Borrado producto '+this.state.datos.id, ToastAndroid.LONG, ToastAndroid.TOP);
                        fetch(this.DB_URL + "/cerveza/"+this.state.datos.id, {
                          method: 'DELETE',
                          headers: {
                            'Content-Type': 'application/json; charset=UTF-8'
                          }
                        }).then(resp => {
                            this.props.refrescaProductos();
                        });
                    }
                },
            ]
        );
        
      }    

    render() {
        return (
            <View style={styles.item}>
                <View style={styles.datos}>
                    <Text>Nombre: {this.state.datos.nom}</Text>
                    <Separator />
                    <Text>Graduación: {this.state.datos.graduacio}</Text>
                    <Separator />
                    <Text>IBUS: {this.state.datos.IBUS}</Text>
                    <Separator />
                    <Text>Tokens: {this.state.datos.tokens}</Text>
                </View>
                <View style={styles.botonera}>
                    <Button title="Modificar" onPress={this.modificar}/>
                    <Separator />
                    <Button title="Borrar" color="#F44336" onPress={this.borrar}/>
                    <Separator />
                    <Button title="Marca" color="#F64546" onPress={this.leerMarca}/>


                   
                </View>
            </View>
        );
    }
}

function Separator() {
    return <View style={styles.separator} />;
}

const styles = StyleSheet.create ({
    item: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#737373',
        padding: 8,
        marginVertical: 6,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "stretch",
        alignSelf: "stretch"
    },
    datos: {
        flexShrink: 1,
        justifyContent: "center"
    },
    botonera: {
        alignContent: "flex-end",
        justifyContent: "center"
    },
    separator: {
        marginVertical: 4,
    },
});