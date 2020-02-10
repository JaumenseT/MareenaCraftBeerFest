import React, { Component } from 'react';
 import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
 import { FlatList } from 'react-native-gesture-handler';
 import { Producto } from '../components/producto';
 import { DrawerActions } from 'react-navigation';
 
 export default class MarcaScreen extends Component {
   static navigationOptions = {
     title: 'Inicio',
   };
 
   DB_URL= 'http://localhost:3000';
 
   constructor(props) {
     super(props);
     this.state = {
       productos: [],
     };
     this.getProductos();
     {JSON.stringify(navigation.getParam('idMarcas'))}
   }
 
   getProductos = () => {
     fetch(this.DB_URL+'/marca?_sort=idMarcas')
       .then(resp => resp.json())
       .then(data => {       
         this.setState({productos: data});
     });
   }
   goAdd = () => {
     this.props.navigation.navigate('AddProductScreen', {refrescaProductos: this.getProductos});
     
   }
 
     render() {
         return (
           <View style={styles.container}>
             <Text style={styles.tituloBienvenido} numberOfLines={1}>
               Bienvenido
             </Text>
             <FlatList style={styles.listaProductos}
               data={this.state.productos}
               renderItem={(d) => <Producto datos={d.item} 
                                           refrescaProductos={this.getProductos}
                                           navigator={this.props.navigation}
                                   />}
               keyExtractor={(d) => d.id.toString() } 
             />
             <TouchableOpacity
               style={styles.button}
               onPress={this.goAdd}
             >
                 
               <Text style={styles.buttonText}>
               Insertar producto
               </Text>
             </TouchableOpacity>
           </View>
         );
       }
 }
 
 const styles = StyleSheet.create ({
   container: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
   },
   buttonText:{
     fontSize: 20,
     textAlign:'center',
     color: '#FFFFFF',
     fontWeight: 'bold'
   },
   button: {
     width: 275,
     paddingTop: 8,
     paddingBottom: 8,
     margin: 3,
     borderRadius: 5,
     backgroundColor: "#4ec0a5"   
   },
   tituloBienvenido: {
     fontSize: 26,
     fontWeight: "bold"
   },
   listaProductos: {
     alignSelf: "stretch",
     paddingHorizontal:12,
     marginVertical: 8
   }
 });