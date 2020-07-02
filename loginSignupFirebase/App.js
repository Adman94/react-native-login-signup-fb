/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <Image 
          style={styles.logo} 
          source={require('./img/logo.png')} 
      />
      <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity 
          style={styles.button}
      >
          <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c8e6c9'
  },
  logo: {
    width: '50%',
    height: '20%'
  },
  button: {
    padding: 15,
    marginTop: 15,
    borderRadius: 25,
    width: 300,
    justifyContent: 'center',
    backgroundColor: '#97b498'
  },
  text: {
    color: '#e3f2fd',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'GillSans-Bold'
  }
});

export default App;
