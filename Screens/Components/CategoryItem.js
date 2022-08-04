import React from 'react';
import {StyleSheet, View, Text,Image} from 'react-native';
import { COLORS, FONTS, SIZES } from '../../Utils/Theme';

const CategoryItem = ({item}) => {

  return (
    <View style={styles.item}>
      <Image style ={styles.pImage} source={{ uri: item.c_imageurl }} />
      <Text style={FONTS.menuText}>{item.c_title}</Text>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flex:1,
    backgroundColor: COLORS.white,
    padding: 5,
    marginVertical: 8,
    marginEnd: 10,
    borderRadius: SIZES.radius,
    width:SIZES.width/3,
    height:SIZES.height/5,
    alignContent:'center',
    justifyContent:'center',
    alignItems:'center',
  },
  pImage: {
    height: 70,
    width: 70,
    resizeMode:'contain',
    alignSelf:'center',
  }
});