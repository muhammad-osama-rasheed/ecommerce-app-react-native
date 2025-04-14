import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {MAIN_DARK, WHITE} from '../../utils/color/Colors';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';

const BgButton = ({title, onClick}) => {
  return (
    <TouchableOpacity onPress={onClick} style={styles.btn}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default BgButton;

const styles = StyleSheet.create({
  btn: {
    width: '100%',
    padding: moderateScale(10),
    backgroundColor: WHITE,
    marginVertical: moderateVerticalScale(20),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(12),
  },
  text: {
    color: MAIN_DARK,
    fontFamily: 'Quicksand-SemiBold',
  },
});
