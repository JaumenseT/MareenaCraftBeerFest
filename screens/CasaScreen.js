import * as React from 'react';
import { Text, View, StyleSheet, FlatList,Image,Button, TouchableOpacity,Alert,ScrollView } from 'react-native';
var list = [];

export default class CassaScreen extends React.Component {

  static navigationOptions = {
    header: null
  };

  constructor(props){
    super(props)

    this.state={
      cervezas:[],
      marcas:[],
      total:[],
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
            graduacio: z.graduacio,
            IBUS: z.IBUS,
            tokens:z.tokens
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
        <Image
            style={styles.imageStyle}
            source={require('../images/mahou-logo.jpg')}>
        </Image>
        <ScrollView>
          <FlatList 
            data={list}
            renderItem={({item})=>(
              <View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("InfoEmpresa",{emp: item})}>
                  <View>
                    <Text style={styles.titleMarca}>{item.marca}</Text> 
                    <FlatList 
                      data={item.cervezas}
                      renderItem={({item})=>(
                        <View>
                          <TouchableOpacity onPress={() => this.props.navigation.navigate("BeerDetails",{beer: item})}>
                            <View style={styles.titlecerveza}>
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
    backgroundColor: "#8cccc3",
    padding: 8,
  },
  titleMarca: {
    backgroundColor:'#eea37c',
    borderBottomWidth:1,
    flex:1,
    fontSize:20,
    marginTop:6,
  },
  titlecerveza:{
    backgroundColor:'white',
    borderBottomWidth:1,
    flex:1
  },
  imageStyle: {
    width: 150,
    height: 150,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
},


});