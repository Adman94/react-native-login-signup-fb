import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
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

export default function Landing({ navigation }) {
    return (
        <View style={styles.container}>
      <Image 
          style={styles.logo} 
          source={require('../img/logo.png')} 
      />
      <TouchableOpacity
        title="signup" 
        style={styles.TouchableOpacity}
        onPress={() => navigation.navigate('Signup')}
      >
          <Text style={styles.text}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity
          title="login" 
          style={styles.TouchableOpacity}
          onPress={() => navigation.navigate('Login')}
      >
          <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
    </View>
    )
}

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
  TouchableOpacity: {
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