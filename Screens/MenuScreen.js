import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { COLORS,SIZES } from '../Utils/Theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const MenuScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
      
      <Text style={styles.splashText}>Menu</Text>

      <TouchableOpacity style={styles.menuItemContainer}
        onPress={()=> { navigation.navigate('EditProfile') }}
      >
        <MaterialCommunityIcons style={styles.menuIcon} name="account" color={COLORS.white} size={24} />
        <Text style={{color:COLORS.white,marginLeft:20,fontSize:17}}>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItemContainer}>
        <MaterialIcons style={styles.menuIcon} name="assignment" color={COLORS.white} size={24} />
        <Text style={{color:COLORS.white,marginLeft:20,fontSize:17}}>My Orders</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItemContainer}
        onPress={() => navigation.navigate('Image')}
      >
        <MaterialIcons style={styles.menuIcon} name="image" color={COLORS.white} size={24} />
        <Text style={{color:COLORS.white,marginLeft:20,fontSize:17}}>Image Options</Text>
      </TouchableOpacity>

    </View>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: COLORS.primaryBlue,
    padding:SIZES.padding,
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
  menuItemContainer: {
    flexDirection:'row',
    marginTop:SIZES.marginTop,
    borderBottomWidth:1,
    borderBottomColor:COLORS.borderLine,
    paddingBottom:SIZES.padding,
  }
});


