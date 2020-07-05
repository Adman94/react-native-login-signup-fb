// SignUp.js
import React, { Component } from 'react'
import {
  View,
  TouchableOpacity,
  TextInput,
  Text,
  Image,
  StyleSheet
} from 'react-native'

export default class SignUp extends Component {
  state = {
    username: '', password: '', email: '', phone_number: ''
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  signUp = async () => {
    const { username, password, email, phone_number } = this.state
    try {
      // here place your signup logic
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
          placeholder='Username'
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
        <TextInput
          style={styles.input}
          placeholder='Email'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('email', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Phone Number'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('phone_number', val)}
        />
        <TouchableOpacity
        style={styles.button}
          title='Sign Up'
          onPress={this.signUp}
        >
            <Text style={styles.text}>Sign Up</Text>
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
    backgroundColor: '#f0f4c3'
  },
  input: {
    width: 350,
    height: 55,
    backgroundColor: '#bdc192',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 25,
    fontSize: 18,
    fontWeight: '500',
  },
  button: {
    padding: 15,
    marginTop: 15,
    borderRadius: 25,
    width: 150,
    justifyContent: 'center',
    backgroundColor: '#dce775'
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'GillSans-Bold'
  },
  back: {
    padding: 15,
    borderRadius: 25,
    width: 50,
    height: 50,
    backgroundColor: '#f0f4c3'
  },
})