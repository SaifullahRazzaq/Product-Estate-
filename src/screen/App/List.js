import React, {Component, useState} from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import {ButtonTab, Card, Header} from '../../components';
import {Colors, Metrix} from '../../config';
import {fonts} from '../../config/Constants';
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
    {title: 'Popular', tabIcon: 'office-building', id: 0},
    {title: 'Comfort', tabIcon: 'office-building', id: 1},
    {title: 'Near You', tabIcon: 'office-building', id: 2},
    {title: 'Building', tabIcon: 'office-building', id: 3},
    {title: 'Flats', tabIcon: 'office-building', id: 4},
    {title: 'Pent House', tabIcon: 'office-building', id: 5},
  ]);
  const renderItem = ({item, index}) => {
    return (
      <View>
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
      <Header title="List" showBack={true} rightIconName="add" showSearch />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: Metrix.VerticalSize(80)}}>
        {/* tab here */}
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <ButtonTab ButtonTabList={buttonTabList} />
        </View>

        <View
          style={{
            marginTop: Metrix.VerticalSize(15),
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            width: '98%',
            backgroundColor: Colors.darkGray,
            borderWidth: 1,
            borderColor: Colors.darkGray,
            borderRadius: 10,
            padding: Metrix.VerticalSize(10),
          }}>
          <Text
            style={{
              color: Colors.white,
              fontSize: Metrix.customFontSize(15),
              fontFamily: fonts.Medium,
            }}>
            <Text
              style={{color: Colors.secondaryColor, fontFamily: fonts.Medium,fontSize:Metrix.customFontSize(15)}}>
              120
            </Text>{' '}
            House Found
          </Text>
        </View>
        {/*  */}
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            keyExtractor={index => {
              index.toString();
            }}
            data={dataSoure}
            contentContainerStyle={{paddingVertical: Metrix.VerticalSize(10)}}
            renderItem={renderItem}
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
