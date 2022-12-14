import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './Screens/SplashScreen';
import AuthStack from './Stacks/AuthStack';
import MyBottomTab from './Stacks/BottomTab';
import MenuStack from './Stacks/MenuStack';
import EditProfileScreen from './Screens/EditProfileScreen';
import { Provider } from 'react-redux';
import { Store } from './redux/store';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={"SplashScreen"} independent={true}>
          {/* SplashScreen which will come once for 2 Seconds */}
          <Stack.Screen
            name={"SplashScreen"}
            component={SplashScreen}
            // Hiding header for Splash Screen
            options={{ headerShown: false }}
          />
          {/* Auth Navigator: Include Welcome, Login and Signup */}
          <Stack.Screen
            name={"Auth"}
            component={AuthStack}
            options={{ headerShown: false }}
          />
          {/* Homepage as a landing page */}
          <Stack.Screen
            name={"HomeBottomTab"}
            component={MyBottomTab}
            options={{ headerShown: false }}
          />
          {/* Menu Screen contions Menu options */}
          <Stack.Screen
            name="MenuStack"
            component={MenuStack}
            options={{ headerShown: false }}
          />
          {/* Edit Profile Screen */}
          <Stack.Screen
            name="EditProfile"
            component={EditProfileScreen}
            options={{ headerShown: false }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};


export default App;
