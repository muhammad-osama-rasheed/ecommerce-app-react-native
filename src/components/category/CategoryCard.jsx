import {Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {moderateScale, scale} from 'react-native-size-matters';
import {MAIN_DARK} from '../../utils/color/Colors';

const CategoryCard = () => {
  const categories = [
    {name: 'All', icon: 'apps'},
    {name: 'Men', icon: 'shoe-formal'},
    {name: 'Women', icon: 'shoe-heel'},
    {name: 'Casual', icon: 'shoe-sneaker'},
    {name: 'Running', icon: 'run'},
    {name: 'Sports', icon: 'soccer'},
    {name: 'Formal', icon: 'tie'},
  ];

  const [selected, setSelected] = useState('All');

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={categories}
      renderItem={({item, index}) => (
        <TouchableOpacity
          onPress={() => setSelected(item.name)}
          key={index}
          style={[
            styles.categoryItemContainer,
            {
              borderColor:
                item.name === selected
                  ? 'rgba(35, 43, 93, 0.8)'
                  : 'rgba(35, 43, 93, 0.1)',
              borderWidth: item.name === selected ? 0.8 : 0.8,
            },
          ]}>
          <Icon name={item.icon} size={24} color={MAIN_DARK} />
          <Text style={styles.title}>{item.name}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  categoryItemContainer: {
    width: scale(65),
    height: scale(65),
    borderRadius: moderateScale(100),
    backgroundColor: 'rgba(35, 43, 93, 0.1)',
    marginHorizontal: moderateScale(10),
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Quicksand-SemiBold',
    fontSize: moderateScale(10),
    color: MAIN_DARK,
  },
});
