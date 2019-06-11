import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

import FadeAnimation from '../../animations/view/FadeAnimation';
import Separator from '../profile/Separator';

import CreateAccountTxtInputs from './CreateAccountTxtInputs';

export default class CreateAccountForm extends Component {
  render() {
    return (
      <FadeAnimation style={styles.darkContainer}>
        <Separator />
        <Text
          style={{
            color: 'white',
            fontSize: 35,
            fontStyle: 'italic',
            alignSelf: 'center',
          }}
        >
          SIGN UP
        </Text>
        <Separator />
        <CreateAccountTxtInputs />
      </FadeAnimation>
    );
  }
}

const styles = StyleSheet.create({
  darkContainer: {
    width: '85%',
    height: '50%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: '40%',
  },
});
