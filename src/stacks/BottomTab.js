import React from 'react';
import ProfileScreen from '../screens/ProfileScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS } from '../utils/Theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

const MyBottomTab= () => {
    return (
      <Tab.Navigator screenOptions={{
        tabBarActiveBackgroundColor:COLORS.greyBackground,
        tabBarInactiveBackgroundColor:COLORS.greyBackground,
        tabBarActiveTintColor:COLORS.primary,
        tabBarInactiveTintColor:COLORS.tabBarInactive,
        tabBarShowLabel:false,
        tabBarStyle:{
          elevation:0,
          position:'absolute',
          borderTopColor:COLORS.greyBackground,
        }
      }}>
        <Tab.Screen 
            name="HomeRoute" 
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
              headerShown:false
            }}
            />
        <Tab.Screen 
            name="Profile" 
            component={ProfileScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="account" color={color} size={size} />
              ),
              headerShown:false
            }} />
        <Tab.Screen 
            name="Cart" 
            component={ProfileScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="cart" color={color} size={size} />
              ),
              headerShown:false
            }} />
      </Tab.Navigator>
    );
}

export default MyBottomTab;