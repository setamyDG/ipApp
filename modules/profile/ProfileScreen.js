import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
} from 'react-native';
import Header from './Header';
import Separator from './Separator';
import Body from './Body';

export default class ProfileScreen extends Component {
  static navigationOptions = {
    title: 'Profile',
    alignSelf: 'center',
    headerTitleStyle: {
      color: 'black',
      fontStyle: 'italic',
      textAlign: 'center',
      alignSelf: 'center',
      flex: 1,
    },
  };

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Separator />
        <Body />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
