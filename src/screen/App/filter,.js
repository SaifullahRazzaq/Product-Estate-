import {View, Text, Slider, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Button, ButtonTab, Header} from '../../components';
import {gStyles} from '../../styles';
import {Colors, Metrix} from '../../config';
import {fonts} from '../../config/Constants';

const filter = () => {
  const [buttonTabList, setButtonTabList] = useState([
    {title: 'Community', tabIcon: 'office-building', id: 0},
    {title: 'Building', tabIcon: 'office-building', id: 1},
    {title: 'House', tabIcon: 'office-building', id: 2},
    {title: 'Appartments', tabIcon: 'office-building', id: 3},
    {title: 'Flats', tabIcon: 'office-building', id: 4},
    {title: 'Pent House', tabIcon: 'office-building', id: 5},
  ]);

  const [startTabList, setStarTabList] = useState([
    {title: '3', tabIcon: 'star', id: 0, iconColor: Colors.yellow},
    {title: '3.5', tabIcon: 'star', id: 1, iconColor: Colors.yellow},
    {title: '4', tabIcon: 'star', id: 2, iconColor: Colors.yellow},
    {title: '3.7', tabIcon: 'star', id: 3, iconColor: Colors.yellow},
    {title: '4.3', tabIcon: 'star', id: 4, iconColor: Colors.yellow},
    {title: '4.8', tabIcon: 'star', id: 5, iconColor: Colors.yellow},
  ]);

  const [bedroomTabList, setBedroomTabList] = useState([
    {title: '1', tabIcon: 'office-building', id: 0},
    {title: '2', tabIcon: 'office-building', id: 1},
    {title: '3', tabIcon: 'office-building', id: 2},
    {title: '4', tabIcon: 'office-building', id: 3},
    {title: '4', tabIcon: 'office-building', id: 4},
    {title: '5', tabIcon: 'office-building', id: 5},
  ]);

  const [bathroomTabList, setBathroomTabList] = useState([
    {title: '1', tabIcon: 'office-building', id: 0},
    {title: '2', tabIcon: 'office-building', id: 1},
    {title: '3', tabIcon: 'office-building', id: 2},
    {title: '4', tabIcon: 'office-building', id: 3},
    {title: '5', tabIcon: 'office-building', id: 4},
    {title: '5', tabIcon: 'office-building', id: 5},
  ]);
  return (
    <View style={gStyles.shadowCard}>
      <Header showBack rightIconName="cross" showSearch />

      <View>
        <Text style={styles.text}>Start Range</Text>
        <ButtonTab ButtonTabList={buttonTabList} />

        {/* <Text style={styles.text}>Star Range</Text>
        <ButtonTab ButtonTabList={startTabList} /> */}

        <Text style={styles.text}>Bed Rooms</Text>
        <ButtonTab tabStyles={{width:Metrix.HorizontalSize(50)}} ButtonTabList={bedroomTabList} showIcon />

        <Text style={styles.text}>Bath Rooms </Text>
        <ButtonTab tabStyles={{width:Metrix.HorizontalSize(50)}} ButtonTabList={bathroomTabList} showIcon />

        <Text style={styles.text}>Price Range</Text>
        <Slider maximumValue={2000} minimumValue={100} 
        value={40000} onValueChange={(e)=>{console.warn(e)}}/>
      </View>
      <Button
        buttonText="Apply Now"
        btnStyle={{
          width: '95%',
          marginTop: 20,
        }}
      />
    </View>
  );
};

export default filter;

const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.Black,
    fontSize: Metrix.customFontSize(20),
    color: Colors.secondaryColor,
    marginTop: Metrix.VerticalSize(20),
  },
});
