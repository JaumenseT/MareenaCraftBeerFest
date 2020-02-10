import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image,ScrollView } from 'react-native';
import {ToastAndroid} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import {ButtonGroup,ListItem} from 'react-native-elements';

export default class InfoEmpresaScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datosEmpresa:[],
            productos:[],
        }
    }

    componentDidMount(){
        let x = this.props.navigation.getParam('beer')
        this.setState({cerveza: x})

         fetch("http://localhost:3000/marcas/2")
            .then((response)=> response.json())
            .then((json) => { console.log(json),this.setState({datosEmpresa: json})})
            .catch((error)=> console.log(error))

        fetch("http://localhost:3000/cervezas?idMarca=2")
            .then((response)=> response.json())
            .then((json) => { console.log(json),this.setState({productos: json})})
            .catch((error)=> console.log(error))


    }


 
    render() {
     
      
        return(
            <View style={styles.container}>
                <View style={{flex: 0.4, flexDirection:"row"}}>
                    <View style={{flex: 0.5}}>
                        <Text style={styles.textStyle}>{this.state.datosEmpresa.marca}</Text>
                        <Text style={styles.textStyle}>{this.state.productos.length}</Text>
                    </View>
                    <View style={{flex: 0.5}}>
                        <Image
                            style={styles.imageStyle}
                            source={require('../images/mahou-logo.jpg')}>
                        </Image>
                    </View>
                </View>
                <View style={{flex: 0.6,width:400,height:400}}>
                <ScrollView>
            {
              
              this.state.productos.map((l, i) => (
                <ListItem
                  onPress={() => this.props.navigation.navigate("BeerDetails",{beer: l})}
                  key={i}
                  title={<Text style={{fontSize:25}}>
                    {l.nom}</Text>}
                  bottomDivider
                />
              ))
            }
            
            <TouchableOpacity
                style={styles.button}
                onPress={() => this.props.navigation.navigate("AddProduct",{data: this.state.datosEmpresa.id})}
            >

          <Text style={styles.buttonText}>
            Añadir
        </Text>

        </TouchableOpacity>
          </ScrollView>
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
})
