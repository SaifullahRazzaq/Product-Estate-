import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {gStyles} from '../../styles';
import {Button, Header} from '../../components';
import {Colors, Images, Metrix, NavigationService} from '../../config';
import {fonts} from '../../config/Constants';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {useDispatch} from 'react-redux';
// import Toast from 'react-native-toast-message';
// import {ToastError, ToastSuccess} from '../../config/Constants';
// import {AuthMiddleware} from '../../redux/Middlewares';
// import {AuthAction} from '../../redux/Actions';

export default function VerifyOTP({route}) {
  const dispatch = useDispatch();

  // const [prevItem, set_prevItem] = useState(route.params.data);
  const [code, setCode] = useState('');
  const [timer, setTimer] = useState('');
  const [timerText, setTimerText] = useState('Resend code in ');
  const [isTimer, setIsTimer] = useState(true);
  // const {email, commingFromScreen, user} = route?.params;
  // console.log('param user===>', route.params.data);

  const _timer = () => {
    setTimerText('Resend code in ');
    setIsTimer(true);

    var countDownDate = new Date();

    countDownDate.setSeconds(countDownDate.getSeconds() + 30);

    // Update the count down every 1 second
    var x = setInterval(function () {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"
      setTimer(minutes + ':' + seconds + ' Sec');

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        setTimerText('Resend OTP');
        setTimer('');
        setIsTimer(false);
      }
    }, 1000);
  };

  // const _resendOTP = () => {
  //   dispatch(
  //     AuthMiddleware.ResendOTP({
  //       email: email,
  //       phoneNumber: prevItem?.phoneNumber,
  //       code,
  //       codeTypeId: prevItem?.otpType == 'Email' ? 4 : 5,
  //     }),
  //   )
  //     .then(res => {
  //       console.log(res);
  //       setCode('');
  //       _timer();
  //     })
  //     .catch(err => console.warn(err));
  // };

  // const submitVerification = () => {
  //   if (!code) {
  //     return Toast.show(ToastError('OTP is required!'));
  //   }
  //   dispatch(
  //     AuthMiddleware.VerifyOTP({
  //       email: prevItem?.email,
  //       phoneNumber: prevItem?.phoneNumber,
  //       code,
  //       codeTypeId: prevItem?.otpType == 'Email' ? 4 : 5,
  //     }),
  //   )
  //     .then(data => {
  //       console.log('verify otp data', data);
  //       setCode('');
  //       Toast.show(ToastSuccess('Verification Successfull.'));
  //       console.log('VERIFy OTP:', prevItem?.user);
  //       dispatch(AuthAction.Signin(data?.data));
  //       // console.log('VERIFy OTP:', route.params?.user);
  //       NavigationService.resetStack(
  //         'ConfirmPay',
  //         {
  //           data: prevItem?.data,
  //           user: data?.data,
  //           userType: route.params?.userType ? route.params?.userType : null,
  //         },
  //         [
  //           {name: 'BottomTabs'},
  //           {
  //             name: 'TrailerDetails',
  //             params: {item: {identifier: prevItem.data?.trailerIdentifier}},
  //           },
  //         ],
  //       );
  //     })
  //     .catch(err => console.warn(err));
  // };

  useEffect(() => {
    // _timer();
  }, []);

  return (
    <View style={gStyles.shadowCard}>
      <Header />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal: Metrix.HorizontalSize(20)}}>
        <View style={{padding: 10, marginTop: 40, alignItems: 'center'}}>
          <Image
            source={Images.otp}
            style={{
              width: Metrix.HorizontalSize(350),
              height: Metrix.VerticalSize(350),
            }}
          />

          <Text style={[gStyles.title, {bottom:10}]}>Verify Your Email</Text>

          <Text style={[gStyles.description, {textAlign: 'center'}]}>
            You have succefully registered on Real Estate. A system
            generated password have been sent to you on your registered email.
            Also you will be loggedin automatically after complete booking.
          </Text>
        </View>

        {/* otp */}
        <View style={{alignItems: 'center'}}>
          <OTPInputView
            style={{width: '80%', height: 100}}
            pinCount={5}
            code={code}
            selectionColor={Colors.blackText}
            onCodeChanged={code => setCode(code)}
            autoFocusOnLoad={true}
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            // onCodeFilled={submitVerification}
          />
        </View>

        <TouchableOpacity
          activeOpacity={isTimer ? 1 : 0.6}
          onPress={() => (isTimer ? null : _resendOTP())}>
          <Text
            style={{
              fontFamily: fonts.Regular,
              fontSize: Metrix.FontExtraSmall,
              color: Colors.blue,
              textDecorationLine: 'underline',
              margin: 20,
              // marginBottom: 0,
              textAlign: 'center',
            }}>
            {timerText + timer}
          </Text>
        </TouchableOpacity>

        {/* VERIFY */}
        <View style={{marginVertical: Metrix.VerticalSize(10)}}>
          <Button
            btnStyle={{
              width: '95%',
            }}
            buttonText={'Verify'}
            onPress={() => submitVerification}
          />
        </View>
        {/* GOBACK */}
        {/* <View style={{marginVertical: Metrix.VerticalSize(10)}}>
          <Button
            btnStyle={{
              width: '95%',
              backgroundColor: Colors.white,
              borderColor: Colors.primary,
              borderWidth: 1,
            }}
            textStyle={{color: Colors.secondaryColor}}
            buttonText={'Go Back'}
            onPress={() => {
              NavigationService.goBack();
            }}
          />
        </View> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  creditCard: {
    position: 'absolute',
    zIndex: 100,
    top: Metrix.VerticalSize(10),
    left: Metrix.HorizontalSize(12),
  },
  input: {
    marginTop: Metrix.VerticalSize(10),
    width: '100%',
    height: Metrix.VerticalSize(44),
    fontSize: Metrix.customFontSize(12),
    padding: 5,
    paddingLeft: Metrix.HorizontalSize(10),
    color: Colors.black,
    borderRadius: 8,
    borderColor: Colors.lighGray,
    borderWidth: 1,
  },
  underlineStyleHighLighted: {
    borderColor: Colors.primary,
    color: Colors.blackText,
  },
  underlineStyleBase: {
    width: 50,
    height: 50,
    // alignSelf: 'center',
    // flex:1,
    borderWidth: 1,
    borderBottomWidth: 1,
    borderRadius: 10,
  },
});
