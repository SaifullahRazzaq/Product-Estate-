import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  ActivityIndicator,
} from 'react-native';
import {useSelector} from 'react-redux';
import {Colors, Metrix} from '../config';
import {fonts} from '../config/Constants';

function Button({
  buttonText = 'Hello',
  textStyle = {},
  btnStyle = {},
  onPress = () => {},
  shadow = false,
  disabled = false,
  preIcon = null,
  postIcon = null,
  showLoading = false,
}) {
  const {loading} = useSelector(state => state.LoaderReducer);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={disabled}
      style={
        shadow
          ? {...styles.buttonStyle, ...styles.btnShadow, ...btnStyle}
          : {...styles.buttonStyle, ...btnStyle}
      }
      onPress={onPress}>
      {preIcon}
      {loading && showLoading ? (
        <ActivityIndicator size="small" color={Colors.white} />
      ) : (
        <Text style={{...styles.btnTextStyle, ...textStyle}}>{buttonText}</Text>
      )}
      {postIcon}
    </TouchableOpacity>
  );
}

export default Button;

const styles = StyleSheet.create({
  buttonStyle: {
    width:Metrix.HorizontalSize(360),
    alignSelf:'center',
    paddingVertical: Metrix.VerticalSize(15),
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primaryColor,
  },
  btnShadow: {
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 5},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 10,
  },

  btnTextStyle: {
    fontSize: Metrix.customFontSize(14),
    color: Colors.white,
    fontFamily: fonts.Medium,
  },
});
