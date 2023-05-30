import {StyleSheet} from 'react-native';
import {Colors, Metrix} from '../config';
import { fonts } from '../config/Constants';

const gStyles = StyleSheet.create({
  shadowCard: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    backgroundColor:Colors.shadowColor,
    elevation: 7,
  },
  text: {
    fontFamily: fonts.Medium,
    fontSize: Metrix.customFontSize(13),
    color: Colors.secondaryColor,
  },
});
export {gStyles};
