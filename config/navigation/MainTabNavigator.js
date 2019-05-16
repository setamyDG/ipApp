import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import TabBarIcon from '../../components/TabBarIcon';
import HomeScreen from '../../modules/home/HomeScreen';
import ProfileScreen from '../../modules/profile/ProfileScreen';
import ProgramsScreen from '../../modules/programs/ProgramsScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-home'
      }
    />
  ),
};

const ProgramsStack = createStackNavigator({
  Links: ProgramsScreen,
});

ProgramsStack.navigationOptions = {
  tabBarLabel: 'Programs',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-heart'} />
  ),
};

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen,
});

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-settings'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  ProgramsStack,
  ProfileStack,
});
