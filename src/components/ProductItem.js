import React from 'react';
import {StyleSheet, View, Text,Image} from 'react-native';
import { COLORS, FONTS, SIZES } from '../utils/Theme';

const ProductItem = ({item}) => {

  return (
    <View style={styles.item}>
      <Image style ={styles.pImage} source={{ uri: item.image }} />
      <Text style={FONTS.productTitle}>{item.title}</Text>
      <Text style={FONTS.productDescription}>{item.description}</Text>
      <Text style={FONTS.productPrice}>₹{item.price}</Text>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: COLORS.white,
    padding: 20,
    marginRight: 20,
    marginBottom: 20,
    borderRadius: SIZES.radius,
    alignItems: 'center',
    justifyContent:'center',
  },
  pImage: {
    height: 100,
    width: 100,
    resizeMode:'contain'
  }
});