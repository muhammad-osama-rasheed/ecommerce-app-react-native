import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {MAIN_DARK, WHITE} from '../../utils/color/Colors';

const HomeCards = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <TouchableOpacity
          onPress={() => Alert.alert('clicked')}
          style={styles.addView}>
          <Icon name={'add'} size={24} color={MAIN_DARK} />
        </TouchableOpacity>
        <View style={styles.cardTop}>
          <Text numberOfLines={1} style={styles.title}>
            {item.title}
          </Text>
          <Icon name={'favorite-outline'} size={18} color={MAIN_DARK} />
        </View>
        <Image
          style={styles.image}
          source={item.image}
          resizeMethod="contain"
        />
        <View style={styles.cardBottom}>
          <Text style={styles.price}>$ {item.price}</Text>
        </View>
      </View>
    </View>
  );
};

export default HomeCards;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    backgroundColor: 'rgba(35, 43, 93, 0.1)',
    borderRadius: moderateScale(16),
    width: '100%',
    paddingHorizontal: moderateScale(5),
    paddingVertical: moderateVerticalScale(10),
  },
  image: {
    width: scale(140),
    height: scale(140),
    alignSelf: 'center',
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: moderateScale(5),
  },
  title: {
    flex: 1,
    fontFamily: 'Quicksand-SemiBold',
    color: MAIN_DARK,
  },
  cardBottom: {paddingHorizontal: moderateScale(5)},
  price: {
    flex: 1,
    fontFamily: 'Quicksand-Bold',
    color: MAIN_DARK,
    fontSize: moderateScale(15),
  },
  addView: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: scale(40),
    height: scale(40),
    backgroundColor: WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: moderateScale(16),
    borderBottomEndRadius: moderateScale(16),
    zIndex: 1,
  },
});
