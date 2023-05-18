import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { API_CONSTANTS, STRINGS } from '../utils/Constant';
import Icons from '../utils/Icons';
import Images from '../utils/Images';
import { COLORS, SIZES } from '../utils/Theme';
import Loader from '../components/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmitPress = () => {

    if (!username) {
      alert('Please fill Username');
      return;
    }
    if (!password) {
      alert('Please fill Password');
      return;
    }

    // Login Api Call
    //Username = "johnd" , password = "m38rmF$" 
    setLoading(true);

    let dataToSend = { username: username, password: password };
    let formBody = [];
    for (let key in dataToSend) {
      let encodedKey = encodeURIComponent(key);
      let encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    fetch(API_CONSTANTS.LOGIN, {
      method: 'POST',
      body: formBody,
      headers: {
        //Header Defination
        'Content-Type':
          'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader
        setLoading(false);
        console.log(responseJson);
        // If server response message same as Data Matched
        AsyncStorage.setItem(STRINGS.USER_TOKEN, responseJson.token)
        navigation.replace('HomeBottomTab');
      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
        alert('Incorrect username or password');
        navigation.replace('HomeBottomTab');
        console.error(error);
      });
  };


  return (
    <View style={styles.container}>

      <Loader loading={loading} />

      <View style={styles.topContainer}>
        <Image style={styles.topBubble} source={Images.bubbles} />
        <Text style={styles.splashText}>{STRINGS.welcomeBack}</Text>
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.loginTxt}>Login</Text>

        <View style={{ flexDirection: 'row', marginTop: SIZES.marginTop }}>
          <Image style={styles.iconSize} source={Icons.mail} />
          <Text style={styles.label}>Username</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Enter username"
          keyboardType='default'
          returnKeyType='next'
          onChangeText={newusername => setUsername(newusername)}
          placeholderTextColor={COLORS.placeholderColor}
        />

        <View style={{ flexDirection: 'row', marginTop: SIZES.marginTop }}>
          <Image style={styles.iconSize} source={Icons.password} />
          <Text style={styles.label}>Password</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          keyboardType='visible-password'
          onChangeText={newPassword => setPassword(newPassword)}
          placeholderTextColor={COLORS.placeholderColor}
        />

        <Text style={styles.linkTxt}>Forgot password?</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleSubmitPress()}
        >
          <Text style={styles.buttonTxt}>Login</Text>
        </TouchableOpacity>

        <Text style={[styles.linkTxt, { alignSelf: 'center' }]}>Create Account</Text>
      </View>

    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryColor,
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',

  },
  topBubble: {
    position: 'absolute',
    resizeMode: 'contain'
  },
  bottomContainer: {
    flex: 2,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: SIZES.radiusCard,
    borderTopRightRadius: SIZES.radiusCard,
    padding: SIZES.padding
  },
  logo: {
    width: 400,
    height: 400,
    marginTop: 20
  },
  splashText: {
    fontSize: 45,
    color: 'white',
    marginTop: 40,
    fontFamily: 'Raleway-ExtraBold',
  },
  button: {
    width: "80%",
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primaryColor,
    borderRadius: SIZES.radius,
    alignSelf: 'center',

  },
  buttonTxt: {
    color: COLORS.white,
  },
  loginTxt: {
    color: COLORS.black,
    fontSize: 18,

  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
    color:'black'
  },
  iconSize: {
    height: 18,
    width: 18,
    marginEnd: 10,
  },
  linkTxt: {
    color: COLORS.linkColor,
    marginVertical: SIZES.padding,
  },
  label: {
    color: COLORS.placeholderColor
  }
});
