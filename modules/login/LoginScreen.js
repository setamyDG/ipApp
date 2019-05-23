import React, { Component } from 'react';
import {
  Dimensions, Image, ImageBackground, StyleSheet, StatusBar
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import LoginForm from '../../components/LoginForm';

export default class LoginScreen extends Component {
  componentDidMount() {
    SplashScreen.hide();
    StatusBar.setHidden(true);
  }

  render() {
    return (
      <ImageBackground
        style={styles.container}
        source={require('../../assets/images/login.jpg')}
      >
        <Image
          style={{
            alignSelf: 'center',
            width: Dimensions.get('window').height / 2.9 - 2,
            height: Dimensions.get('window').height / 2.9 - 2,
            borderRadius: Dimensions.get('window').height - 4.5,
            borderWidth: 4,
            borderColor: 'black',
            marginTop: '10%',
          }}
          source={require('../../assets/images/95mine.jpg')}
        />

        <LoginForm />
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
});
