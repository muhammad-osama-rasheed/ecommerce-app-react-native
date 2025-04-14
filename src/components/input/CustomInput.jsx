import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {WHITE} from '../../utils/color/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';

const CustomInput = ({icon, placeholder, multiline, value, onChangeText}) => {
  return (
    <View style={styles.inputContainer}>
      <Icon name={icon} color={WHITE} size={20} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        placeholder={placeholder}
        multiline={multiline ? true : false}
        numberOfLines={4}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputContainer: {
    borderBottomWidth: moderateScale(1),
    borderBottomColor: WHITE,
    marginVertical: moderateVerticalScale(10),
    borderStyle: 'dotted',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  input: {
    flex: 1,
    fontFamily: 'Quicksand-Regular',
    fontSize: moderateScale(15),
    color: WHITE,
  },
});
