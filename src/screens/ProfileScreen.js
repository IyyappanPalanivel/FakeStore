import React,{useState,useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  FlatList,
  Image,
  ScrollView, 
} from 'react-native';
import { COLORS, FONTS, SIZES } from '../utils/Theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { STRINGS } from '../utils/Constant';
import MenuItem from '../components/MenuItem';
import AsyncStorage from '@react-native-async-storage/async-storage';


const ProfileScreen = ({ navigation }) => {

  const[name,setName] = useState('');
  const[address,setAddress] = useState('No Addressess found');
  const[imageUri,setImageUri] = useState(null);

  function getProfileDatas() {
    AsyncStorage.getItem(STRINGS.USER_PROFILE, (err, result) => {
      console.log(result);
      if(result!=null){
        var user_profile = JSON.parse(result);
        setName(user_profile.name);
        setAddress(user_profile.address);
        setImageUri(user_profile.profileImage);
      }     
    });
  }

  useEffect(() => {
    getProfileDatas();
  }, []);


  return (
    <SafeAreaView style={styles.container}>
      
      <Text style={FONTS.title}>My Profile</Text>

      <ScrollView>
        {/* Profile Container */}
        <View style={{marginTop:SIZES.margin}}>
          
          <View style={styles.addressConatiner}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
              <MaterialIcons name='location-pin' size={24} color={COLORS.black}/>
              <Text style={styles.addressText}>{address}</Text>
            </View>
          </View>

          <View style={{justifyContent:'center',alignItems:'center',position:'absolute',alignSelf:'center'}}>
            <Image
              source={{
                uri: imageUri == null ?
                  'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png': imageUri
              }}
              style={styles.profileImage}
            />
            <Text style={styles.profileName}>{name}</Text>
          </View>
        </View>

        {/* Menu Options */}
        <MenuItem title={"Edit Profile"} onPress={()=> { navigation.navigate('EditProfile') }}/>
        <MenuItem title={"Shopping address"} onPress={()=> { navigation.navigate('EditProfile') }}/>
        <MenuItem title={"Order history"} onPress={()=> { navigation.navigate('EditProfile') }}/>
        <MenuItem title={"Notifications"} onPress={()=> { navigation.navigate('EditProfile') }}/>
      </ScrollView>

    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: COLORS.greyBackground,
    padding:SIZES.padding,
  },
  addressConatiner: {
    backgroundColor: COLORS.white,
    padding: 20,
    marginVertical: 8,
    borderRadius: SIZES.radius,
    justifyContent:'center',
    width:'100%',
    paddingTop: 80,
    marginTop:30,
  },
  addressText: {
    fontSize:15,
    color:COLORS.black,
    paddingHorizontal:SIZES.paddingHorizontal
  },
  profileImage: {
    width: 76,
    height: 76,
    borderRadius: 76 / 2,
    borderColor:COLORS.primary,
    borderWidth:1,
    resizeMode:'center'
  },
  profileName:{
    fontSize:18,
    color:COLORS.black,
    margin:10,
  }

});


