import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoginScreen from '../../modules/login/LoginScreen';
import MainTabNavigator from './MainTabNavigator';
import CreateAccountScreen from '../../modules/createAccount/CreateAccountScreen';

const RootStack = createSwitchNavigator({
  Login: LoginScreen,
  Main: MainTabNavigator,
  CreateAccount: CreateAccountScreen,
});

export default createAppContainer(RootStack);
