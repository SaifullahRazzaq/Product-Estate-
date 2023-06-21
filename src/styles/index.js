import { StyleSheet } from 'react-native';
import { Colors, Metrix } from '../config';
import { fonts } from '../config/Constants';

const gStyles = StyleSheet.create({
  shadowCard: {
    flex: 1,
    shadowColor: '#000',
    height: '100%',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    backgroundColor: Colors.white,
    elevation: 3,
    padding: Metrix.HorizontalSize(10)
  },
  text: {
    fontFamily: fonts.Regular,
    fontSize: Metrix.customFontSize(13),
    color: Colors.secondaryColor,
  },
  normalText: {
    fontFamily: fonts.Regular,
    fontSize: Metrix.customFontSize(20),
    color: Colors.secondaryColor,
  },
  title: {
    fontFamily: fonts.Medium,
    fontSize: Metrix.customFontSize(28),
    color: Colors.secondaryColor,
  },
  description: {
    fontFamily: fonts.Regular,
    fontSize: Metrix.customFontSize(16),
    color: Colors.darkGray,
  }
});
export { gStyles };
