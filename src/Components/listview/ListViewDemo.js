import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import {Container, Header, Content, Footer, Title} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

class ListViewDemo extends Component {
   render(props) {
      return (
      <Container style={styles.container}>
              <Content>
                <Grid>
                    <Col>
                    <Row  style={styles.row1}>
                      <TouchableOpacity onPress = {props.helloWorld}>
                        <Text>click</Text>
                      </TouchableOpacity>
                    </Row>
                    </Col>
                </Grid>
              </Content>
          </Container>
      )
   }
}
const styles = StyleSheet.create ({
   container: {
      padding: 10,
      marginTop: 8,
      backgroundColor: '#d9f9b1',
      alignItems: 'center',
   },
      row1:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',

    }
})

export default ListViewDemo