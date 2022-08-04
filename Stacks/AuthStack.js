import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Screens/LoginScreen';
import WelcomeScreen from '../Screens/WelcomeScreen';
import MyBottomTab from './BottomTab';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{headerShown:false}}
          />
        <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown:false}}
          />
        <Stack.Screen
            name="HomeBottomTab"
            component={MyBottomTab}
            options={{headerShown:false}}
          />  
        </Stack.Navigator>
    );
};

export default AuthStack;  