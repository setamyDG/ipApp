import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import APIdata from './APIdata';

export default class ProgramsScreen extends Component {
  static navigationOptions = {
    title: 'Programs',
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
      <ScrollView style={styles.container}>
        <APIdata />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  text: {
    fontWeight: '700',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: '50%',
  },
});
