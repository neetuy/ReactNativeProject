import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import {NotificationsAndroid, PendingNotifications} from 'react-native-notifications';

let mainScreen;

function onPushRegistered() {
  if (mainScreen) {
    mainScreen.onPushRegistered();
  }
}

function onNotificationOpened(notification) {
  if (mainScreen) {
    mainScreen.onNotificationOpened(notification)
  }
}

function onNotificationReceived(notification) {
  if (mainScreen) {
    mainScreen.onNotificationReceived(notification)
  }
}


NotificationsAndroid.setRegistrationTokenUpdateListener(onPushRegistered);
NotificationsAndroid.setNotificationOpenedListener(onNotificationOpened);
NotificationsAndroid.setNotificationReceivedListener(onNotificationReceived);


export default class NotificationMessage extends Component {

  constructor(props) {
    super(props);

    this.onPostNotification = this.onPostNotification.bind(this);
    

    this.state = {
      lastNotification: undefined
    };

    console.log('ReactScreen', 'ReactScreen');
    mainScreen = this;

    
  }

 
  

  onPostNotification() {
    this.lastNotificationId = NotificationsAndroid.localNotification({title: "notification message", body: "This notification was generated by the app!"});
  }

  onPushRegistered() {
  }

  onNotificationOpened(notification) {
    console.log("onNotificationOpened: ", notification);
    this.setState({lastNotification: notification.getData()});
  }

  onNotificationReceived(notification) {
    console.log("onNotificationReceived: ", notification);
  }

  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>React Native Notifications</Text> 
        <TouchableHighlight onPress={() => this.onPostNotification()}>
          <Text style={styles.mainButtonText}>Try Me!</Text>
        </TouchableHighlight>
      </View>
    )
  }

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
  },
  
  mainButtonText: {
    fontSize: 25,
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
 
});
