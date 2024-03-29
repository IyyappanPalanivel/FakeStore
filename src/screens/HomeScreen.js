import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  FlatList,
  ScrollView,
} from 'react-native';
import { COLORS, FONTS, SIZES } from '../utils/Theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { API_CONSTANTS, CATEGORY_LIST, STRINGS } from '../utils/Constant';
import ProductItem from '../components/ProductItem';
import Loader from '../components/Loader';
import CategoryItem from '../components/CategoryItem';

import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../redux/actions';


const HomeScreen = ({ navigation }) => {

  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  const renderItem = ({ item }) => (
    <ProductItem item={item} />
  );

  const renderCategory = ({ item }) => (
    <CategoryItem item={item} />
  );

  const getProducts = async () => {
    try {
      const response = await fetch(API_CONSTANTS.GET_PRODUCTS);
      const json = await response.json();
      //console.log(JSON.stringify(json))
      setProducts(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <SafeAreaView style={styles.container}>

      <Loader loading={loading} />

      {/* Topbar menu & search */}
      <View style={{ flexDirection: 'row' }}>

        <MaterialIcons style={styles.menuIcon} name="list" color={COLORS.tabBarInactive} size={24}
          onPress={() => navigation.navigate('MenuStack')}
        />
        <View style={styles.inputContainer}>
          <MaterialIcons style={styles.menuIcon} name="search" color={COLORS.tabBarInactive} size={22} />
          <TextInput
            style={styles.input}
            placeholder="Search"
            keyboardType='default'
            onChangeText={newSearch => setSearch(newSearch)}
          />
        </View>

      </View>

      {/* Product List with Tagline & Category List on header */}
      <FlatList
          ListHeaderComponent={
            <>
              {/* Tag line */}
              <Text style={[FONTS.title, { marginVertical: SIZES.padding }]}>{STRINGS.tagLine}</Text>
              {/* Category List */}
              <FlatList
                data={CATEGORY_LIST}
                renderItem={renderCategory}
                keyExtractor={(item) => item.cid}
                horizontal={true}
              />
              <Text style={FONTS.title}>All Products</Text>
            </>
          }
          data={products}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />

    </SafeAreaView >
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.greyBackground,
    paddingTop: SIZES.padding,
    paddingLeft: SIZES.padding,
  },
  splashText: {
    color: 'white',
    fontSize: 40,
    marginTop: 20,

  },
  menuIcon: {
    alignSelf: 'center'
  },
  input: {

  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#868686',
    borderRadius: SIZES.radiusCard,
    marginHorizontal: SIZES.padding,
    paddingStart: SIZES.base,
    alignItems: 'center',
    marginBottom: 10,
  },
});


