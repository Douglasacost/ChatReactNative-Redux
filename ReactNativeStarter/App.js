/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';

import store from './src/store';
import AppContainer from './src/containers/AppContainer';
console.ignoredYellowBox = ['Setting a timer'];
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('Chat', () => App);