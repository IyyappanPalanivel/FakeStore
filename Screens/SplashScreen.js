import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  ImageStore,
} from 'react-native';
import { STRINGS } from '../Utils/Constant';
import Images from '../Utils/Images';
import { COLORS } from '../Utils/Theme';
import AsyncStorage from '@react-native-async-storage/async-storage';


const SplashScreen = ({ navigation }) => {

  setTimeout( ()=> {
    //Check if user_id is set or not
    //If not then send for Authentication
    //else send to Home Screen
    AsyncStorage.getItem(STRINGS.USER_TOKEN).then((value) =>
      navigation.replace(
        value === null ? 'Auth' : 'HomeBottomTab'
      ),
    );
  }, 2000);

  

  return (
    <View style={styles.container}>
      
      <Text style={styles.splashText}>Fake Store</Text>
      <Image style={styles.splashLogo} source={Images.splash_logo}/>

    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: COLORS.primaryBlue,
    alignItems:'center',
  },
  splashText: {
    color: 'white',
    fontSize: 40,
    marginTop: 20,

  },
  splashLogo: {
    width: '95%',
    height: 500,
  },

});


