import * as React from 'react';
import { Text, View, StyleSheet , Dimensions} from 'react-native';
import MapView,{Marker} from 'react-native-maps';



export default class MapScreen extends React.Component {

  setMarkerRef = (ref) => {
  this.marker = ref
}
  render() {
    return (
      <View style={styles.container}>
          <MapView
          style={{flex:1}}
                initialRegion={{
                    latitude: 39.46166,
                    longitude: -0.320556,
                    latitudeDelta: 0.0143,
                    longitudeDelta: 0.0134,
                }}
                //showsUserLocation
                //showsTraffic
                onRegionChangeComplete={() => this.marker.showCallout()}
                >
                  <Marker
                    coordinate={{latitude: 39.46166,
                    longitude: -0.320556}}
                    title='MareenaBeerFestival'
                    description='manolo'
                    ref={this.setMarkerRef}
                  />
            </MapView>
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
