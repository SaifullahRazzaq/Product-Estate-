import moment from 'moment';
import React, {Component} from 'react';
import {Keyboard} from 'react-native';
import Toast from 'react-native-toast-message';
import {ApiCaller, NavigationService} from '../../config';
import {baseUrl} from '../../config/ApiCaller';
import {ToastError, ToastSuccess} from '../../config/Constants';
import {AuthAction, LoaderAction} from '../Actions';
// import { LoginManager } from "react-native-fbsdk-next";
// import { GoogleSignin, statusCodes, } from '@react-native-google-signin/google-signin';

export class AuthMiddleware extends Component {
  static Register({
    email,
    password,
    firstName,
    lastName,
    phoneNumber,
    userType,
    agencyId,
  }) {
    return async dispatch => {
      return new Promise(async (resolve, reject) => {
        let payload = {
          email: email,
          password: password,
          firstName: firstName,
          lastName: lastName,
          phoneNumber: phoneNumber,
          userType: userType,
          agencyId: agencyId,
          // profilePicture:null
        };
        try {
          dispatch(LoaderAction.LoaderTrue());
          console.log('regitser====>', payload);
          let response = await ApiCaller.Post('users/register', payload);
          console.log('REG RES:', response);

          if (response.data?.statusCode == 200) {
            dispatch(LoaderAction.LoaderFalse());
            // if (isSocialRegister == true) {
            //   dispatch(AuthAction.Signin(response?.data?.data));
            // }
            resolve(response?.data);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(response);
            Toast.show(ToastError(response.data?.message));
          }
        } catch (error) {
          console.log('catch google', error);
          dispatch(LoaderAction.LoaderFalse());
          reject(false);
          Toast.show(ToastError(error.message));
        }
      });
    };
  }
}

export default AuthMiddleware;
