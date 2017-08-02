import React, {Component} from'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Image
   
} from 'react-native';
import { Icon } from 'native-base'
 
export default class DataUrl extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data:''
        }
  }
    onPressButtonGET = () =>{
        this.setState({ isLoading: true });
        fetch("https://reqres.in/api/users/2", {method: "GET"})
        .then((response) => response.json())
        .then((responseData) => {
               alert(
                 JSON.stringify(responseData)
            )
            this.setState({
              isLoading: false,
              data: JSON.stringify(responseData)
            }); 
            
        }) 
        .catch((error) =>{
            console.log(error);
        })
       
    }


    onPressButtonPOST = () => {
         this.setState({ isLoading: true });
        fetch("https://reqres.in/api/users", {method: "POST", body: JSON.stringify("first_name":"Neetu","last_name":"Yadav","job":"Developer")})
        .then((response) => response.json())
        .then((responseData) => {
            alert(
                JSON.stringify(responseData)
            ) 
            this.setState({
              isLoading: false,
              
            }); 
            
        })
        .catch((error) =>{
            console.log(error);

        })
       
    }
    componentDidMount() {
         var self = this;
        setTimeout(function () {
            self.setState({ isLoading: false });
        }, 30);
    }
    render() {
      
        return (
                <View style={styles.container}>
                <TouchableHighlight onPress={this.onPressButtonGET}>
                    <Text>Get</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.onPressButtonPOST}>
                     <Text>Post</Text>
                </TouchableHighlight>
                {this.state.isLoading ? <Image style={{width: 40, height: 40}} source={require('./img/Ajax-loader.gif')}/> : null}  
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


