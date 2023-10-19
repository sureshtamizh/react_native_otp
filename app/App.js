// App.js (for react-native CLI) or your entry file (for Expo)

import React from 'react';
import { View, StyleSheet } from 'react-native';
import LoginScreen from './src/screens/Login';


const App = () => {
  return (
    <LoginScreen />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
