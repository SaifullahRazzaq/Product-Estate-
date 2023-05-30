import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Colors, Images, Metrix} from '../config';

const Card = ({
  item = {},
  Name = '',
  image = '',
  average = '',
  onButtonPress = '',
  TrailorName = '',
  onPress = () => {},
}) => {
  //   const user = useSelector(state => state?.AuthReducer?.user);

  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'center'}}>
        <Image
          source={{
            uri: 'https://www.propertypro.ng/blog/wp-content/uploads/2017/09/210-780x405.jpg',
          }}
          style={{
            resizeMode: 'contain',
            width: Metrix.HorizontalSize(200),
            height: Metrix.VerticalSize(100),
          }}
        />
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    top: 100,
    width: '90%',
    height: Metrix.VerticalSize(150),
    alignSelf: 'center',
    marginTop: 16,
    padding: 10,
    shadowColor: '#000',
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 25,
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    backgroundColor: Colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
});
