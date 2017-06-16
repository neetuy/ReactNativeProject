import {Container, Header, Content, Footer, Title} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import React, {Component} from "react";
import {StyleSheet, TouchableOpacity, Text,View} from 'react-native';
import { Actions } from 'react-native-router-flux';
import ListViewDemo from '../listview/ListViewDemo';


  class HomePage extends Component{
  	constructor() {
      super()
    }
    renderView(props) {    	
  		return 
        <View>
         <Text>hello</Text>
        </View>
		}

		_handlePress(){
			showSecond = this.state.showSecond;
    return this.setState(showSecond(true));
  	}
    goTolistView(){
      Actions.listView()  
    }
    render(){
      return (
          <Container style={styles.container}>
              <Content>
                <Grid>
                  <Col style={styles.col1}>  
                    <Row  style={styles.row1}>
                      <TouchableOpacity onPress = {this.goTolistView}>
                        <Text>listView</Text>
                      </TouchableOpacity>
                    </Row>
                  </Col>
                  <Col style={styles.col2}>
                    <Row  style={styles.row1}>
                      <TouchableOpacity onPress = {this.renderView}>
                        <Text>listView1</Text>
                      </TouchableOpacity>
                    </Row>
                  </Col>
                </Grid>
              </Content>
          </Container>

      );
  }
}

const styles = StyleSheet.create({
    container:{
        marginTop:10
    },
    colContent:{
        marginTop:300
    },
    col1:{
        backgroundColor: 'red',
        height: 200,
        margin: 10
    },
    col2:{
        height: 200,
        margin: 10
    },
    row1:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',

    }
})
export default HomePage

