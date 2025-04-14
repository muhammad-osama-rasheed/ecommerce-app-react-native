import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {MAIN_DARK, WHITE} from '../../utils/color/Colors';
import {
  moderateScale,
  moderateVerticalScale,
  verticalScale,
} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ProductsCard from '../../components/cards/ProductsCard';
import {products} from '../../utils/data/Data';

const Products = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[1, 1]}
        renderItem={({item, index}) => {
          return (
            <View>
              {index === 0 && (
                <View style={styles.topContainer}>
                  <View style={styles.topIconsContainer}>
                    <View style={styles.leftIconsContainer}>
                      <Icon name={'account-circle'} color={WHITE} size={18} />
                      <Text style={styles.nameText}>Osama</Text>
                    </View>
                    <View style={styles.rightIconsContainer}>
                      <Icon name={'shopping-cart'} color={WHITE} size={18} />
                      <Icon name={'notifications'} color={WHITE} size={18} />
                    </View>
                  </View>
                  <View style={styles.searchBar}>
                    <Icon name={'search'} size={20} color={MAIN_DARK} />
                    <TextInput
                      style={styles.searchInput}
                      placeholder="What are you looking for?"
                      placeholderTextColor={MAIN_DARK}
                      cursorColor={MAIN_DARK}
                    />
                  </View>
                </View>
              )}
              {index === 1 && (
                <View style={styles.productCardContainer}>
                  <FlatList
                    data={products}
                    renderItem={({item, index}) => <ProductsCard item={item} />}
                  />
                </View>
              )}
            </View>
          );
        }}
      />
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
    paddingBottom: moderateVerticalScale(80),
  },
  topContainer: {
    width: '100%',
    height: verticalScale(110),
    backgroundColor: MAIN_DARK,
    borderBottomLeftRadius: moderateScale(40),
    borderBottomEndRadius: moderateScale(40),
    justifyContent: 'center',
  },

  topIconsContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(20),
  },

  rightIconsContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },

  leftIconsContainer: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },

  nameText: {
    color: WHITE,
    fontFamily: 'Quicksand-SemiBold',
    fontSize: moderateScale(14),
    marginBottom: moderateVerticalScale(3),
  },

  searchBar: {
    width: '80%',
    height: verticalScale(42),
    backgroundColor: WHITE,
    elevation: 5,
    borderRadius: moderateScale(10),
    position: 'absolute',
    bottom: moderateVerticalScale(-18),
    left: '10%',
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  searchInput: {
    flex: 1,
    paddingHorizontal: moderateScale(10),
    color: '#000000B3',
    fontFamily: 'Quicksand-Regular',
  },
  productCardContainer: {
    width: '100%',
    marginVertical: moderateVerticalScale(40),
  },
});
