import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {Colors, Images, Metrix, NavigationService} from '../../config';
import {Button, Input} from '../../components';

import {
  emailValidityCheck,
  fonts,
  isPasswordAlphaNumeric,
  ToastError,
  ToastSuccess,
} from '../../config/Constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {gStyles} from '../../styles';
//   import {Toast} from 'react-native-toast-message/lib/src/Toast';
//   import AuthMiddleware from '../../redux/Middlewares/AuthMiddleware';
//   import {useDispatch} from 'react-redux';
//   import {
//     GoogleSignin,
//     statusCodes,
//   } from '@react-native-google-signin/google-signin';
//   import {
//     AccessToken,
//     GraphRequest,
//     GraphRequestManager,
//     LoginManager,
//   } from 'react-native-fbsdk-next';
//   import messaging from '@react-native-firebase/messaging';
//   import {
//     appleAuth,
//     AppleButton,
//     AppleAuthError,
//     AppleAuthRequestScope,
//     AppleAuthRequestOperation,
//   } from '@invertase/react-native-apple-authentication';
//   import TextInputMask from 'react-native-text-input-mask';

export default function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [deviceToken, setDeviceToken] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [seePassword, setSeePassword] = useState(false);

  // React.useEffect(() => {
  //   getToken();
  // }, []);

  // const dispatch = useDispatch();

  // const getToken = async () => {
  //   const token = await messaging().getToken();
  //   setDeviceToken(token);
  // };

  // const isTrueString = str => {
  //   return str.match(/[a-zA-Z]/);
  // };

  // const registerUser = () => {
  //   if (!isChecked) {
  //     Toast.show(ToastError('Please agree to our Terms and Policies'));
  //     return;
  //   }
  //   setIsPasswordValid(false);
  //   if (!firstName || !lastName || !email || !phoneNumber || !password) {
  //     Toast.show(ToastError('All fields are required!'));
  //     return;
  //   }

  //   if (password.length < 8) {
  //     Toast.show(ToastError('Password should be atleast 8 characters'));
  //     return;
  //   }

  //   if (!emailValidityCheck(email)) {
  //     Toast.show(ToastError('Invalid email, Enter a valid email'));
  //     return;
  //   }

  //   if (!isPasswordAlphaNumeric(password)) {
  //     return setIsPasswordValid(true);
  //   }

  //   if (phoneNumber.length < 7) {
  //     return Toast.show(ToastError('Invalid phone number'));
  //   }

  //   if (!isTrueString(firstName)) {
  //     return Toast.show(ToastError('Invalid First Name'));
  //   }
  //   if (!isTrueString(lastName)) {
  //     return Toast.show(ToastError('Invalid Last Name'));
  //   }

  //   dispatch(
  //     AuthMiddleware.Register({
  //       firstName,
  //       lastName,
  //       email,
  //       phoneNumber,
  //       password,
  //       deviceToken,
  //       appType: 4,
  //       isCheckOutUser: false,
  //       isSocialRegister: false,
  //     }),
  //   )
  //     .then(data => {
  //       setFirstName('');
  //       setLastName(''), setEmail('');
  //       setPassword('');
  //       setPhoneNumber('');
  //       Toast.show(ToastSuccess('Please verify OTP sent to your email.'));
  //       NavigationService.navigate('Verification', {
  //         email: email,
  //         commingFromScreen: 'register',
  //       });
  //     })
  //     .catch(err => console.warn(err));
  // };

  // const onGogglePressed = async () => {
  //   if (!isChecked) {
  //     Toast.show(ToastError('Please agree to our Terms and Policies'));
  //     return;
  //   }
  //   // if (!isChecked) {
  //   //   Toast.show(ToastError('Please Accept Terms and Conditons'));
  //   // } else {
  //   // GoogleSignin.configure({
  //   //   offlineAccess: true,
  //   //   webClientId:
  //   //     '811512896936-b2u8911tr3rte3fc4miuplcpapa8jbnm.apps.googleusercontent.com',
  //   //   androidClientId:
  //   //     '811512896936-eie22cja21fu5uvj7h8kf50nkupta3lq.apps.googleusercontent.com',
  //   //   iosClientId:
  //   //     '811512896936-kdnn2lpsk4hc17s58eg2t0lqkp502bs3.apps.googleusercontent.com',
  //   // });
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     const userInfo = await GoogleSignin.signIn();
  //     const {givenName, familyName, photo, email, name, id} = userInfo?.user;
  //     // console.warn('google user---->', userInfo);
  //     dispatch(
  //       AuthMiddleware.Register({
  //         firstName: givenName,
  //         lastName: familyName,
  //         fullName: name,
  //         email,
  //         deviceToken,
  //         id,
  //         // isC÷÷heckOutUser,
  //         isSocialRegister: true,
  //         socialSite: 'google',
  //         socialProfileImageUrl: photo,
  //       }),
  //     )
  //       .then(res => {
  //         // console.warn('res????', res?.data?.phoneNumber);
  //         // if (!res?.data?.phoneNumber) {
  //         //   const isBack = true;
  //         //   NavigationService.resetStack('Profile', {isBack});
  //         // } else {
  //         //   NavigationService.resetStack('UserStack');
  //         // }
  //         NavigationService.resetStack('UserStack');
  //         // console.warn('if main agaya ');
  //       })
  //       .catch(async () => await GoogleSignin.signOut());
  //   } catch (error) {
  //     // console.warn('catch main agaya ', error);
  //     await GoogleSignin.signOut();
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       // Toast.show(ToastError('User Cancelled'));
  //     } else if (error.code === statusCodes.IN_PROGRESS) {
  //       Toast.show(ToastError('in progress'));
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       Toast.show(ToastError('Play services not available or outdated'));
  //     } else {
  //       Toast.show(ToastError('error', error.toString()));
  //     }
  //     // alert('eror');
  //     // }
  //   }
  // };

  // const loginWithFacebook = async () => {
  //   if (!isChecked) {
  //     Toast.show(ToastError('Please agree to our Terms and Policies'));
  //     return;
  //   }
  //   LoginManager.logInWithPermissions([
  //     'public_profile',
  //     'email',
  //     // 'user_friends',
  //   ]).then(
  //     result => {
  //       if (result.isCancelled) {
  //         return;
  //       } else {
  //         //   console.warn('dsa', currentProfile);
  //         AccessToken.getCurrentAccessToken().then(token => {
  //           new GraphRequestManager()
  //             .addRequest(
  //               new GraphRequest(
  //                 '/me',
  //                 {
  //                   accessToken: token?.accessToken,
  //                   parameters: {
  //                     fields: {
  //                       string:
  //                         //  'email,name,first_name,middle_name,last_name,gender,address,picture.type(large)',
  //                         'email,first_name,middle_name,last_name,picture',
  //                     },
  //                   },
  //                 },
  //                 (err, res) => {
  //                   if (err) {
  //                     Alert.alert('Something went wrong', err.message);
  //                   } else {
  //                     const {email, id, picture, last_name, first_name} = res;
  //                     // console.warn('my response====>', res);
  //                     dispatch(
  //                       AuthMiddleware.Register({
  //                         firstName: first_name,
  //                         lastName: last_name,
  //                         email,
  //                         deviceToken,
  //                         id,
  //                         // isCheckOutUser,
  //                         // Number(id),
  //                         isSocialRegister: true,
  //                         socialSite: 'facebook',
  //                         socialProfileImageUrl: picture?.data?.url,
  //                       }),
  //                     )
  //                       .then(resp => {
  //                         // console.warn('res????', resp?.data);
  //                         // if (resp?.data?.phoneNumber == null) {
  //                         //   const isBack = true;
  //                         //   NavigationService.resetStack('Profile', {isBack});
  //                         // } else {
  //                         //   NavigationService.resetStack('UserStack');
  //                         // }
  //                         NavigationService.resetStack('UserStack');
  //                       })
  //                       .catch(error => {
  //                         console.log(error);
  //                       });
  //                   }
  //                 },
  //               ),
  //             )
  //             .start();
  //         });
  //       }
  //     },
  //     function (error) {
  //       console.log('Login fail with error: ' + JSON.stringify(error));
  //     },
  //   );
  // };

  // // APPLE
  // const onAppleButtonPress = async () => {
  //   if (!isChecked) {
  //     Toast.show(ToastError('Please agree to our Terms and Policies'));
  //     return;
  //   }
  //   if (!appleAuth.isSupported) {
  //     Toast.show(ToastError('Apple Login is not supported on this device.'));
  //     return;
  //   }
  //   try {
  //     const appleAuthRequestResponse = await appleAuth.performRequest({
  //       requestedOperation: appleAuth.Operation.LOGIN,
  //       requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
  //     });
  //     console.warn('apple res:=>', appleAuthRequestResponse);

  //     const {user, fullName, email} = appleAuthRequestResponse;

  //     dispatch(
  //       AuthMiddleware.Register({
  //         firstName: fullName?.familyName,
  //         lastName: '',
  //         fullName: fullName?.givenName,
  //         email,
  //         deviceToken,
  //         id: user,
  //         isSocialRegister: true,
  //         socialSite: 'apple',
  //         socialProfileImageUrl: '',
  //       }),
  //     ).then(res => {
  //       // console.warn('res????', res?.data?.phoneNumber);
  //       // if (!res?.data?.phoneNumber) {
  //       //   const isBack = true;
  //       //   NavigationService.resetStack('Profile', {isBack});
  //       // } else {
  //       //   NavigationService.resetStack('UserStack');
  //       // }
  //       NavigationService.resetStack('UserStack');
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <View style={gStyles.shadowCard}>
      <ScrollView style={{paddingHorizontal: Metrix.HorizontalSize(20)}}>
        <View style={styles.imageContainer}>
          {/* <Image
              source={Images.logoGreen}
              resizeMode={'contain'}
              style={styles.image}
            /> */}
        </View>

        <View style={{marginVertical: Metrix.VerticalSize(5)}}>
          <Text style={styles.title}>Register</Text>
        </View>

        <View style={{marginTop: Metrix.VerticalSize(10)}}>
          <View style={{marginVertical: Metrix.VerticalSize(10)}}>
            <Text style={gStyles.text}> First Name </Text>
            <Input
              maxLength={25}
              value={firstName}
              onChangeText={text => setFirstName(text)}
              placeholder={'First Name'}
            />
          </View>

          <View style={{marginVertical: Metrix.VerticalSize(10)}}>
            <Text style={gStyles.text}> Last Name </Text>
            <Input
              maxLength={25}
              value={lastName}
              onChangeText={text => setLastName(text)}
              placeholder={'Last Name'}
            />
          </View>

          <View style={{marginVertical: Metrix.VerticalSize(10)}}>
            <Text style={gStyles.text}> Email </Text>
            <Input
              keyboardType="email-address"
              value={email}
              onChangeText={text => setEmail(text)}
              placeholder={'Email'}
            />
          </View>

          <View style={{marginVertical: Metrix.VerticalSize(10)}}>
            <Text style={gStyles.text}> Phone Number </Text>

            <Input
              keyboardType="phone-pad"
              value={phoneNumber}
              onChangeText={text => setPhoneNumber(text)}
              placeholder={'Email'}
            />
          </View>

          <View style={{marginVertical: Metrix.VerticalSize(10)}}>
            <TouchableOpacity
              style={styles.eyeIconStyle}
              onPress={() => setSeePassword(!seePassword)}
              activeOpacity={0.7}>
              <Ionicons
                name={seePassword ? 'eye-outline' : 'eye-off-outline'}
                color={Colors.secondaryColor}
                size={Metrix.customFontSize(20)}
              />
            </TouchableOpacity>
            <Text style={gStyles.text}> Password </Text>
            <Input
              value={password}
              onChangeText={text => setPassword(text)}
              secureTextEntry={!seePassword}
              placeholder={'Password'}
            />
          </View>

          {/* {isPasswordValid && (
            <Text
              style={{fontSize: 12, color: Colors.red, textAlign: 'center'}}>
              *Password must be upper case, lower case, Numbers and special
              characters.
            </Text>
          )} */}

          <View style={styles.forgetPassword}>
            <TouchableOpacity onPress={() => setIsChecked(!isChecked)}>
              <MaterialCommunityIcons
                name={isChecked ? 'checkbox-marked' : 'checkbox-blank-outline'}
                size={Metrix.customFontSize(20)}
                color={Colors.primary}
              />
            </TouchableOpacity>
            <Text
              style={{
                color: Colors.secondaryColor,
                marginLeft: Metrix.HorizontalSize(5),
                fontFamily: fonts.Medium,
                fontSize: Metrix.customFontSize(10),
              }}>
              I agree to the
            </Text>
            <TouchableOpacity
              onPress={() => NavigationService.navigate('PrivacyPolicy')}>
              <Text
                style={{
                  color: Colors.secondaryColor,
                  fontFamily: fonts.Medium,
                  fontSize: Metrix.customFontSize(10),
                }}>
                {' '}
                Privacy Policy{' '}
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                fontFamily: fonts.Medium,
                fontSize: Metrix.customFontSize(10),
                color: Colors.primary,
              }}>
              &
            </Text>

            <TouchableOpacity
              onPress={() => NavigationService.navigate('TermsAndConditions')}>
              <Text
                style={{
                  color: Colors.secondaryColor,
                  fontFamily: fonts.Medium,
                  fontSize: Metrix.customFontSize(10),
                }}>
                {' '}
                Terms and Conditions
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{marginVertical: Metrix.VerticalSize(30)}}>
            <Button
              btnStyle={{width: '100%'}}
              buttonText={'Register'}
              onPress={() => {}}
            />
          </View>

          <View style={styles.registerContainer}>
            <View style={styles.orContainer}>
              <View style={styles.line} />
              <Text style={styles.or}>Or</Text>
              <View style={styles.line} />
            </View>
          </View>

          {/* <View style={styles.socialContainer}>
            {Platform.OS === 'ios' ? (
              <TouchableOpacity
                activeOpacity={0.7}
                //   onPress={onAppleButtonPress}
                style={{marginHorizontal: Metrix.HorizontalSize(15)}}>
                <Image source={Images.apple} resizeMode={'contain'} />
              </TouchableOpacity>
            ) : null}
            <TouchableOpacity
              activeOpacity={0.7}
              // onPress={onGogglePressed}
              style={{marginHorizontal: Metrix.HorizontalSize(15)}}>
              <Image source={Images.google} resizeMode={'contain'} />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              // onPress={loginWithFacebook}
              style={{marginHorizontal: Metrix.HorizontalSize(15)}}>
              <Image source={Images.facebook} resizeMode={'contain'} />
            </TouchableOpacity>
          </View> */}

          <View style={styles.linkContainer}>
            <Text
              style={{
                fontFamily: fonts.Regular,
                textAlign: 'center',
                color: Colors.secondaryColor,
              }}>
              Don't have an account yet?
            </Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                NavigationService.navigate('Login');
              }}>
              <Text style={styles.login}> Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Metrix.VerticalSize(20),
    width: Metrix.VerticalSize(155),
    height: Metrix.VerticalSize(120),
  },
  image: {
    height: '100%',
    width: '100%',
  },
  title: {
    fontSize: Metrix.customFontSize(28),
    fontFamily: fonts.Medium,
    color: Colors.secondaryColor,
  },
  description: {
    fontSize: Metrix.customFontSize(13),
    marginVertical: Metrix.VerticalSize(10),
    lineHeight: Metrix.VerticalSize(24),
    fontFamily: fonts.Regular,
    color: Colors.textLightColor,
  },
  forgetPassword: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Metrix.VerticalSize(5),
  },
  registerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginVertical: Metrix.VerticalSize(20),
  },
  orContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    backgroundColor: Colors.gray,
    height: Metrix.VerticalSize(1),
    width: '45%',
  },
  or: {
    fontFamily: fonts.Regular,
    marginHorizontal: Metrix.HorizontalSize(10),
    color: Colors.secondaryColor,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkContainer: {
    flexDirection: 'row',
    marginTop: Metrix.VerticalSize(20),
    marginBottom: Metrix.VerticalSize(10),
    justifyContent: 'center',
    paddingBottom: 20,
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
  eyeIconStyle: {
    position: 'absolute',
    zIndex: 100,
    top: Metrix.VerticalSize(36),
    right: Metrix.HorizontalSize(15),
  },
  login: {
    color: Colors.secondaryColor,
    fontFamily: fonts.Black,
    fontSize: Metrix.customFontSize(12),
  },
});
