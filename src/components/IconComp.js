import React from 'react';
import { TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'
import { Colors, Metrix } from '../config';
import Feather from 'react-native-vector-icons/Feather'
const IconComp = ({ iconName, iconType, iconStyle }) => {
    return (
        <TouchableOpacity style={{
            ...iconStyle,
            width: Metrix.HorizontalSize(40),
            height: Metrix.HorizontalSize(40),
            borderRadius: 15,
            // backgroundColor: Colors.gray,
            borderWidth: 1,
            borderColor: Colors.secondaryColor,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Feather type={iconType} name={iconName}
                color={Colors.secondaryColor}
                size={Metrix.customFontSize(25)} />
        </TouchableOpacity>
    )

}
export default IconComp;