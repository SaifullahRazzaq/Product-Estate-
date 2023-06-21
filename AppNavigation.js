import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Colors, Metrix, NavigationService} from './src/config';
import {
  ForgotPassword,
  IntroScreen,
  Login,
  SignUp,
  Home,
  PrivacyPolicy,
  TermsAndCondition,
  Notifications,
  Profile,
  Chat,
  BankAccounts,
  MyReview,
  Facourite,
  ContactUs,
  Verification,
} from './src/screen';
import {BottomTabs, Button} from './src/components';
import {ActivityIndicator, View} from 'react-native';
import {connect} from 'react-redux';
const Stack = createStackNavigator();

//Auth Stack
const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Verification">
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Intro" component={IntroScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Verification" component={Verification} />

      {/* <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="Verification" component={Verification} /> */}
      {/* <Stack.Screen name="TermsAndConditions" component={TermsAndCondition} /> */}
    </Stack.Navigator>
  );
};

//User Stack
const UserStack = props => {
  // const {user} = useSelector(state => state.AuthReducer);
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={
        'BottomTabs'
        // user?.isSocialRegister
        //   ? user?.phoneNumber == null
        //     ? 'Profile'
        //     : 'BottomTabs'
        //   : 'BottomTabs'
      }>
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="TermsAndConditions" component={TermsAndCondition} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{gestureEnabled: false}}
      />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="BankAccounts" component={BankAccounts} />
      <Stack.Screen name="MyReviews" component={MyReview} />
      <Stack.Screen name="Favourites" component={Facourite} />
      <Stack.Screen name="ContactUs" component={ContactUs} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />

      {/* 
     
      <Stack.Screen name="ExtensionRequests" component={ExtensionRequests} />
      <Stack.Screen name="DateChangeRequests" component={DateChangeRequests} />
      <Stack.Screen name="AddAccount" component={AddAccount} />
      <Stack.Screen name="SavedTrailers" component={SavedTrailers} />
      <Stack.Screen name="BookingDetail" component={BookingDetail} />
      <Stack.Screen name="SpentAmount" component={SpentAmount} />
      <Stack.Screen name="Library" component={Liberary} />
      <Stack.Screen name="LibraryFaqs" component={LibraryFaqs} />
      <Stack.Screen name="LibraryMediaDetail" component={LibraryMediaDetail} />
      <Stack.Screen name="VideoPlayerScreen" component={VideoPlayerScreen} />
      <Stack.Screen name="ImageView" component={ImageView} />
      <Stack.Screen name="VerifyOTP" component={VerifyOTP} /> */}
    </Stack.Navigator>
  );
};

//App Navigation
class AppNavigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const loading = useSelector(state => state.LoaderReducer.loading);
    let {loading, user} = this.props;
    return (
      <>
        <NavigationContainer
          ref={ref => NavigationService.setTopLevelNavigator(ref)}>
          <Stack.Navigator
            screenOptions={{headerShown: false}}
            // initialRouteName={!user ? 'AuthStack' : 'UserStack'}
          >
            <Stack.Screen name="AuthStack" component={AuthStack} />
            <Stack.Screen name="UserStack" component={UserStack} />
            {/* 
            <Stack.Screen name="BottomTabs" component={BottomTabs} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} />
            <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
            <Stack.Screen
              name="TermsAndConditions"
              component={TermsAndCondition}
            />
            <Stack.Screen name="ContactUs" component={ContactUs} />
            <Stack.Screen name="TrailerDetails" component={TrailerDetails} />
            <Stack.Screen name="Checkout" component={Checkout} />
            <Stack.Screen name="RegisterOnRent" component={RegisterOnRent} />
            <Stack.Screen name="VerifyOTP" component={VerifyOTP} />
            <Stack.Screen name="ConfirmPay" component={ConfirmPay} />
            <Stack.Screen name="ROProfile" component={ROProfile} />
            <Stack.Screen name="Thank" component={Thank} />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{gestureEnabled: false}}
            />
            <Stack.Screen
              name="ExtensionRequests"
              component={ExtensionRequests}
            />
            <Stack.Screen
              name="DateChangeRequests"
              component={DateChangeRequests}
            />

            <Stack.Screen name="BankAccounts" component={BankAccounts} />
            <Stack.Screen name="AddAccount" component={AddAccount} />
            <Stack.Screen name="SavedTrailers" component={SavedTrailers} />
            <Stack.Screen name="BookingDetail" component={BookingDetail} />
            <Stack.Screen name="SpentAmount" component={SpentAmount} />
            <Stack.Screen name="Library" component={Liberary} />
            <Stack.Screen name="MyReviews" component={MyReviews} />
            <Stack.Screen name="LibraryFaqs" component={LibraryFaqs} />
            <Stack.Screen
              name="LibraryMediaDetail"
              component={LibraryMediaDetail}
            />
            <Stack.Screen
              name="VideoPlayerScreen"
              component={VideoPlayerScreen}
            />
            <Stack.Screen name="ImageView" component={ImageView} />
            <Stack.Screen name="Notifications" component={Notifications} />
            <Stack.Screen name="Chat" component={Chat} /> */}
          </Stack.Navigator>
        </NavigationContainer>
        {loading && (
          <View
            style={{
              height: Metrix.VerticalSize(),
              width: Metrix.HorizontalSize(),
              position: 'absolute',
              zIndex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                paddingHorizontal: Metrix.VerticalSize(30),
                paddingVertical: Metrix.VerticalSize(30),
                borderRadius: Metrix.VerticalSize(10),
                backgroundColor: Colors.primary,
              }}>
              <ActivityIndicator size="large" color={Colors.white} />
            </View>
          </View>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.LoaderReducer.loading,
  user: state.AuthReducer.user,
});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigation);
