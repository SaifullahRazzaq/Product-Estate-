import React, {useState} from 'react';
// import all the components we are going to use
import {SafeAreaView, StyleSheet, View, Text, Image,TouchableOpacity} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Button} from '../../components';
import {Colors, Metrix} from '../../config';
import {fonts} from '../../config/Constants';
import {gStyles} from '../../styles';
import Feather from 'react-native-vector-icons/Feather';

const slides = [
  {
    key: 's1',
    title: 'Research your house',
    text: 'Very convenient selection on the map with filtering for any requirement',
    image: {
      uri: 'https://img.freepik.com/premium-vector/security-identity-verification-smart-id-card-electronic-opening-system-video-surveillance-flat-vector-modern-illustration_566886-8597.jpg?w=1800',
    },
    backgroundColor: Colors.shadowColor,
  },
  {
    key: 's2',
    title: 'Research your house',
    text: 'Very convenient selection on the map with filtering for any requirement',
    image: {
      uri: 'https://img.freepik.com/premium-photo/environment-protection-measures-atmosphere-purification-reduction-gas-emissions-flat-vector-modern-illustration_566886-8544.jpg?w=1800',
    },
    backgroundColor: Colors.shadowColor,
  },
  {
    key: 's3',
    title: 'Research your house',
    text: 'Very convenient selection on the map with filtering for any requirement',
    image: {
      uri: 'https://img.freepik.com/premium-vector/home-technologies-concept-smart-house-appliance-automation-mobile-application-flat-vector-modern-illustration_566886-8562.jpg?w=1800',
    },
    backgroundColor: Colors.shadowColor,
  },
];

const IntroScreen = () => {
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    setShowRealApp(true);
  };
  const onSkip = () => {
    setShowRealApp(true);
  };

  const RenderItem = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.shadowColor,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image style={styles.introImageStyle} source={item.image} />
        <View
          style={{
            paddingHorizontal: Metrix.HorizontalSize(12),
            marginTop: Metrix.VerticalSize(20),
          }}>
          <Text style={gStyles.title}>{item.title}</Text>
          <Text
            style={{
              color: Colors.darkGray,
              fontFamily: fonts.Black,
              fontSize: Metrix.customFontSize(14),
              marginTop: Metrix.VerticalSize(30),
            }}>
            {item.text}
          </Text>
        </View>
      </View>
    );
  };
  const renderNextButton = () => {
    return (
      <Button
        buttonText="Start"
        btnStyle={{width: Metrix.HorizontalSize(100)}}
      />
    );
  };

  const renderPrevButton = () => {
    return (
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          left: Metrix.HorizontalSize(5),
          width: Metrix.HorizontalSize(80),
          height: Metrix.VerticalSize(50),
          backgroundColor: Colors.secondaryColor,
          borderRadius: 9,
          borderWidth: 1,
          borderColor: Colors.secondaryColor,
        }}>
        <Feather name="arrow-left" size={30} color={Colors.white} />
      </TouchableOpacity>
    );
  };

  return (
    <>
      <AppIntroSlider
        // renderPagination={false}

        activeDotStyle={{backgroundColor: Colors.secondaryColor}}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        nextLabel={'Start'}
        indicatorStyle="black"
        renderSkipButton={renderPrevButton}
        renderNextButton={renderNextButton}
        data={slides}
        renderItem={RenderItem}
        onDone={onDone}
        showDoneButton={true}
        doneLabel={'Skip'}
        showSkipButton={true}
        onSkip={onSkip}
      />
    </>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    width: Metrix.HorizontalSize(340),
    height: Metrix.VerticalSize(300),
    resizeMode: 'cover',
    // resizeMode: 'contain',
  },
  introTextStyle: {
    fontSize: 18,
    color: Colors.secondaryColor,
    textAlign: 'center',
    paddingVertical: 30,
  },
});
