import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import Images from '../Utils/Images';
import { COLORS } from '../Utils/Theme';

const WelcomeScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>

      <Text style={styles.splashText}>Find your Gadget</Text>

      <Image
          style={styles.splashLogo}
          source={Images.splash_logo}
      />

      <TouchableOpacity 
          style = {styles.button}
          onPress={() =>
            navigation.navigate('Login')
          }
          >
            <Text style={styles.buttonTxt}>Get Started</Text>
      </TouchableOpacity>
      

    </View>
  );
}

export default WelcomeScreen;

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
  button: {
    width:"80%",
    height:60,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: 'white',
    borderRadius:16,
  },
  button2: {
    width:"80%",
    height:60,
    color: COLORS.primaryColor,
  },
  buttonTxt: {
    color:'#5956E9',
    fontSize:20,
  }
});
