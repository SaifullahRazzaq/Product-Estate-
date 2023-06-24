import React, {Component, useState} from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import {ButtonTab, Card, Header} from '../../components';
import {Colors, Metrix} from '../../config';
import {gStyles} from '../../styles';

const Home = () => {
  const [dataSoure, setDataSource] = useState([
    {
      image:
        'https://www.propertypro.ng/blog/wp-content/uploads/2017/09/210-780x405.jpg',
      title: 'Duplex Appartments',
      location: 'Sadar Karachi',
      rating: 5.0,
      date: 'month',
      price: 750,
    },
    {
      image:
        'https://homezonline.in/wp-content/uploads/2023/04/Stylish-one-storey-house-design-.jpg',
      title: 'Narcoa Appartments',
      location: 'Sadar Karachi',
      rating: 5.0,
      price: 750,
      date: 'month',
    },
    {
      image:
        'https://psgroup.in/uploads/Gallery/VYOM-Amphitheatre_gallery-image.jpg',
      title: 'Passion Home Appartments',
      location: 'Sadar Karachi',
      rating: 5.0,
      date: 'month',
      price: 750,
    },
    {
      image:
        'https://psgroup.in/blog/wp-content/uploads/2021/02/photo-1564013799919-ab600027ffc6.jpeg',
      title: 'LightHouse Appartments',
      location: 'Sadar Karachi',
      rating: 5.0,
      date: 'month',
      price: 750,
    },
    {
      image:
        'https://www.propertypro.ng/blog/wp-content/uploads/2017/09/210-780x405.jpg',
      title: 'Double Story Appartments',
      location: 'Sadar Karachi',
      rating: 5.0,
      date: 'month',
      price: 750,
    },
  ]);
  const [buttonTabList, setButtonTabList] = useState([
    {title: 'Community', tabIcon: 'office-building', id: 0},
    {title: 'Building', tabIcon: 'office-building', id: 1},
    {title: 'House', tabIcon: 'office-building', id: 2},
    {title: 'Appartments', tabIcon: 'office-building', id: 3},
    {title: 'Flats', tabIcon: 'office-building', id: 4},
    {title: 'Pent House', tabIcon: 'office-building', id: 5},
  ]);
  const renderPeopleNearData = ({item, index}) => {
    return (
      <View
        style={{
          margin: Metrix.VerticalSize(5),
          paddingTop: Metrix.VerticalSize(10),
        }}>
        <Card item={item} />
      </View>
    );
  };

  const renderRecommendedData = ({item, index}) => {
    return (
      <View
        style={{
          margin: Metrix.VerticalSize(5),
          paddingTop: Metrix.VerticalSize(10),
        }}>
        <Card
          imageStyle={{width: '100%'}}
          cardStyle={{width: '100%'}}
          item={item}
        />
      </View>
    );
  };
  return (
    <View style={{...gStyles.shadowCard}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: Metrix.VerticalSize(80)}}>
        <Header
          showBack={false}
          showImage={true}
          showLocation={true}
          showSearch={true}
          location="Saddar Karachi,Pakistan"
        />
        {/* tab here */}
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ButtonTab ButtonTabList={buttonTabList} />
        </View>
        {/*  */}

        <View>
          <View style={styles.title}>
            <Text
              style={{
                ...gStyles.title,
                fontSize: Metrix.customFontSize(18),
                left: 6,
              }}>
              Nearest You
            </Text>
            <Text style={{...gStyles.text, color: Colors.primaryColor}}>
              View All
            </Text>
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            keyExtractor={index => {
              index.toString();
            }}
            data={dataSoure}
            renderItem={renderPeopleNearData}
          />
        </View>

        <View>
          <View style={styles.title}>
            <Text
              style={{
                ...gStyles.title,
                fontSize: Metrix.customFontSize(18),
                left: 6,
              }}>
              Recommend For You
            </Text>
            <Text style={{...gStyles.text, color: Colors.primaryColor}}>
              View All
            </Text>
          </View>
          <FlatList
            horizontal
            showsVerticalScrollIndicator={false}
            keyExtractor={index => {
              index.toString();
            }}
            data={dataSoure}
            renderItem={renderRecommendedData}
          />
        </View>

        {/* OutSIde Range */}
        <View style={{flexGrow: 1}}>
          <View style={styles.title}>
            <Text
              style={{
                ...gStyles.title,
                fontSize: Metrix.customFontSize(18),
                left: 6,
              }}>
              Other House For You
            </Text>
            <Text style={{...gStyles.text, color: Colors.primaryColor}}>
              View All
            </Text>
          </View>
          <FlatList
            horizontal
            showsVerticalScrollIndicator={false}
            keyExtractor={index => {
              index.toString();
            }}
            data={dataSoure}
            renderItem={renderRecommendedData}
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Metrix.VerticalSize(20),
  },
});
