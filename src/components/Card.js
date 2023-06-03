import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { Colors, Images, Metrix } from '../config';
import { gStyles } from '../styles';

const Card = ({
  item = {},
  cardStyle = {},
  imageStyle,
  onPress = () => { },
}) => {
  //   const user = useSelector(state => state?.AuthReducer?.user);

  return (
    <View style={{
      ...cardStyle,
      alignSelf: 'center',
      shadowColor: '#000',
      borderWidth: 1,
      borderColor: Colors.shadowColor,
      borderBottomEndRadius: 15,
      borderBottomLeftRadius: 15,
      backgroundColor: Colors.shadowColor,
      // shadowColor: Colors.white,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    }}>
      <ImageBackground
        borderBottomLeftRadius={15}
        borderBottomRightRadius={15}
        // borderRadius={15}
        source={{ uri: item?.image }}
        style={{
          resizeMode: 'stretch',
          width: Metrix.HorizontalSize(260),
          height: Metrix.VerticalSize(150),
          ...imageStyle,
        }}
      >
        <TouchableOpacity style={{
          alignSelf: 'flex-end',
          marginHorizontal: Metrix.HorizontalSize(10),
          marginVertical: Metrix.VerticalSize(5),
          borderWidth: 1,
          // // opacity: 0,
          borderColor: Colors.gray,
          backgroundColor: Colors.gray,
          borderRadius: 5,
          width: Metrix.HorizontalSize(20),
          height: Metrix.VerticalSize(20),
          paddingLeft: 5,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start'
        }}>
          <Fontisto
            name='bookmark'
            // 'bookmark-alt'
            // style={{}}
            color={Colors.secondaryColor}
            size={Metrix.customFontSize(12)} />
        </TouchableOpacity>
      </ImageBackground>
      <View style={{ padding: Metrix.HorizontalSize(10) }}>
        <Text style={{ ...gStyles.title, fontSize: Metrix.customFontSize(18) }}>{item?.title}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: Metrix.VerticalSize(5) }}>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Fontisto name='map-marker-alt' color={Colors.primaryColor} size={Metrix.customFontSize(15)} />
            <Text style={{ ...gStyles.text, color: Colors.darkGray, marginHorizontal: Metrix.customFontSize(5) }}>{item?.location}</Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Fontisto name='star' color={Colors.yellow} size={Metrix.customFontSize(15)} />
            <Text style={{ ...gStyles.text, color: Colors.secondaryColor, marginHorizontal: Metrix.customFontSize(5) }}>{item?.rating}</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: Metrix.VerticalSize(5) }}>
          <Text style={{ ...gStyles.text, color: Colors.darkGray, marginHorizontal: Metrix.customFontSize(5) }}>${750.00}/<Text style={{ ...gStyles.text, color: Colors.gray }}>{item?.date}</Text></Text>
          <Fontisto name='heart' color={Colors.secondaryColor} size={Metrix.customFontSize(15)} />
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  // container: {
  //   // justifyContent: 'center',
  //   alignSelf: 'center',
  //   shadowColor: '#000',
  //   borderWidth: 1,
  //   borderColor: Colors.shadowColor,
  //   borderBottomEndRadius: 15,
  //   borderBottomLeftRadius: 15,
  //   backgroundColor: Colors.shadowColor,
  //   // shadowColor: Colors.white,
  //   shadowColor: "#000",
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 3.84,
  //   elevation: 5,
  // },
});
