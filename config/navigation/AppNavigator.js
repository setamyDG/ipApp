import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoginScreen from '../../modules/login/LoginScreen';
import MainTabNavigator from './MainTabNavigator';

const RootStack = createSwitchNavigator({
  Login: LoginScreen,
  Main: MainTabNavigator,
});

export default createAppContainer(RootStack);
