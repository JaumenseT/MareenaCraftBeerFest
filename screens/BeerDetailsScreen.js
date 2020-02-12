import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image,ScrollView } from 'react-native';
import {ToastAndroid} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import {ButtonGroup,ListItem} from 'react-native-elements';

export default class BeerDetailsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            marcainfo:[],
            cerveza:[],
        }
        
    }

    componentDidMount(){
      
        let x = this.props.navigation.getParam('beer')
        this.setState({cerveza: x})

        fetch("http://localhost:3000/marcas/" +  x.idMarca)
        .then((response)=> response.json())
        .then((json) => { console.log(json),this.setState({marcainfo: json})})
        .catch((error)=> console.log(error))
       

    }

    borrar = () =>{
        console.log(this.state.cerveza.id)
        fetch('http://localhost:3000/cervezas/' + this.state.cerveza.id, {
            method: 'DELETE',
            })
            .then(res => res.text()) 
            .then(res => console.log(res))
            this.props.navigation.navigate("InfoEmpresa",{beer: this.state.cerveza.idMarca})
    }


 
    render() {
        console.log(this.state.marcainfo.marca)
        
        return(
            <View style={styles.container}>
                <View style={{flex: 0.4, flexDirection:"row"}}>
                    <View style={{flex: 0.5}}>
                        <Text style={styles.textStyle}>{this.state.cerveza.nom}</Text>
                    </View>
                    <View style={{flex: 0.5}}>
                        <Image
                            style={styles.imageStyle}
                            source={require('../images/mahou-logo.jpg')}>
                        </Image>
                    </View>
                </View>
                <View style={{flex: 0.5, width:400,height:300}}>
                        <ListItem
                                onPress={() => this.props.navigation.navigate("InfoEmpresa",{emp: this.state.marcainfo})}
                                title={<Text style={styles.textStyle}>Marca:{this.state.marcainfo.marca}</Text>}
                                bottomDivider
                        />
                        <ListItem
                                title={<Text style={styles.textStyle}>Graduacion: {this.state.cerveza.graduacio}</Text>}
                                bottomDivider
                        />
                        <ListItem
                                title={<Text style={styles.textStyle}>IBUS: {this.state.cerveza.IBUS}</Text>}
                                bottomDivider
                        />
                        <ListItem
                                title={<Text style={styles.textStyle}>tokens: {this.state.cerveza.tokens}</Text>}
                                bottomDivider
                        />
                        
                        
                        
                        
                    </View>

                    {global.isAdmin?
                        <View style={{flex: 0.1, flexDirection:"row"}}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress = {() => this.props.navigation.navigate("ModifyBeer",{beer: this.state.cerveza})}
                        >

                            <Text style={styles.buttonText}>
                                Modificar
                            </Text>

                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={this.borrar}
                        >

                            <Text style={styles.buttonText}>
                                Borrar
                            </Text>

        </TouchableOpacity>
                    </View>
                    :
                    null
                    }
                    

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
        margin: 2,
        fontSize: 20,
        fontWeight: 'bold'
    },
    cuadroLista:{
        borderColor: "black",
        borderWidth:4,
        marginBottom:10,
        backgroundColor:"white",
        marginRight:15,
        marginLeft:15, 
        flex:1
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
      buttonText: {
        fontSize: 20,
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold'
      },
})
