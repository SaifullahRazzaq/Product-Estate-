import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Colors, Metrix, NavigationService } from '../config';
import { gStyles } from '../styles';
import { fonts } from '../config/Constants';
import { IconComp, Input } from './index';
import Ionicons from 'react-native-vector-icons/Ionicons'
const Header = ({ title, location, showLocation = false, showSearch = false, showBack = true, rightIconName, showImage = false }) => {
    const [search, setSearch] = useState("")
    const goBack = () => {
        NavigationService.goBack('')
    }
    return (<View style={styles.container}>
        <View style={{ ...styles.rowContainer }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: "50%" }}>
                <IconComp iconName={showBack ? 'arrow-back' : 'menu'} onPress={goBack} />
                {showLocation ?
                    <View style={styles.textContainer}>
                        <Text style={{ ...gStyles.text, color: Colors.primaryColor }}>Location</Text>
                        <Text style={{ ...gStyles.text, fontFamily: fonts.Bold }}>{location}</Text>
                    </View> :
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={{ ...gStyles.title, fontSize: Metrix.customFontSize(20), fontFamily: fonts.Black }}>{title}</Text>
                    </View>
                }
            </View>
            <View>
                {rightIconName ? <IconComp iconName={rightIconName} /> : showImage ? <Image source={{ uri: 'https://as2.ftcdn.net/v2/jpg/02/14/74/61/1000_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg' }} resizeMode='center' style={styles.imageStyle} />
                    : null}
            </View>
        </View>
        {/* search area */}
        {
            showSearch &&
            <View style={styles.searchContainer}>
                <View style={styles.eyeIconStyle}>
                    <Ionicons
                        name={'search'}
                        color={Colors.secondaryColor}
                        size={Metrix.customFontSize(20)}
                    />
                </View>

                <Input
                    value={"Seacrh Here"}
                    style={{ paddingLeft: Metrix.HorizontalSize(40), width: "85%" }}
                    onChangeText={text => setSearch(text)}
                    placeholder={'Search Favourites'}
                />

                <IconComp iconName='options' iconStyle={{ justifyContent: 'center', top: 5 }} />
            </View>
        }
    </View >
    )
}
export default Header;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        justifyContent: 'center',
        paddingTop: Metrix.HorizontalSize(60),
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textContainer: {
        marginHorizontal: Metrix.HorizontalSize(10),
        justifyContent: 'center',
        bottom: 5
    },
    imageStyle: {
        width: Metrix.HorizontalSize(60),
        height: Metrix.VerticalSize(50),
        borderRadius: 15
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    eyeIconStyle: {
        // width: "100%",
        position: 'absolute',
        zIndex: 100,
        top: Metrix.VerticalSize(20),
        left: Metrix.HorizontalSize(10),
    },
})