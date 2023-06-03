import React from 'react';
import { Image, Platform, PlatformColor, StyleSheet, Text, View } from 'react-native';
import { Colors, Metrix } from '../config';
import { gStyles } from '../styles';
import { fonts } from '../config/Constants';
import TextField from './Input';
import { IconComp } from '.';
const Header = ({ title, location }) => {
    return (<View style={styles.container}>
        <View style={styles.rowContainer}>
            <View style={{ flexDirection: 'row' }}>
                <IconComp iconName='menu' />
                <View style={styles.textContainer}>
                    <Text style={{ ...gStyles.text, color: Colors.primaryColor }}>Location</Text>
                    <Text style={{ ...gStyles.text, fontFamily: fonts.Bold }}>Saddar Karachi ,Pakistan</Text>
                </View>
            </View>
            <View>
                <Image source={{ uri: 'https://as2.ftcdn.net/v2/jpg/02/14/74/61/1000_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg' }} resizeMode='contain' style={styles.imageStyle} />
            </View>
        </View>
        {/* search area */}
        <View style={styles.searchContainer}>
            <TextField style={{ width: Metrix.HorizontalSize(300), marginHorizontal: Metrix.HorizontalSize(5) }} />
            <IconComp iconName='filter' iconStyle={{ marginTop: 5 }} />

        </View>
    </View>
    )
}
export default Header;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',
        width: "100%",
        // justifyContent: 'center',
        paddingTop: Platform.OS = "ios" ? Metrix.HorizontalSize(60) : 0,
        // paddingHorizontal: Metrix.HorizontalSize(15)
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
        width: Metrix.HorizontalSize(70),
        height: Metrix.VerticalSize(50),
        borderRadius: 10
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: Metrix.VerticalSize(20)
    }
})