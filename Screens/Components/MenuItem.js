import React from 'react';
import {StyleSheet, View, Text,Image,TouchableOpacity} from 'react-native';
import { COLORS, FONTS, SIZES } from '../../Utils/Theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const MenuItem = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <Text style={[FONTS.menuText,{flex:1}]}>{title}</Text>
      <MaterialIcons name='chevron-right' size={24} color={COLORS.black}/>
    </TouchableOpacity>
);

export default MenuItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: COLORS.white,
    padding: 20,
    marginVertical: 8,
    borderRadius: SIZES.radius,
    alignItems:'center',
    flexDirection:'row',
  },
  pImage: {
    height: 100,
    width: 100,
    resizeMode:'contain'
  },
});