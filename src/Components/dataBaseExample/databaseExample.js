
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

let SQLite = require('react-native-sqlite-storage')

export default export default class ReactNativeExamplDB extends Component {

  constructor(props) {
    super(props)

    this.state = {
      record: null
    }

    let db = SQLite.openDatabase({name: 'example.db', createFromLocation : "~example.db", location: 'Library'}, this.openCB, this.errorCB);
    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM contact', [], (tx, results) => {
          var len = results.rows.length;
          for (let i = 0; i < len; i++) {
            console.log("Hello");
            let row= results.rows.item(i);
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
          {this.state.record !== null ? 'Success: ' + this.state.record.name, : 'Waiting...'}
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

