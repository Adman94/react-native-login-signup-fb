/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './pages/Landing';
import Signup from './pages/Signup';
import Login from './pages/Login';
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

// function Landing() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen 
          name="Landing" 
          component={Landing}
          options={{
            headerStyle: {
              backgroundColor: '#c8e6c9',
            },
          }}
        />

        <Stack.Screen 
          name="Signup" 
          component={Signup}
          options={({navigation}) => (
            {
              headerStyle: {
                backgroundColor: '#f0f4c3',
              },
              headerLeft: () => (
                <TouchableOpacity
                    onPress={() => {navigation.goBack()}}
                    >
                    <Image 
                    source={require('./img/backbtn.png')}
                    style={styles.back}
                    />
                </TouchableOpacity>
              )
            })
          }
        />

        <Stack.Screen 
          name="Login" 
          component={Login}
          options={({navigation}) => (
            {
              headerStyle: {
                backgroundColor: '#e5ffff',
              },
              headerLeft: () => (
                <TouchableOpacity
                    onPress={() => {navigation.goBack()}}
                    >
                    <Image 
                    source={require('./img/backbtn.png')}
                    style={styles.back}
                    />
                </TouchableOpacity>
              )
            })
          }
          
        />
      </Stack.Navigator>
    </NavigationContainer>
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
  btn: {
    padding: 15,
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    backgroundColor: '#f0f4c3'
  },
  text: {
    backgroundColor: '#c8a6c9'
  },
  back: {
    padding: 15,
    width: 40,
    height: 40,
    backgroundColor: 'transparent'
  }
});

export default App;
