import React, { Component, useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Card, Header } from '../../components';
import { Colors, Metrix } from '../../config';
import { gStyles } from '../../styles';


const Home = () => {
    const [dataSoure, setDataSource] = useState([
        {
            image: "https://www.propertypro.ng/blog/wp-content/uploads/2017/09/210-780x405.jpg",
            title: "Duplex Appartments",
            location: "Sadar Karachi",
            rating: 5.0,
            date: "month",
            price: 750
        },
        {
            image: "https://homezonline.in/wp-content/uploads/2023/04/Stylish-one-storey-house-design-.jpg",
            title: "Narcoa Appartments",
            location: "Sadar Karachi",
            rating: 5.0,
            price: 750,
            date: "month"

        },
        {
            image: "https://psgroup.in/uploads/Gallery/VYOM-Amphitheatre_gallery-image.jpg",
            title: "Passion Home Appartments",
            location: "Sadar Karachi",
            rating: 5.0,
            date: "month",
            price: 750

        },
        {
            image: "https://psgroup.in/blog/wp-content/uploads/2021/02/photo-1564013799919-ab600027ffc6.jpeg",
            title: "LightHouse Appartments",
            location: "Sadar Karachi",
            rating: 5.0,
            date: "month",
            price: 750

        },
        {
            image: "https://www.propertypro.ng/blog/wp-content/uploads/2017/09/210-780x405.jpg",
            title: "Double Story Appartments",
            location: "Sadar Karachi",
            rating: 5.0,
            date: "month",
            price: 750

        }
    ])

    const renderItem = ({ item, index }) => {
        return (
            <View style={{ margin: Metrix.VerticalSize(5), paddingTop: Metrix.VerticalSize(10) }}>
                <Card
                    imageStyle={{ width: "100%" }}
                    cardStyle={{ width: "100%" }}
                    item={item} />
            </View>
        )

    }
    return (
        <View style={{ ...gStyles.shadowCard }}>
            <Header
                title='List'
                showBack={true}
                rightIconName='add'
                showSearch
            />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: Metrix.VerticalSize(80) }}>
                {/* tab here */}
                <View >
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(index) => { index.toString() }}
                        data={dataSoure}
                        contentContainerStyle={{ paddingVertical: Metrix.VerticalSize(10) }}
                        renderItem={renderItem}
                    />
                </View>
            </ScrollView>
        </View>
    )
}
export default Home;

const styles = StyleSheet.create({
    title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: Metrix.VerticalSize(20)
    }
})