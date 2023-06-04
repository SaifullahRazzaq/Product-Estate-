import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import { Header, Input } from '../../components';
import { Colors, Metrix, NavigationService } from '../../config';
import { fonts } from '../../config/Constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { gStyles } from '../../styles';


let chatData = [
    {
        id: '1',
        name: 'John Smith',
        lastMessage: '2022 20 ft Car Trailer',
        lastMessageTime: '3 mins ago',
        avatar: 'https://xsgames.co/randomusers/assets/avatars/male/45.jpg'
    },
    {
        id: '2',
        name: 'Steven Fin',
        lastMessage: 'Car Hauler',
        lastMessageTime: '2 hours ago',
        avatar: 'https://xsgames.co/randomusers/assets/avatars/male/66.jpg'
    },
    {
        id: '3',
        name: 'Jackqueline Rose',
        lastMessage: 'Dump Trailer',
        lastMessageTime: '2 days ago',
        avatar: 'https://xsgames.co/randomusers/assets/avatars/female/60.jpg'
    },
    {
        id: '4',
        name: 'Jack Arnold',
        lastMessage: '2022 20 ft Car Trailer',
        lastMessageTime: '3 days ago',
        avatar: 'https://xsgames.co/randomusers/assets/avatars/male/54.jpg'
    },


]
export default function Messages() {
    const [search, setSearch] = useState('');

    const renderChats = ({ item }) => (
        <>
            <TouchableOpacity activeOpacity={0.7} style={styles.chatItem} onPress={() => NavigationService.navigate('Chat', { item })} >
                <View style={styles.chatUserContainer}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={{ uri: item.avatar }}
                            resizeMode={'stretch'}
                            style={styles.image}
                        />
                    </View>
                    <View style={{ marginLeft: Metrix.HorizontalSize(10) }}>
                        <Text style={styles.nameStyle} numberOfLines={1}>{item?.name}</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <MaterialCommunityIcons size={Metrix.customFontSize(18)} color={Colors.textLightColor} name={'car-hatchback'} />
                            <Text style={styles.lastMessageStyle} numberOfLines={1}>{item?.lastMessage}</Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.messgaeTimeStyle} numberOfLines={1}>{item?.lastMessageTime}</Text>
            </TouchableOpacity>
            <View style={{ width: '100%', height: 1, backgroundColor: Colors.secondary }} />
        </>
    );
    return (
        <View style={gStyles.shadowCard}>
            <Header showBack showSearch title="Messages" />
            <ScrollView style={{ marginBottom: Metrix.VerticalSize(60), paddingHorizontal: Metrix.HorizontalSize(20) }}>
                <View>
                    <FlatList
                        data={chatData}
                        scrollT
                        keyExtractor={(item) => item?.id}
                        renderItem={renderChats}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    chatItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: Metrix.VerticalSize(25)
    },
    chatUserContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    imageContainer: {
        height: Metrix.VerticalSize(45),
        width: Metrix.VerticalSize(45),
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
    },
    nameStyle: { ...gStyles.title, fontSize: Metrix.customFontSize(14), marginVertical: Metrix.VerticalSize(3) },
    lastMessageStyle: { fontFamily: fonts.Regular, marginLeft: Metrix.HorizontalSize(5), color: Colors.textLightColor, fontSize: Metrix.customFontSize(12) },
    messgaeTimeStyle: { fontFamily: fonts.Regular, color: Colors.textLightColor, fontSize: Metrix.customFontSize(10) }
})