import React, { Component, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
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

    const renderPeopleNearData = ({ item, index }) => {
        return (
            <View style={{ margin: Metrix.VerticalSize(5), paddingTop: Metrix.VerticalSize(10) }}>
                <Card item={item} />
            </View>
        )
    }

    const renderRecommendedData = ({ item, index }) => {
        return (
            <View style={{ margin: Metrix.VerticalSize(5), paddingTop: Metrix.VerticalSize(10) }}>
                <Card imageStyle={{ width: "100%" }} cardStyle={{ width: "100%" }} item={item} />
            </View>
        )

    }
    return (
        <View style={{ ...gStyles.shadowCard, padding: Metrix.HorizontalSize(10) }}>
            <Header />
            {/* tab here */}

            <View style={{ flexGrow: 1 }}>
                <View style={styles.title}>
                    <Text style={{ ...gStyles.title, fontSize: Metrix.customFontSize(18), left: 6 }}>People Nearest You</Text>
                    <Text style={{ ...gStyles.text, color: Colors.primaryColor }}>View All</Text>
                </View>
                <FlatList
                    horizontal
                    keyExtractor={(index) => { index.toString() }}
                    data={dataSoure}
                    renderItem={renderPeopleNearData}
                />
            </View>

            <View style={{ flexGrow: 1 }}>
                <View style={styles.title}>
                    <Text style={{ ...gStyles.title, fontSize: Metrix.customFontSize(18), left: 6 }}>Recommend For You</Text>
                    <Text style={{ ...gStyles.text, color: Colors.primaryColor }}>View All</Text>
                </View>
                <FlatList
                    keyExtractor={(index) => { index.toString() }}
                    data={dataSoure}
                    renderItem={renderRecommendedData}
                    contentContainerStyle={{ marginTop: Metrix.VerticalSize(10), marginBottom: Metrix.VerticalSize(100) }}

                />
            </View>
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