// import React from 'react'
// import {
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View
// } from 'react-native'

// import sqlite from 'react-native-sqlite-storage'

// var databaseName = 'app.db'
 
// sqlite.init(databaseName)
//     .then((_) => {
//         console.log('database initialized.')
//     }
// )
// const Form = () => {
//   return (
//     <View style={styles.container}>
//       <TextInput 
//       style={styles.input}
//       placeholder="id" 
//       />
//       <TextInput 
//       style={styles.input}
//       placeholder="name" 
//       />
//       <TextInput 
//       style={styles.input}
//       placeholder="phone" 
//       />
//       <TextInput 
//       style={styles.input}
//       placeholder="email" 
//       />
//       <TouchableOpacity>
//         <Text style={styles.button}>Submit</Text>
//       </TouchableOpacity>
//     </View>
//   )
// }

// export default Form

// const styles = StyleSheet.create({
//   button: {
//     backgroundColor: 'blue',
//     color: 'white',
//     height: 30,
//     lineHeight: 30,
//     marginTop: 10,
//     textAlign: 'center',
//     width: 250
//   },
//   container: {
//     flex:1,
//     padding:20,
//     backgroundColor: '#eee',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   input: {
//     height: 37,
//     width: 250,
//     padding:10,
//     borderBottomWidth:0
//   }
// })


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

let SQLite = require('react-native-sqlite-storage')

export default class PrepopulatedDatabaseExample extends Component {

  constructor(props) {
    super(props)

    this.state = {
      record: null
    }

    let db = SQLite.openDatabase({name: 'test.db', createFromLocation : "~example.db", location: 'Library'}, this.openCB, this.errorCB);
    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM test', [], (tx, results) => {
          console.log("Query completed");
          var len = results.rows.length;
          for (let i = 0; i < len; i++) {
            let row = results.rows.item(i);
            console.log(`Record: ${row.name}`);
            this.setState({record: row});
          }
        });
    });

  }

  errorCB(err) {
    console.log("SQL Error: " + err);
  }

  successCB() {
    console.log("SQL executed fine");
  }

  openCB() {
    console.log("Database OPENED");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          This is an example with sqlite3 and a prepopulated database. Enjoy!
        </Text>
        <Text style={styles.instructions}>
          {this.state.record !== null ? 'Success: ' + this.state.record.name : 'Waiting...'}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
