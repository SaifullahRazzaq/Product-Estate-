import React from 'react';
import {
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import {Colors, Images, Metrix} from '../config';

function TextField({
  secureTextEntry = false,
  onChangeText = () => {},
  value = '',
  placeholderTextColor = Colors.secondary,
  style = {},
  multiline = false,
  keyboardType = 'default',
  noOfLines = 1,
  placeholder = '',
  disable = true,
  maxLength,
}) {
  return (
    <>
      <TextInput
        maxLength={maxLength}
        style={{...styles.input, ...style}}
        placeholder={placeholder}
        keyboardType={keyboardType}
        value={value}
        numberOfLine={noOfLines}
        multiline={multiline}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        placeholderTextColor={placeholderTextColor}
        editable={disable}
        // onSubmitEditing={() => Keyboard.dismiss()}
      />
    </>
  );
}

export default TextField;

const styles = StyleSheet.create({
  iconStyle: {
    position: 'absolute',
    zIndex: 100,
    top: Metrix.VerticalSize(22),
  },
  input: {
    marginTop: Metrix.VerticalSize(10),
    width: '100%',
    alignSelf:'center',
    height: Metrix.VerticalSize(44),
    fontSize: Metrix.customFontSize(12),
    padding: 5,
    paddingHorizontal: Metrix.HorizontalSize(5),
    color: Colors.black,
    borderRadius: 8,
    borderColor: Colors.gray,
    borderWidth: 1,
  },
});
