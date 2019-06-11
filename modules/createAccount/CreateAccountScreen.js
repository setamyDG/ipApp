import React, { Component } from 'react';
import { Alert, ImageBackground, StyleSheet, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import CreateAccountForm from './CreateAccountForm';

export default class CreateAccountScreen extends Component {
  signUpPress() {
    Alert.alert('Account created successfully. You can log in now.');
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground
        style={styles.container}
        source={require('../../assets/images/login.jpg')}
      >
        <CreateAccountForm />

        <TouchableOpacity
          style={[styles.gradient, { top: 45 }]}
          onPress={() => this.signUpPress()}
        >
          <LinearGradient
            colors={['transparent', 'transparent']}
            start={{ x: 0.0, y: 1.0 }}
            end={{ x: 1.0, y: 1.0 }}
          >
            <Text style={{ color: 'white' }}>SIGN UP</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.gradient, { top: 55 }]}
          onPress={() => navigate('Login')}
        >
          <LinearGradient
            colors={['transparent', 'transparent']}
            start={{ x: 0.0, y: 1.0 }}
            end={{ x: 1.0, y: 1.0 }}
          >
            <Text style={{ color: 'white' }}>BACK</Text>
          </LinearGradient>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    height: 40,
    width: '50%',
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'center',
    borderWidth: 2,
    alignSelf: 'center',
    borderColor: 'white',
  },
});
