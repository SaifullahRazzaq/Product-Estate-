import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors, Metrix, NavigationService } from '../../config'
import { Button, Header } from '../../components'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { fonts } from '../../config/Constants';
import { gStyles } from '../../styles';

const list = [
    {
        id: '1',
        name: 'Profile',
        icon: <FontAwesome name='user' size={Metrix.customFontSize(15)} color={Colors.secondaryColor} />,
        onPress: () => NavigationService.navigate('Profile')
    },
    {
        id: '2',
        name: 'My Reviews',
        icon: <FontAwesome name='star' size={Metrix.customFontSize(15)} color={Colors.secondaryColor} />,
        onPress: () => NavigationService.navigate('MyReviews')
    },
    {
        id: '3',
        name: 'Notifications',
        icon: <FontAwesome name='bell' size={Metrix.customFontSize(15)} color={Colors.secondaryColor} />,
        onPress: () => NavigationService.navigate('Notifications')
    },
    {
        id: '4',
        name: 'Favourites',
        icon: <FontAwesome name='bookmark' size={Metrix.customFontSize(15)} color={Colors.secondaryColor} />,
        onPress: () => NavigationService.navigate('Favourites')
    },
    {
        id: '5',
        name: 'My Bank Account',
        icon: <FontAwesome name='bank' size={Metrix.customFontSize(15)} color={Colors.secondaryColor} />,
        onPress: () => NavigationService.navigate('BankAccounts')
    },
    {
        id: '6',
        name: 'Privacy Policy',
        icon: <FontAwesome name='file-o' size={Metrix.customFontSize(15)} color={Colors.secondaryColor} />,
        onPress: () => NavigationService.navigate('PrivacyPolicy')
    },
    {
        id: '7',
        name: 'Terms & Conditions',
        icon: <FontAwesome name='file-o' size={Metrix.customFontSize(15)} color={Colors.secondaryColor} />,
        onPress: () => NavigationService.navigate('TermsAndConditions')
    },
    {
        id: '8',
        name: 'Contact Us',
        icon: <MaterialIcons name='call' size={Metrix.customFontSize(15)} color={Colors.secondaryColor} />,
        onPress: () => NavigationService.navigate('ContactUs')
    },
]

export default function More() {
    return (
        <View style={{ ...gStyles.shadowCard }}>
            <Header title="More" />
            <ScrollView style={{ marginTop: Metrix.VerticalSize(10) }}>
                {list?.map((val, ind) => {
                    return (
                        <View key={val.id}>
                            <TouchableOpacity onPress={val?.onPress} activeOpacity={0.6} style={styles.moreItem}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    {val?.icon}
                                    <Text style={{ ...gStyles.text, marginLeft: Metrix.HorizontalSize(12) }}>{val?.name}</Text>
                                </View>
                                <AntDesign name='arrowright' size={Metrix.customFontSize(15)} color={Colors.secondary} />
                            </TouchableOpacity>
                            {(ind != list?.length - 1) && <View style={{ height: 1, backgroundColor: Colors.secondary }} />}
                        </View>
                    )
                })
                }
                <Button buttonText='Logout'
                    onPress={() => NavigationService.navigate("AuthStack")}
                    btnStyle={{ marginVertical: 20 }}
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({

    moreItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: Metrix.VerticalSize(20)
    },
    title: {
        fontSize: Metrix.customFontSize(13),
        marginLeft: Metrix.HorizontalSize(15),
        fontFamily: fonts.Regular,
    }
})