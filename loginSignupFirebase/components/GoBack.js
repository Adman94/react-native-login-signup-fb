import React, { Component } from 'react'
import { withNavigation } from 'react-navigation';
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

class GoBack extends Component {
    render() {
        return (
            <View>
                    <TouchableOpacity
                    onPress={() => {this.props.navigation.goBack()}}
                    >
                    <Image 
                    source={require('../img/backbtn.png')}
                    style={styles.back}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}
    
  const styles = StyleSheet.create({
  back: {
    padding: 15,
    borderRadius: 25,
    width: 50,
    height: 50,
    backgroundColor: '#f0f4c3'
  },
})

export default withNavigation(GoBack)