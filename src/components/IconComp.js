import React from 'react';
import { TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'
import { Colors, Metrix } from '../config';
import IonIcons from 'react-native-vector-icons/Ionicons'
const IconComp = ({ iconName, iconType, iconStyle, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={{
            ...iconStyle,
            width: Metrix.HorizontalSize(40),
            height: Metrix.HorizontalSize(35),
            borderRadius: 5,
            borderWidth: 1,
            borderColor: Colors.secondaryColor,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <IonIcons type={iconType} name={iconName}
                color={Colors.secondaryColor}
                size={Metrix.customFontSize(25)} />
        </TouchableOpacity>
    )

}
export default IconComp;