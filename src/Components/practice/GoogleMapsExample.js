import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  TextInput,
  TouchableHighlight,
  Dimensions,
  Button
} from 'react-native';

import MapView from 'react-native-maps';

const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30,
    flex: 1,
    alignItems: 'center'
  },
});

class MapPage extends Component{

    constructor(props){
        super(props);
        this.state = {
            region:{
                latitude:28.655,
                longitude: 77.244,
            latitudeDelta: 10,
            longitudeDelta: 5
            }
        }
    }

    render() {

        return(
            <View style={styles.container}>
                <MapView 
                    style={ styles.map }
                    mapType={"standard"}
                    region={this.state.region}
                    zoomEnabled={true}
                    scrollEnabled={true}
                    showsScale={true}
                  >
                  <MapView.Marker
                    coordinate={{latitude: 28.655,
                    longitude: 77.244}}
                    title={"New Delhi"}
                    description={"Heart Of India"}
                 />
                  </MapView>
            </View>
            )
      }
    }


module.exports = MapPage;


