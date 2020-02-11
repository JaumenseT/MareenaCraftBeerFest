import * as React from 'react';
import { Text, View, StyleSheet, FlatList,Image,Button, TouchableOpacity,Alert,ScrollView } from 'react-native';
import { ListItem,Icon } from 'react-native-elements';

var list = [];

export default class CassaScreen extends React.Component {
  constructor(props){
    super(props)

    this.state={
      cervezas:[],
      marcas:[],
      total:[],
    }
  }

  text = (id,l) => {
    if(id == l.idMarca){
      return <Text>{l.nom}</Text> 
    }
  
   
  }

  componentDidMount(){
    fetch("http://localhost:3000/marcas")
    .then((response)=> response.json())
    .then((json) => { console.log(json),this.setState({marcas: json})})
    .catch((error)=> console.log(error))

  fetch("http://localhost:3000/cervezas")
    .then((response)=> response.json())
    .then((json) => { console.log(json),this.setState({cervezas: json})})
    .catch((error)=> console.log(error))

    this.state.marcas.map((l,i)=>{
    /*  let cer = []
      this.state.cervezas.map((z,x)=>{
        if(z.idMarca == l.id){
          cer.push(z);
        }

      })*/
      list.push({
        id:l.id,
        marca: l.marca,
        cervezas:"h",

      })
    
      console.log(list)
    })
  }

  listar = () => {
    list = []
    this.state.marcas.map((l,i)=>{

      let cer = []
      this.state.cervezas.map((z,x)=>{
        if(z.idMarca == l.id){
          cer.push({
            id:z.id,
            idMarca:z.idMarca,
            nom:z.nom,
          });
        }

      })
      list.push({
        id:l.id,
        marca: l.marca,
        cervezas:cer,

      })
    
 
    })
  }

  render() {
    let id;
    this.listar()
    return (
      <View style={styles.container}>
      <ScrollView>

    
              <FlatList 
                data={list}
                renderItem={({item})=>(
                  <View>
                      <TouchableOpacity onPress={() => console.log('hola')}>
                        <View style={{backgroundColor:'white',borderBottomWidth:1,flex:1}}>
                          
                          <Text>{item.marca}</Text> 
                          <FlatList 
                            data={item.cervezas}
                            renderItem={({item})=>(
                              <View>
                                <TouchableOpacity onPress={() => console.log('hola')}>
                              <View style={{backgroundColor:'green',borderBottomWidth:1,flex:1}}>
                          
                                <Text>{item.nom}</Text> 
                          

                            
                          </View>
                      </TouchableOpacity>
                  </View>
              )}
         
              />

                            
                          </View>
                      </TouchableOpacity>
                  </View>
              )}
         
              />
        </ScrollView>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },


});