import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { COLORS, FONTS, SIZES } from '../utils/Theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { STRINGS } from '../utils/Constant';
import Helper from '../utils/Helper';
import Loader from '../components/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GetLocation from 'react-native-get-location';
import * as ImagePicker from "react-native-image-picker"

const EditProfileScreen = ({ navigation }) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [imageUri, setImageUri] = useState(null);
  const [loading, setLoading] = useState(false);

  function submitProfile() {
    if (!name) {
      alert('Please fill Name')
    }
    if (!email) {
      alert('Please fill Email')
    }
    if (!phone) {
      alert('Please fill Mobile Number')
    }
    if (!address) {
      alert('Please fill Address')
    }

    if (!Helper.isValidEmail(email)) {
      alert('Please enter valid email address')
    }
    if (!Helper.isValidPhoneNumber(phone)) {
      alert('Please enter valid mobile number')
    }

    setLoading(true);

    let user_profile = {
      name: name,
      email: email,
      phone: phone,
      address: address,
      profileImage: imageUri,
    };

    AsyncStorage.setItem(STRINGS.USER_PROFILE, JSON.stringify(user_profile));
    setLoading(false);
    navigation.goBack();

  }

  function getProfileDatas() {
    AsyncStorage.getItem(STRINGS.USER_PROFILE, (err, result) => {
      console.log(result);
      if(result!=null){
        var user_profile = JSON.parse(result);
        setName(user_profile.name);
        setEmail(user_profile.email);
        setPhone(user_profile.phone);
        setAddress(user_profile.address);
        setImageUri(user_profile.profileImage);
      }
    });
  }

  function getCurrentLocation() {
    setLoading(true);

    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        console.log(location);
        setLoading(false);
        getAddressFromCoordinates(location.latitude,location.longitude);
      })
      .catch(error => {
        const { code, message } = error;
        console.warn(code, message);
        setLoading(false);
      })
  }

  function getAddressFromCoordinates({latitude, longitude}) {
    return new Promise((resolve, reject) => {
      fetch(
        'https://maps.googleapis.com/maps/api/geocode/json?address=' +
          latitude +
          ',' +
          longitude +
          '&key=' +
          'Key Received from Google map',
      )
        .then(response => response.json())
        .then(responseJson => {
          if (responseJson.status === 'OK') {
            resolve(responseJson?.results?.[0]?.formatted_address);
          } else {
            reject('not found');
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  // Pick Image from gallery
  function selectImage(){
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, (res) => {
      console.log('Response = ', res);
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        const source = { uri: res.uri };
        setImageUri(res.assets[0].uri);
      }
    });
  }

  useEffect(() => {
    getProfileDatas();
  }, []);

  return (
    <SafeAreaView style={styles.container}>

      <Loader loading={loading} />

      <Text style={FONTS.title}>Edit Profile</Text>

      <ScrollView>
        {/* Profile Container */}
        <View style={{ marginTop: SIZES.margin }}>

          <View style={styles.addressConatiner}></View>

          <View style={{ justifyContent: 'center', alignItems: 'center', position: 'absolute', alignSelf: 'center' }}>
            <TouchableOpacity onPress={selectImage}>
              <Image
                source={{
                  uri: imageUri == null ? 
                    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png': imageUri
                }}
                style={styles.profileImage}
              />
            </TouchableOpacity>
            <Text style={styles.profileName}>Edit Profile Picture</Text>
          </View>
        </View>

        {/* Edit Fields */}
        <View style={styles.inputContainer}>
          <MaterialIcons style={styles.menuIcon} name="person" color={COLORS.tabBarInactive} size={22} />
          <TextInput
            style={styles.input}
            placeholder="Enter your Name"
            keyboardType='default'
            value={name}
            onChangeText={newName => setName(newName)}
          />
        </View>

        <View style={styles.inputContainer}>
          <MaterialIcons style={styles.menuIcon} name="mail" color={COLORS.tabBarInactive} size={22} />
          <TextInput
            style={styles.input}
            placeholder="Enter your Email"
            keyboardType='email-address'
            value={email}
            onChangeText={newEmail => setEmail(newEmail)}
          />
        </View>

        <View style={styles.inputContainer}>
          <MaterialIcons style={styles.menuIcon} name="phone" color={COLORS.tabBarInactive} size={22} />
          <TextInput
            style={styles.input}
            placeholder="Enter your Mobile Number"
            keyboardType='numeric'
            maxLength={10}
            value={phone}
            onChangeText={newPhone => setPhone(newPhone)}
          />
        </View>

        <View style={styles.inputContainer}>
          <MaterialIcons style={styles.menuIcon} name="location-pin" color={COLORS.tabBarInactive} size={22} />
          <TextInput
            style={styles.input}
            placeholder="Enter your Address"
            keyboardType='default'
            value={address}
            onChangeText={newAddress => setAddress(newAddress)}
          />
          <MaterialIcons style={styles.menuIcon} name="my-location" color={COLORS.tabBarInactive} size={22}
            onPress={getCurrentLocation}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={submitProfile}
        >
          <Text style={styles.buttonTxt}>Submit</Text>
        </TouchableOpacity>

      </ScrollView>


    </SafeAreaView>
  );
  };

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.greyBackground,
    padding: SIZES.padding,
  },
  addressConatiner: {
    backgroundColor: COLORS.white,
    padding: 20,
    marginVertical: 8,
    borderRadius: SIZES.radius,
    justifyContent: 'center',
    width: '100%',
    paddingTop: 80,
    marginTop: 30,
  },
  addressText: {
    fontSize: 15,
    color: COLORS.black,
    paddingHorizontal: SIZES.paddingHorizontal
  },
  profileImage: {
    width: 76,
    height: 76,
    borderRadius: 76 / 2,
    borderColor: COLORS.primary,
    borderWidth: 1,
    resizeMode: 'center'
  },
  profileName: {
    fontSize: 18,
    color: COLORS.black,
    margin: 10,
  },
  iconSize: {
    marginEnd: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#868686',
    borderRadius: SIZES.radiusCard,
    paddingStart: SIZES.base,
    alignItems: 'center',
    marginTop: SIZES.marginTop,
    backgroundColor: COLORS.white,
  },
  input: {
    flex: 1
  },
  button: {
    width: "80%",
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primaryColor,
    borderRadius: SIZES.radius,
    alignSelf: 'center',
    margin: SIZES.margin,
  },
  buttonTxt: {
    color: COLORS.white,
  },
  menuIcon: {
    marginHorizontal: 5
  }
});


