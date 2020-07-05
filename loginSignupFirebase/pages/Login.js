// Login.js
import React, { Component } from 'react'
import {
  View,
  TouchableOpacity,
  TextInput,
  Text,
  StyleSheet
} from 'react-native'

export default class Login extends Component {
  state = {
    username: '', password: '', email: '', phone_number: ''
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  login = async () => {
    const { username, password, email, phone_number } = this.state
    try {
      // here place your Login logic
      console.log('user successfully signed up!: ', success)
    } catch (err) {
      console.log('error signing up: ', err)
    }
  }
 
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Phone, username or email'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('username', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('password', val)}
        />
        <TouchableOpacity
        style={styles.button}
          title='Login'
          onPress={this.login}
        >
            <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e5ffff',
  },
  input: {
    width: 350,
    height: 55,
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 25,
    fontSize: 18,
    fontWeight: '500',
    backgroundColor: '#b2dfdb',
  },
  button: {
    padding: 15,
    marginTop: 15,
    borderRadius: 25,
    width: 150,
    justifyContent: 'center',
    backgroundColor: '#82ada9'
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'GillSans-Bold'
  }
})