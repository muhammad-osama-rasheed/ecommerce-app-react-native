import React from 'react';
import './global.css';
import MainNavigator from './src/navigation/MainNavigator';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <>
      <MainNavigator />
      <Toast />
    </>
  );
};

export default App;
