import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuScreen from '../Screens/MenuScreen';
import ImageOptionsScreen from '../Screens/ImageOptionsScreen';


const Stack = createNativeStackNavigator();

const MenuStack = () => {
    return (
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen
            name="Menu"
            component={MenuScreen}
            options={{headerShown:false}}
          />
        <Stack.Screen
            name="Image"
            component={ImageOptionsScreen}
            options={{headerShown:false}}
          />  
        </Stack.Navigator>
    );
};

export default MenuStack;  