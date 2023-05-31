import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Colors, Images, Metrix, NavigationService} from '../../config';
import {Button, Input} from '../../components';
import {fonts} from '../../config/Constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {gStyles} from '../../styles';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [seePassword, setSeePassword] = useState(false);

  const loginUser = () => {
    // NavigationService.resetStack('UserStack', { screen: 'Home' })
  };
  return (
    <View style={gStyles.shadowCard}>
      <ScrollView style={{paddingHorizontal: Metrix.HorizontalSize(20)}}>
        <View style={styles.imageContainer}>
          {/* <Image
            source={{uri:'https://www.shutterstock.com/image-vector/user-login-authenticate-icon-human-600w-1365533969.jpg'}}
            resizeMode={'contain'}
            style={styles.image}
          /> */}
          <Text>Logo Here</Text>
        </View>

        <View style={{marginVertical: Metrix.VerticalSize(5)}}>
          <Text style={styles.title}>Sign In</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut lab ore.
          </Text>
        </View>

        <View>
          <View style={{marginVertical: Metrix.VerticalSize(10)}}>
            {email?.length > 0 && (
              <TouchableOpacity
                style={styles.eyeIconStyle}
                onPress={() => setEmail('')}
                activeOpacity={0.7}>
                <Ionicons
                  name={'close-circle-outline'}
                  color={Colors.darkGray}
                  size={Metrix.customFontSize(20)}
                />
              </TouchableOpacity>
            )}

            <Text style={gStyles.text}> Email </Text>

            <Input
              value={email}
              onChangeText={text => setEmail(text)}
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
                color={Colors.darkGray}
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

          <View style={styles.forgetPassword}>
            <TouchableOpacity
              onPress={() => NavigationService.navigate('ForgotPassword')}
              activeOpacity={0.7}>
              <Text style={{color: Colors.primary, fontFamily: fonts.Medium}}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{marginVertical: Metrix.VerticalSize(40)}}>
            <Button
              btnStyle={{
                width: '98%',
              }}
              buttonText={'Sign In'}
              onPress={loginUser}
            />
          </View>

          <View style={styles.registerContainer}>
            <View style={styles.orContainer}>
              <View style={styles.line} />
              <Text style={styles.or}>Or</Text>
              <View style={styles.line} />
            </View>
          </View>

          <View style={styles.socialContainer}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {}}
              style={{marginHorizontal: Metrix.HorizontalSize(15)}}>
              <Image source={Images.google} resizeMode={'contain'} />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {}}
              style={{marginHorizontal: Metrix.HorizontalSize(15)}}>
              <Image source={Images.facebook} resizeMode={'contain'} />
            </TouchableOpacity>
          </View>

          <View style={styles.linkContainer}>
            <Text style={gStyles.text}>Don't have an account yet?</Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                NavigationService.navigate('SignUp');
              }}>
              <Text style={styles.register}> Register</Text>
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
  title: {fontSize: Metrix.customFontSize(28), fontFamily: fonts.Bold},
  description: {
    fontSize: Metrix.customFontSize(13),
    marginVertical: Metrix.VerticalSize(10),
    lineHeight: Metrix.VerticalSize(24),
    fontFamily: fonts.Medium,
    color: Colors.secondaryColor,
  },
  eyeIconStyle: {
    position: 'absolute',
    zIndex: 100,
    top: Metrix.VerticalSize(36),
    right: Metrix.HorizontalSize(15),
  },
  forgetPassword: {
    flexDirection: 'row',
    marginTop: Metrix.VerticalSize(5),
    justifyContent: 'flex-end',
  },
  registerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginVertical: Metrix.VerticalSize(10),
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
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkContainer: {
    flexDirection: 'row',
    marginTop: Metrix.VerticalSize(40),
    marginBottom: Metrix.VerticalSize(10),
    justifyContent: 'center',
  },
  register: {
    color: Colors.secondaryColor,
    fontFamily: fonts.Black,
    fontSize: Metrix.customFontSize(12),
  },
});
