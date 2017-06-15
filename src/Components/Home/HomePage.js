// import React from 'react';
// import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
// import GridView from 'react-native-gridview';
// import { Actions } from 'react-native-router-flux';

 
// const itemsPerRow = 2;
// const data = Array(10)
//   .fill(null)
//   .map((item, index) => index + 1);
 
// // ...or create your own data source. 
// // This will randomly allocate 1-3 items per row, and will be used 
// // if the `randomizeRows` prop is `true`. 
// // const randomData = [];
// // for (let i = 0; i < data.length; i) {
// //   const endIndex = Math.max(Math.round(Math.random() * itemsPerRow), 1) + i;
// //   randomData.push(data.slice(i, endIndex));
// //   i = endIndex;
// // }
// // const dataSource = new GridView.DataSource({
// //   rowHasChanged: (r1, r2) => r1 !== r2,
// // }).cloneWithRows(randomData);
 
// export default function MyGrid(props) {
//   const goTolistView = () => {
//         Actions.listView()
//      }
//   return (
//     <View style={styles.container} onpress = {goTolistView}>      
//       <GridView
//         style={styles.gridCustom}
//         data={data}
//         itemsPerRow={itemsPerRow}
//         renderItem={(item) => {
//           return (
//             <View style={styles.listViewCustom}>
//               <Text>{`${item}`}</Text>
//             </View>
//           );
//         }}
//       />
//     <TouchableOpacity onPress={goTolistView}>
//       <Text>listView</Text>
//     </TouchableOpacity>
//     </View>  
//   );
// }

// const styles = StyleSheet.create({
//   container:{
//     marginTop:30
//   },
//   gridCustom:{
//     marginTop:10,
//   },
//   listViewCustom:{
//     flex: 1, 
//     backgroundColor: '#8F8', 
//     marginTop: 10
//   }

// })


// import React, { Component } from 'react';
// import { Container, Content, ListItem, Text, CheckBox } from 'native-base';
// export default class CheckBoxExample extends Component {
//     render() {
//         return (
//             <Container>
//                 <Content>
//                     <ListItem>
//                         <CheckBox checked={true} />
//                         <Text>Daily Stand Up</Text>
//                     </ListItem>
//                     <ListItem>
//                         <CheckBox/>
//                         <Text>Discussion with Client</Text>
//                     </ListItem>
//                 </Content>
//             </Container>
//         );
//     }
// }


import {Container, Header, Content, Footer, Title} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import React, {Component} from "react";
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import { Actions } from 'react-native-router-flux';

 export default GridExample = (props) => {
    
    const goTolistView = () =>{
        Actions.listView()
            }
       
        return (
            <Container style={styles.container}>
                <Content>
                    <Grid>
                          <Col style={styles.col1}>  
                            <Text style={styles.colContent}>listView</Text>
                          </Col>
                          <Col style={styles.col2}></Col>
                    </Grid>
                </Content>
            </Container>
        );
}

const styles = StyleSheet.create({
    container:{
        marginTop:400
    },
    colContent:{
        marginTop:300
    },
    col1:{
        backgroundColor: '#eee',
        height: 200,
        margin: 10
    },
    col2:{
        backgroundColor: '#efefef',
        height: 200,
        margin: 10
    }
})