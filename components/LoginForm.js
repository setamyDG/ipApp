import React, { Component } from 'react';
import {
  Alert, KeyboardAvoidingView, StyleSheet, Text, TextInput, View, TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { withNavigation } from 'react-navigation';
import FadeAnimation from '../animations/view/FadeAnimation';

// todo: usun inline style


class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { navigation: this.props.navigation };
  }

    state = {
      username: '',
      password: '',
    };

    ChceckLoginForm() {
      if (
        this.state.username.localeCompare('1') != 0
            && this.state.password.localeCompare('1') != 0
      ) {
        Alert.alert('error', 'error2');
      } else {
        this.state.navigation.navigate('Main');
      }
    }

    render() {
      return (
        <View>
          <KeyboardAvoidingView behavior="position">
            <FadeAnimation style={styles.container}>
              <TextInput
                style={styles.loginInput}
                placeholder="USERNAME"
                returnKeyType="next"
                placeholderTextColor="black"
                onSubmitEditing={() => this.passwordRef.focus()}
                onChangeText={value => this.setState({ username: value })}
                value={this.state.username}
              />
              <TextInput
                style={styles.passwordInput}
                placeholder="PASSWORD"
                placeholderTextColor="black"
                secureTextEntry
                returnKeyType="go"
                ref={(ref) => {
                  this.passwordRef = ref;
                }}
                onChangeText={value => this.setState({ password: value })}
                value={this.state.password}
              />
              <TouchableOpacity style={[styles.gradient, { top: 45 }]} onPress={() => this.ChceckLoginForm()}>
                <LinearGradient
                  colors={['transparent', 'transparent']}
                  start={{ x: 0.0, y: 1.0 }}
                  end={{ x: 1.0, y: 1.0 }}
                >
                  <Text style={{ color: 'white' }}>
                                LOGIN
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.gradient, { top: 60 }]} onPress={() => this.state.navigation.navigate('CreateAccount')}>
                <LinearGradient
                  colors={['transparent', 'transparent']}
                  start={{ x: 0.0, y: 1.0 }}
                  end={{ x: 1.0, y: 1.0 }}
                >
                  <Text style={{ color: 'white' }}>CREATE ACCOUNT</Text>
                </LinearGradient>
              </TouchableOpacity>
            </FadeAnimation>
          </KeyboardAvoidingView>
        </View>
      );
    }
}
export default withNavigation(LoginForm);

const styles = StyleSheet.create({
  container: {
    width: '85%',
    height: '80%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: '7%',
  },
  gradient: {
    height: 40,
    width: '80%',
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  loginInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    width: '80%',
    height: '12%',
    borderRadius: 20,
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 60,
    color: 'white',
  },
  passwordInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    width: '80%',
    height: '12%',
    borderRadius: 20,
    textAlign: 'center',
    color: 'white',
  },
});
