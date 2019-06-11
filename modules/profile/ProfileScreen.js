import React, { Component } from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from './Header';
import Separator from './Separator';
import Body from './Body';

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { navigation: this.props.navigation };
  }

  static navigationOptions = {
    title: 'Profile',
    alignSelf: 'center',
    headerTitleStyle: {
      color: 'black',
      fontStyle: 'italic',
      textAlign: 'center',
      alignSelf: 'center',
      flex: 1,
      marginRight: -45,
    },
    headerRight: (
      <Icon style={{ marginRight: 20 }} name="sign-out" size={25} color="black" onPress={() => this.navigation.navigate('Login')} />
    ),
  };

  componentDidMount() {
    StatusBar.setHidden(true);
  }

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
