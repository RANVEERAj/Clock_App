import { Text, View } from 'react-native';
import React, { Component } from 'react';
import TopTabNavigator from './Navigation/TopTabNavigator';
import {NavigationContainer} from "@react-navigation/native"

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
<TopTabNavigator/>
      </NavigationContainer>
    );
  }
}
