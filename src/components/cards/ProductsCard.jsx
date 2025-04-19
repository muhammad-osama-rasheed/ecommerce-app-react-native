import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import {MAIN_DARK, WHITE} from '../../utils/color/Colors';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProductsCard = ({item}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.itemContainer}>
      <View style={{marginBottom: moderateVerticalScale(50)}}>
        {item.slogan !== '' && (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <FontAwesome5 name="crown" size={10} color={MAIN_DARK} />
            <Text
              numberOfLines={1}
              style={{
                fontFamily: 'Quicksand-Regular',
                marginLeft: moderateScale(5),
                fontSize: moderateScale(12),
              }}>
              Top of the week
            </Text>
          </View>
        )}
        <Text
          numberOfLines={1}
          style={{
            fontFamily: 'Quicksand-Bold',
            fontSize: moderateScale(20),
            color: '#000000B3',
            paddingTop: moderateVerticalScale(10),
          }}>
          {item.title}
        </Text>
        <Text
          style={{
            fontFamily: 'Quicksand-Bold',
            fontSize: moderateScale(12),
            color: 'black',
            opacity: 0.5,
          }}>
          $ {item.price}
        </Text>
      </View>

      <View
        style={{
          width: scale(150),
          height: scale(150),
          marginRight: moderateScale(-50),
        }}>
        <Image
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
          }}
          source={item.image}
        />
      </View>

      <View
        style={{
          position: 'absolute',
          bottom: 0,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            width: 85,
            height: 50,
            backgroundColor: 'rgba(35, 43, 93, 0.9)',
            borderTopRightRadius: 20,
            borderBottomLeftRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name="add" size={22} color="white" />
        </TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: moderateScale(20),
          }}>
          <Icon name={'star'} size={17} color={MAIN_DARK} />
          <Text
            style={{
              fontSize: moderateScale(15),
              fontFamily: 'Quicksand-SemiBold',
              marginLeft: moderateScale(4),
              color: '#000000B3',
            }}>
            4.8
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductsCard;

const styles = StyleSheet.create({
  itemContainer: {
    width: '90%',
    alignSelf: 'center',
    height: moderateVerticalScale(160),
    elevation: 5,
    shadowColor: '#6B7280',
    backgroundColor: WHITE,
    marginTop: moderateVerticalScale(20),
    borderRadius: moderateScale(10),
    position: 'relative',
    padding: moderateScale(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
