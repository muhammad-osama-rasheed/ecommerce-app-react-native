import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import {MAIN_DARK, WHITE} from '../../utils/color/Colors';
import {
  moderateScale,
  moderateVerticalScale,
  verticalScale,
} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MyCarousel from '../../components/carousel/MyCarousel';
import CategoryCard from '../../components/category/CategoryCard';
import HomeCards from '../../components/cards/HomeCards';

const Home = () => {
  const cardData = [
    {
      id: 1,
      image: require('../../images/shoes1.png'),
      title: 'Air Jordan 3',
      price: '225.00',
    },

    {
      id: 2,
      image: require('../../images/shoes2.png'),
      title: 'Air Jordan 4',
      price: '150.00',
    },

    {
      id: 3,
      image: require('../../images/shoes3.png'),
      title: 'Nike Air Force',
      price: '115.00',
    },
    {
      id: 4,
      image: require('../../images/shoes4.png'),
      title: 'Nike Air Zoom',
      price: '95.00',
    },
    {
      id: 5,
      image: require('../../images/shoes5.png'),
      title: 'Nike SB Zoom',
      price: '76.97',
    },
    {
      id: 6,
      image: require('../../images/shoes6.png'),
      title: 'Nike Court Vision Mid',
      price: '70.97',
    },
  ];
  return (
    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />

      <FlatList
        data={[1, 1, 1, 1]}
        renderItem={({item, index}) => {
          return (
            <View key={index}>
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
                <View style={styles.carouselContainer}>
                  <MyCarousel />
                </View>
              )}
              {index === 2 && (
                <View style={styles.categoryCardContainer}>
                  <CategoryCard />
                </View>
              )}
              {index === 3 && (
                <View
                  style={{
                    marginTop: moderateVerticalScale(20),
                    width: '90%',
                    alignSelf: 'center',
                  }}>
                  <Text style={styles.headingText}>
                    New Arrivals! Special for you.
                  </Text>
                  <FlatList
                    numColumns={2}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    data={cardData}
                    contentContainerStyle={{
                      paddingBottom: 700,
                    }}
                    columnWrapperStyle={{
                      gap: 8,
                      marginBottom: moderateVerticalScale(16),
                    }}
                    renderItem={({item, index}) => <HomeCards item={item} />}
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

export default Home;

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
  carouselContainer: {
    marginVertical: moderateVerticalScale(40),
    width: '100%',
    alignItems: 'center',
  },

  categoryCardContainer: {
    marginBottom: moderateVerticalScale(20),
    width: '100%',
    alignSelf: 'center',
  },
  headingText: {
    fontFamily: 'Quicksand-SemiBold',
    color: MAIN_DARK,
    fontSize: moderateScale(16),
    alignSelf: 'center',
    marginBottom: moderateVerticalScale(20),
  },
});
