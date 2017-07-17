
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {List, ListItem} from 'native-base'

let SQLite = require('react-native-sqlite-storage')

export default class DatabaseExample extends Component {

  constructor(props) {
    super(props)

    this.state = {
      rows:[]
    }

    let db = SQLite.openDatabase({name: 'example.db', createFromLocation : "~example.db", location: 'Library'}, this.openCB, this.errorCB, this.successCB);
    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM contact', [], (tx, results) => {
           let rows = results.rows.raw();
            rows.map(row => console.log(`name: ${row.name}, Id: ${row.id}`));
            this.setState({rows});
        });

      })
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
      let rows = this.state.rows;
    return (
      <View style={styles.container}>
        <Text style={{fontSize:16,textAlign:'center'}}>
          Example with sqlite3 database
        </Text>
        <View>
        {
        rows.map(row => 
        <List>
        <ListItem style={{borderBottomWidth:0}}>
       		<Text key={row.id} style={{fontSize:16}}>id {row.id}</Text>
        </ListItem>
        <ListItem style={{borderBottomWidth:0}}>
  			<Text key={row.id} style={{fontSize:16}}>{row.name}</Text>
  		</ListItem>
  		<ListItem style={{borderBottomWidth:0}}>
  			<Text key={row.id} style={{fontSize:16}}>{row.phone_num}</Text>
  		</ListItem>
  		<ListItem style={{borderBottomWidth:0}}>
  			<Text key={row.id} style={{fontSize:16}}>{row.email}</Text>
  		</ListItem>
  		</List>
	     )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  
});

