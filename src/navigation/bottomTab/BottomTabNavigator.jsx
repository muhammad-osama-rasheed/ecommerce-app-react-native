import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../../screens/home/Home';
import Products from '../../screens/product/Products';
import Contact from '../../screens/contact/Contact';
import * as Animatable from 'react-native-animatable';
import {MAIN_DARK} from '../../utils/color/Colors';

const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator();

  const TabArr = [
    {
      route: 'Home',
      label: 'Home',
      activeIcon: 'home',
    },
    {
      route: 'Products',
      label: 'Products',
      activeIcon: 'grid',
    },
    {
      route: 'Contact',
      label: 'Contact',
      activeIcon: 'call',
    },
  ];

  const screens = {Home, Products, Contact};

  const TabButton = props => {
    const {item, onPress, accessibilityState} = props;
    const focused = accessibilityState.selected;

    const viewRef = useRef(null);
    const textViewRef = useRef(null);

    useEffect(() => {
      if (focused) {
        viewRef.current.animate({
          0: {scale: 0},
          1: {scale: 1},
        });
        textViewRef.current.animate({0: {scale: 0}, 1: {scale: 1}});
      } else {
        viewRef.current.animate({0: {scale: 1}, 1: {scale: 0}});
        textViewRef.current.animate({0: {scale: 1}, 1: {scale: 0}});
      }
    }, [focused]);

    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={1}
        style={styles.container}>
        <View>
          <Animatable.View
            ref={viewRef}
            duration={800}
            easing="ease-out"
            style={[
              StyleSheet.absoluteFillObject,
              {
                backgroundColor: MAIN_DARK,
                borderRadius: 16,
              },
            ]}
          />
          <Animatable.View
            style={[
              styles.Btn,
              {backgroundColor: focused ? null : 'rgba(35, 43, 93, 0.1)'},
            ]}>
            <Icon
              name={item.activeIcon}
              size={focused ? 14 : 18}
              color={focused ? 'white' : MAIN_DARK}
            />
            <Animatable.View ref={textViewRef}>
              {focused && (
                <Text
                  style={{
                    paddingHorizontal: 5,
                    color: 'white',
                    fontSize: 13,
                    fontFamily: 'Quicksand-SemiBold',
                  }}>
                  {item.label}
                </Text>
              )}
            </Animatable.View>
          </Animatable.View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          width: '90%',
          height: 60,
          marginLeft: '5%',
          position: 'absolute',
          bottom: 16,
          borderRadius: 16,
          // borderTopLeftRadius: 16,
          // borderTopEndRadius: 16,
          borderColor: 'white',
          paddingRight: 7,
        },
      }}>
      {TabArr.map((item, index) => (
        <Tab.Screen
          key={index}
          name={item.route}
          component={screens[item.route]}
          options={{
            tabBarShowLabel: false,
            tabBarButton: props => <TabButton {...props} item={item} />,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  Btn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 16,
  },
});
