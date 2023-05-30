// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {Provider, useSelector} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {Persistor, Store} from './src/redux';
import Toast, {
  BaseToast,
  ErrorToast,
  SuccessToast,
} from 'react-native-toast-message';
import AppNavigation from './AppNavigation.js';
// import SplashScreen from 'react-native-splash-screen';
// import messaging from '@react-native-firebase/messaging';
// import PushNotificationIOS from '@react-native-community/push-notification-ios';
// import PushNotification from 'react-native-push-notification';
// import {
//   check,
//   PERMISSIONS,
//   request,
//   RESULTS,
//   requestNotifications,
// } from 'react-native-permissions';
// import {StripeProvider} from '@stripe/stripe-react-native';
// import {GoogleSignin} from '@react-native-google-signin/google-signin';
// import {AuthAction} from './src/redux/Actions';
// import {AuthMiddleware} from './src/redux/Middlewares';

const App = () => {
  // const {counter} = useSelector(state => state.AuthReducer);

  // useEffect(() => {
  //   GoogleSignin.configure({
  //     offlineAccess: true,
  //     webClientId:
  //       // '811512896936-b2u8911tr3rte3fc4miuplcpapa8jbnm.apps.googleusercontent.com',
  //       '880807952704-q2r20angpjjequ4nejeso0gq9e5baoov.apps.googleusercontent.com',
  //     androidClientId:
  //       // '811512896936-eie22cja21fu5uvj7h8kf50nkupta3lq.apps.googleusercontent.com',
  //       // '880807952704-8pntd193qn3qst5jlcd0pdknd2u3le87.apps.googleusercontent.com',
  //       // '880807952704-f2a13i9qmsbps8nombl5tobjlop85917.apps.googleusercontent.com',

  //       // '880807952704-83eo8mg2kibg89ev22lq5sse45tp0vm0.apps.googleusercontent.com',
  //       // '880807952704-ast6v1mqggmq9jaclfmhld0e6mkfcf6q.apps.googleusercontent.com', //android neighborsRenter
  //       // '880807952704-0k2613f6vacpoj6p9s2b7jqi95jokbtv.apps.googleusercontent.com',
  //       // '880807952704-tcsd9b6u5t8glj1gdqvuash5etlpsrqg.apps.googleusercontent.com',
  //       '880807952704-qe1k48d3i3c2uiv7okbp01l1a2tsjs72.apps.googleusercontent.com',
  //     iosClientId:
  //       // '811512896936-kdnn2lpsk4hc17s58eg2t0lqkp502bs3.apps.googleusercontent.com',
  //       '880807952704-q452oda8qm3q656k55ls2oaog21k5u2q.apps.googleusercontent.com',
  //   });

  //   requestUserPermission();
  //   Platform.OS == 'android' && SplashScreen.hide();

  //   if (Platform.OS == 'android') {
  //     check(PERMISSIONS.ANDROID.POST_NOTIFICATIONS)
  //       .then(result => {
  //         switch (result) {
  //           case RESULTS.UNAVAILABLE:
  //             console.log(
  //               'This feature is not available (on this device / in this context)',
  //             );
  //             break;
  //           case RESULTS.DENIED:
  //             console.log(
  //               'The permission has not been requested / is denied but requestable',
  //             );
  //             break;
  //           case RESULTS.LIMITED:
  //             console.log(
  //               'The permission is limited: some actions are possible',
  //             );
  //             break;
  //           case RESULTS.GRANTED:
  //             console.log('The permission is granted');
  //             break;
  //           case RESULTS.BLOCKED:
  //             console.log(
  //               'The permission is denied and not requestable anymore',
  //             );
  //             break;
  //         }
  //       })
  //       .catch(error => {
  //         console.log('permissions error', error);
  //       });
  //   }
  // }, []);

  // [{id: 1677247882217}, {id: 1677247887457}, {id: 1677247885641}];

  // PushNotification.createChannel(
  //   {
  //     channelId: 'NeighborsRenter', // (required)
  //     channelName: 'NeighborsRenter', // (required)
  //     channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
  //     playSound: true, // (optional) default: true
  //     soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
  //     importance: 4, // (optional) default: Importance.HIGH. Int value of the Android notification importance
  //     vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
  //   },
  //   created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
  // );

  // async function requestUserPermission() {
  //   if (Platform.OS == 'android') {
  //     await request(PERMISSIONS.ANDROID.POST_NOTIFICATIONS)
  //       .then(val => {})
  //       .catch(err => console.warn('catch workinfg', err));
  //   }
  //   const authStatus = await messaging().requestPermission();
  //   PushNotification.configure({
  //     // (optional) Called when Token is generated (iOS and Android)
  //     onRegister: function (token) {},
  //     // (required) Called when a remote is received or opened, or local notification is opened
  //     onNotification: function (notification) {
  //       //(1)
  //       notification.finish(PushNotificationIOS.FetchResult.NoData);
  //     },
  //     // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
  //     onAction: function (notification) {
  //       // console.warn('ACTION:', notification.action);
  //       // console.warn('NOTIFICATION: =======>>', notification);
  //       // process the action
  //     },
  //     // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
  //     onRegistrationError: function (err) {
  //       console.log(err.message, err);
  //     },
  //     // IOS ONLY (optional): default: all - Permissions to register.
  //     permissions: {
  //       alert: true,
  //       badge: false,
  //       sound: true,
  //     },
  //     popInitialNotification: true,
  //     requestPermissions: true,
  //   });
  //   const enabled =
  //     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  //     authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  //   if (enabled) {
  //     console.log('Authorization status:', authStatus);
  //   }

  //   await messaging().registerDeviceForRemoteMessages();
  //   console.log('firebase token ==============>', await messaging().getToken());
  //   messaging().onMessage(async notification => {
  //     const user = Store.getState().AuthReducer.user;
  //     // console.warn('Notification======>>>', notification);
  //     //setting badge visible
  //     Store.dispatch(AuthAction.ReaNotification(false));
  //     //updating counter
  //     if (user) {
  //       Store.dispatch(AuthMiddleware.GetNotificationCount(user?.authToken))
  //         .then(res => {
  //           console.log('Notification counts', res);
  //           Store.dispatch(
  //             AuthAction.UpdateCounter(res.data?.data.unseenCount),
  //           );
  //         })
  //         .catch(err => {});
  //     }
  //     // Store.dispatch(
  //     //   AuthAction.UpdateCounter(Store.getState().AuthReducer.counter + 1),
  //     // );

  //     PushNotification.localNotification({
  //       /* Android Only Properties */
  //       channelId: 'NeighborsRenter', // (required) channelId, if the channel doesn't exist, notification will not trigger.
  //       channelName: 'NeighborsRenter',
  //       allowWhileIdle: true,
  //       ticker: notification.notification.title, // (optional)
  //       showWhen: true, // (optional) default: true
  //       autoCancel: false, // (optional) default: true
  //       largeIcon: 'ic_notification', // (optional) default: "ic_launcher". Use "" for no large icon.
  //       smallIcon: 'ic_notification', // (optional) default: "ic_notification" with fallback for "ic_launcher". Use "" for default small icon.
  //       bigText: notification.notification.title,
  //       subText: notification.notification.body, // (optional) default: none
  //       // bigLargeIcon: 'ic_launcher', // (optional) default: undefined
  //       color: Colors.primary, // (optional) default: system default
  //       vibrate: true, // (optional) default: true
  //       vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
  //       priority: 'high', // (optional) set notification priority, default: high
  //       visibility: 'public', // (optional) set notification visibility, default: private
  //       importance: 'high',
  //       /* iOS and Android properties */
  //       id: notification.messageId, // (optional) Valid unique 32 bit integer specified as string. default: Autogenerated Unique ID
  //       title: notification.notification.title, // (optional)
  //       message: notification.notification.body, // (required)
  //       picture: '', // (optional) Display an picture with the notification, alias of `bigPictureUrl` for Android. default: undefined
  //       userInfo: {
  //         // id: notification.messageId,
  //         // medIdentifier: notification?.data?.medIdentifier,
  //         // medName: notification?.data?.medName,
  //       },
  //       playSound: true, // (optional) default: true
  //       soundName: 'default',
  //       ignoreInForeground: true,
  //     });
  //   });
  //   // messaging().setBackgroundMessageHandler(val => {
  //   //   console.warn('setBackgroundMessageHandler ====', val);
  //   // })
  // }
  // //Update Version Work
  // // const checkUpdateNeeded = async () => {
  // //   let updateNeeded = await VersionCheck.needUpdate();
  // //   if (updateNeeded.isNeeded) {
  // //     this.setState({
  // //       hasNewUpdate: true,
  // //     });
  // //     Alert.alert(
  // //       'Please update ',
  // //       'Something special you are missing. Tamkeencare has an updated version of the app for you.',
  // //       [
  // //         {
  // //           text: 'Update',
  // //           onPress: () => {
  // //             BackHandler.exitApp();
  // //             Linking.openURL(updateNeeded.storeUrl);
  // //           },
  // //         },
  // //       ],
  // //       {cancelable: false},
  // //     );
  // //     //Alert the user and direct to the app url
  // //   }
  // // };

  // const handleConnectivityChange = isConnected => {
  //   setisConnected(isConnected);
  // };

  return (
    <>
        <Provider store={Store}>
          <PersistGate loading={null} persistor={Persistor}>
            {Platform.OS === 'ios' ? (
              <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
                <AppNavigation />
              </KeyboardAvoidingView>
            ) : (
              <AppNavigation />
            )}
          </PersistGate>
        </Provider>
        <Toast
          config={{
            error: props => (
              <ErrorToast
                {...props}
                // style={[styles.style, styles.errorStyle]}
                // contentContainerStyle={styles.contentContainerStyle}
                // text1Style={styles.text1Style}
                text1NumberOfLines={2}
                // text2Style={styles.text2Style}
                text2NumberOfLines={2}
              />
            ),
            success: props => (
              <SuccessToast
                {...props}
                // style={[styles.style, styles.errorStyle]}
                // contentContainerStyle={styles.contentContainerStyle}
                // text1Style={styles.text1Style}
                text1NumberOfLines={2}
                // text2Style={styles.text2Style}
                text2NumberOfLines={4}
              />
            ),
          }}
        />
    </>
    // </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

//(1)
// console.warn('NOTIFICATION:', notification);
// process the notification
//===
// const clicked = notification.userInteraction;
// console.warn('working', notification);
// if (clicked) {
//   console.warn('clicked', notification);
//   NavigationService.navigate('BottomTabs', {
//     notiData: notification,
//   });
// } else {
// }
// // (required) Called when a remote is received or opened, or local notification is opened
