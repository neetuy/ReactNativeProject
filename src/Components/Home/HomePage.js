// import {Container, Header, Content, Footer, Title} from 'native-base';
// import { Col, Row, Grid } from "react-native-easy-grid";
// import React, {Component} from "react";
// import {StyleSheet, TouchableOpacity, Text,View} from 'react-native';
// import { Actions } from 'react-native-router-flux';
// import ListViewDemo from '../listview/ListViewDemo';


//   class HomePage extends Component{
//   	constructor() {
//       super()
//     }
//     renderView(props) {    	
//   		return 
//         <View>
//          <Text>hello</Text>
//         </View>
// 		}

// 		_handlePress(){
// 			showSecond = this.state.showSecond;
//     return this.setState(showSecond(true));
//   	}
//     goTolistView(){
//       Actions.listView()  
//     }
//     render(){
//       return (
//           <Container style={styles.container}>
//               <Content>
//                 <Grid>
//                   <Col style={styles.col1}>  
//                     <Row  style={styles.row1}>
//                       <TouchableOpacity onPress = {this.goTolistView}>
//                         <Text>listView</Text>
//                       </TouchableOpacity>
//                     </Row>
//                   </Col>
//                   <Col style={styles.col2}>
//                     <Row  style={styles.row1}>
//                       <TouchableOpacity onPress = {this.renderView}>
//                         <Text>listView1</Text>
//                       </TouchableOpacity>
//                     </Row>
//                   </Col>
//                 </Grid>
//               </Content>
//           </Container>

//       );
//   }
// }

// const styles = StyleSheet.create({
//     container:{
//         marginTop:10
//     },
//     colContent:{
//         marginTop:300
//     },
//     col1:{
//         backgroundColor: 'red',
//         height: 200,
//         margin: 10
//     },
//     col2:{
//         height: 200,
//         margin: 10
//     },
//     row1:{
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',

//     }
// })
// export default HomePage

import {Container, Header, Content, Footer, Title} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import React, {Component} from "react";
import {StyleSheet, TouchableOpacity, Text,View} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Router, Scene } from 'react-native-router-flux';

 const Home = () => {
    const goToAbout = () => {
      Actions.about()
   	}
   	const goToTopics = () => {
      Actions.topics()
   	}

    return (
	    <Container style={styles.container}>
	      <Content>
	        <Grid>
	          <Col style={styles.col1}>  
	            <Row  style={styles.row1}>
	              <TouchableOpacity onPress = {goToAbout}>
	                <Text>Go To About</Text>
	              </TouchableOpacity>
	            </Row>
	          </Col>
	          <Col style={styles.col1}>  
	          	<Row  style={styles.row1}>
	            	<TouchableOpacity onPress = {goToTopics}>
	              	<Text>Go To Topics</Text>
	            	</TouchableOpacity>
	          	</Row>
	        	</Col>
	        </Grid>
	      </Content>
	  </Container>
    );
};
 const About = () => {
 	const goToHome = () => {
      Actions.home()
   	}
    return (
    <Container style={styles.container}>
	      <Content>
	        <Grid>
	          <Col style={styles.colAbout}>  
	            <Row  style={styles.row1}>
	            	<TouchableOpacity onPress = {goToHome}>
	              	<Text>This is About Page</Text>
	            	</TouchableOpacity>       
	            </Row>
	          </Col>
	        </Grid>
	      </Content>
	  </Container>
    );
};
 const Topics = () => {
 	const goToHome = () => {
      Actions.home()
   	}
    return (
    <Container style={styles.container}>
	      <Content>
	        <Grid>
	          <Col style={styles.colTopics}>  
	            <Row  style={styles.row1}>
	            	<TouchableOpacity onPress = {goToHome}>
	              	<Text>This is Topics Page</Text>
	            	</TouchableOpacity>       
	            </Row>
	          </Col>
	        </Grid>
	      </Content>
	  </Container>
    
    );
};
 const HomePage   = () => (
   <Router>
      <Scene key = "root">
      		<Scene key = "home" component = {Home} title = "Home" initial = {true} />
         	<Scene key = "about" component = {About} title = "About" />
         	<Scene key = "topics" component = {Topics} title = "Topics"  />
      </Scene>
   </Router>
   )

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
    colAbout:{
        backgroundColor: 'blue',
        height: 200,
        margin: 10
    },
    colTopics:{
    		backgroundColor: 'green',
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
