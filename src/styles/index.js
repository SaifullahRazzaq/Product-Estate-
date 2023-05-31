import {StyleSheet} from 'react-native';
import {Colors, Metrix} from '../config';
import {fonts} from '../config/Constants';

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
    backgroundColor: Colors.shadowColor,
    elevation: 3,
  },
  text: {
    fontFamily: fonts.Medium,
    fontSize: Metrix.customFontSize(13),
    color: Colors.secondaryColor,
  },
  title: {
    fontFamily: fonts.Bold,
    fontSize: Metrix.customFontSize(28),
    color: Colors.secondaryColor,
  },
});
export {gStyles};
