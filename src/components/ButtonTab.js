import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {Colors, Metrix} from '../config';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {fonts} from '../config/Constants';
const ButtonTab = ({ButtonTabList,showIcon = false,iconColor,tabStyles}) => {
  const renderButtonTabs = ({item, index, }) => {
    return (
      <View style={{marginTop: Metrix.VerticalSize(15)}}>
        <View
          style={{
            ...tabStyles,
            marginRight: Metrix.HorizontalSize(10),
            alignItems: 'center',
            flexDirection: 'row',
            padding: Metrix.VerticalSize(7),
            borderWidth: 1,
            borderColor: Colors.gray,
            borderRadius: 5,
            justifyContent:'center'
            // backgroundColor:index
          }}>
          {!showIcon && (
            <MaterialCommunityIcons
              size={Metrix.customFontSize(20)}
              color={iconColor?iconColor:Colors.primaryColor}
              name={item?.tabIcon}
              style={{marginHorizontal: Metrix.HorizontalSize(5)}}
            />
          )}
          <Text
            style={{
              fontSize: Metrix.customFontSize(12),
              color: Colors.darkGray,
              fontFamily: fonts.Medium,
              
            }}>
            {item?.title}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      keyExtractor={index => {
        index.toString();
      }}
      data={ButtonTabList}
      renderItem={renderButtonTabs}
    />
  );
};

export default ButtonTab;
