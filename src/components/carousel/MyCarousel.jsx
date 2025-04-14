import React from 'react';
import {View, Text, Dimensions, StyleSheet, Image} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {moderateScale} from 'react-native-size-matters';

const {width} = Dimensions.get('window');

const MyCarousel = () => {
  const data = [
    {image: require('../../images/banner2.png')},
    {image: require('../../images/banner1.png')},
  ];

  return (
    <Carousel
      width={width}
      height={160}
      data={data}
      scrollAnimationDuration={1000}
      autoPlay={true}
      loop={true}
      useNativeDriver={true}
      autoPlayInterval={2000}
      renderItem={({item, index}) => (
        <View key={index} style={styles.item}>
          <Image source={item.image} style={styles.image} resizeMode="cover" />
        </View>
      )}
    />
  );
};

export default MyCarousel;

const styles = StyleSheet.create({
  item: {
    flex: 1,
    borderRadius: moderateScale(20),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: moderateScale(10),
    overflow: 'hidden',
  },
  text: {
    fontSize: moderateScale(30),
    color: '#fff',
  },

  image: {
    width: '100%',
    height: '100%',
    borderRadius: moderateScale(20),
  },
});
