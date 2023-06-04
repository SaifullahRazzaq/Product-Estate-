import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react';
import { Header } from '../../components';
import { Colors, Metrix } from '../../config';
import { fonts } from '../../config/Constants';
import { gStyles } from '../../styles';

export default function Notifications() {
    const [notifications, setNotifications] = useState([
        {
            id: '1',
            title: '"John Smith" has Rejected booking for the trailer "2022 20 ft Car Trailer',
            time: '2 hours ago',
        },
        {
            id: '2',
            title: '"Mr Renter" has Accepted booking for the trailer "2022 20 ft Car Trailer"',
            time: '3 hours ago',
        },
        {
            id: '3',
            title: "Login successfully at 9/22/2022 3:06:23 PM",
            time: '5 hours ago',
        },
        {
            id: '4',
            title: "Login successfully at 9/22/2022 3:06:23 PM",
            time: '5 hours ago',
        },
        {
            id: '5',
            title: "Login successfully at 9/22/2022 3:06:23 PM",
            time: '5 hours ago',
        },
        {
            id: '6',
            title: "Login successfully at 9/22/2022 3:06:23 PM",
            time: '5 hours ago',
        },
    ]);

    const renderNotifications = ({ item }) => (
        <>
            <View style={styles.notificationItem}>
                <Text style={gStyles.text} numberOfLines={2}>{item.title}</Text>
            </View>
            <Text style={{ textAlign: 'right', color: Colors.darkGray, fontSize: Metrix.customFontSize(12) }}>{item?.time}</Text>
        </>
    );
    return (
        <View style={gStyles.shadowCard}>
            <Header />
            <ScrollView style={{ paddingHorizontal: Metrix.HorizontalSize(20), marginVertical: Metrix.VerticalSize(10) }}>
                <Text style={{ ...gStyles.title, marginBottom: Metrix.VerticalSize(0) }}>Notifications</Text>

                <FlatList
                    data={notifications}
                    keyExtractor={(item) => item?.id}
                    renderItem={renderNotifications}
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    notificationItem: {
        paddingHorizontal: Metrix.HorizontalSize(10),
        paddingVertical: Metrix.HorizontalSize(20),
        marginVertical: Metrix.VerticalSize(10),
        backgroundColor: Colors.white,
        borderRadius: 8,
        shadowColor: '#acacac',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 10,
    },

})
