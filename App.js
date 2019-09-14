import React from 'react';

import { View, Text, Platform } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

import AppNavigation from './src/navigation/AppNavigation';
import { createAppContainer } from 'react-navigation';

if (Platform.OS === 'ios') {
  Geolocation.setRNConfiguration({
    authorizationLevel: 'whenInUse'
  });
}

console.disableYellowBox = true;

class App extends React.Component {

  render() {

    const Navigation = createAppContainer(AppNavigation);
    return (
      <Navigation />
    )
  }
}

export default App;