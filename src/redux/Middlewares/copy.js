// import React, { Component } from 'react';
// import { Keyboard } from 'react-native';
// import Toast from 'react-native-toast-message';
// import { ApiCaller, NavigationService } from '../../config';
// import { ToastError, ToastSuccess } from '../../config/Constants';
// import { AuthAction, LoaderAction } from '../Actions';
// // import { LoginManager } from "react-native-fbsdk-next";
// // import { GoogleSignin, statusCodes, } from '@react-native-google-signin/google-signin';

// export class COPY extends Component {
//   static Register({ firstName, lastName, email, phoneNumber, password, deviceToken }) {
//     return async dispatch => {
//       return new Promise(async (resolve, reject) => {
//         try {
//           dispatch(LoaderAction.LoaderTrue());

//           let payload = {
//             userId: 0,
//             firstname: firstName,
//             lastname: lastName,
//             fullname: "",
//             phoneNumber: phoneNumber,
//             email: email,
//             password: password,
//             role: "",
//             userTypeID: 4,
//             userType: 1,
//             errorMsg: "",
//             otp: 0,
//             isSocialRegister: false,
//             socialSite: ""
//           };

//           let response = await ApiCaller.Post('Account/Register', payload);
//           console.log('REG RES:', response)

//           if (response.data?.statusCode == 200) {
//             dispatch(LoaderAction.LoaderFalse());
//             resolve(response?.data);
//           } else {
//             dispatch(LoaderAction.LoaderFalse());
//             reject(response);
//             Toast.show(ToastError(response?.data?.message));
//           }
//         } catch (error) {
//           dispatch(LoaderAction.LoaderFalse());
//           reject(false);
//           Toast.show(ToastError(error.message));
//         }
//       });
//     };
//   }
//   static updateLastLogin({ token }) {


//     return dispatch => {
//       return new Promise(async (resolve, reject) => {
//         try {
//           dispatch(LoaderAction.LoaderTrue());

//           const BearerHeaders = ApiCaller.BearerHeaders(token)

//           let response = await ApiCaller.Get('Account/UpdateLastLoginStatusCode', BearerHeaders);
//           console.log('UPDATE LOGIN STATUSCode RES', response)
//           dispatch(LoaderAction.LoaderFalse());

//           if (response.data?.statusCode == 200) {
//             resolve(response.data?.data);
//           } else {
//             reject(false);
//             Toast.show(ToastError(response.data?.message));
//           }
//         } catch (error) {
//           reject(false);
//           Toast.show(ToastError(error));
//         }
//       });
//     };

//   }
// }

// export default AuthMiddleware;
