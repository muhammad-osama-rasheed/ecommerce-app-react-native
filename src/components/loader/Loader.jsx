import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {MAIN_DARK} from '../../utils/color/Colors';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';

const Loader = () => {
  return (
    <View style={styles.loaderOverlay}>
      <View style={styles.loaderBox}>
        <ActivityIndicator size="large" color="#fff" />
        <Text style={styles.loaderText}>Please wait...</Text>
      </View>
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  loaderOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99,
  },

  loaderBox: {
    backgroundColor: MAIN_DARK,
    padding: moderateScale(20),
    borderRadius: moderateScale(10),
    alignItems: 'center',
    elevation: 10,
  },

  loaderText: {
    color: 'white',
    marginTop: moderateVerticalScale(10),
    fontSize: moderateScale(16),
    fontWeight: '600',
  },
});
