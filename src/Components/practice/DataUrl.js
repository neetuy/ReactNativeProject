import React, {Component} from'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    AlertIOS,
} from 'react-native';
export default class DataUrl extends Component {

    onPressButtonGET() {
        fetch("https://reqres.in/api/users/2", {method: "GET"})
        .then((response) => response.json())
        .then((responseData) => {
            alert(
                 JSON.stringify(responseData)
            )
        })
        .catch((error) =>{
            console.log(error);

        })
       
    }
    onPressButtonPOST() {
        fetch("https://reqres.in/api/users", {method: "POST", body: JSON.stringify("first_name":"Neetu","last_name":"Yadav","job":"Developer")})
        .then((response) => response.json())
        .then((responseData) => {
            alert(
                JSON.stringify(responseData)
            )
        })
        .catch((error) =>{
            console.log(error);

        })
       
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={this.onPressButtonGET}>
                    <Text>GET</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.onPressButtonPOST}>
                    <Text>POST</Text>
                </TouchableHighlight>   
            </View>

        );
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin:20,
        backgroundColor: '#F5FCFF',
    },
   
});


