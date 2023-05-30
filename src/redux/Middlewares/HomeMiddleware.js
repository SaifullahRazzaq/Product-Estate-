import React, {Component} from 'react';
import {Keyboard} from 'react-native';
import Toast from 'react-native-toast-message';
import {ApiCaller, NavigationService} from '../../config';
import {ToastError, ToastSuccess} from '../../config/Constants';
import {AuthAction, LoaderAction} from '../Actions';
// import { LoginManager } from "react-native-fbsdk-next";
// import { GoogleSignin, statusCodes, } from '@react-native-google-signin/google-signin';

export class HomeMiddleware extends Component {
  static POSTCategories({deviceToken, token}) {
    return async dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.LoaderTrue());

          let response = await ApiCaller.Post('authToken', {});
          console.log('REG RES:', response);

          if (response.data?.statusCode == 200) {
            dispatch(LoaderAction.LoaderFalse());
            resolve(response?.data);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(response);
            Toast.show(
              ToastError(
                response.data?.message ?? `Error Code: ${response?.status}`,
              ),
            );
          }
        } catch (error) {
          dispatch(LoaderAction.LoaderFalse());
          reject(false);
          Toast.show(ToastError(error.message));
        }
      });
    };
  }
  static GetTrailerDetails({identifier, token}) {
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.LoaderTrue());

          // const BearerHeaders = ApiCaller.BearerHeaders(token)

          let response = await ApiCaller.Get(
            `Trailer/GetTrailerDetailByIdentifier/${identifier}`,
            // BearerHeaders
          );
          console.log('TRAILER DETAILS RES', response);
          dispatch(LoaderAction.LoaderFalse());

          if (response.data?.statusCode == 200) {
            resolve(response.data?.data);
          } else {
            reject(false);
            Toast.show(
              ToastError(
                response.data?.message ?? `Error Code: ${response?.status}`,
              ),
            );
          }
        } catch (error) {
          reject(false);
          console.log('MIDDLEWARE CATCH:', error);
          // Toast.show(ToastError(error));
        }
      });
    };
  }
  static GetTrailerBookedDatedOnRequestChange({identifier, token}) {
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.LoaderTrue());

          // const BearerHeaders = ApiCaller.BearerHeaders(token)

          let response = await ApiCaller.Get(
            `Trailer/GetTrailerAvailableDatesWithBookingDates?BookingIdentifier=${identifier}`,
            // BearerHeaders
          );
          console.log('GetTrailerAvailableDatesWithBookingDates RES', response);
          dispatch(LoaderAction.LoaderFalse());

          if (response.data?.statusCode == 200) {
            resolve(response.data?.data);
          } else {
            reject(response);
            Toast.show(
              ToastError(
                response.data?.message ?? `Error Code: ${response?.status}`,
              ),
            );
          }
        } catch (error) {
          reject(false);
          console.log('MIDDLEWARE CATCH:', error);
          // Toast.show(ToastError(error));
        }
      });
    };
  }
  static GetOwnerListing(identifier, pageNumber, token, deviceToken) {
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.LoaderTrue());
          const BearerHeaders = ApiCaller.BearerHeaders(token);
          let response = await ApiCaller.Get(
            `ProfileDetail/GetOwnerListings?UserIdentifier=${identifier}&pageNumber=${pageNumber}`,
            token && BearerHeaders,
          );
          console.log('Listing RES', response);
          dispatch(LoaderAction.LoaderFalse());

          if (response.data?.statusCode == 200) {
            resolve(response.data?.data);
          } else {
            reject(false);
            Toast.show(
              ToastError(
                response.data?.message ?? `Error Code: ${response?.status}`,
              ),
            );
          }
        } catch (error) {
          reject(false);
          console.log('MIDDLEWARE CATCH:', error);
          // Toast.show(ToastError(error));
        }
      });
    };
  }
  static GetTrailers(data, token, deviceToken) {
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.LoaderTrue());

          const BearerHeaders = ApiCaller.BearerHeaders(token);
          const queryString = await ApiCaller.getQueryStringOfObject(data);

          let response = await ApiCaller.Get(
            // `Trailer/SearchTrailers?state=${state}&city=c&category=2&trailerTitle=t&pageNumber=1&IsSimilar=true&latitude=1&longitude=2&radius=3`,
            `Trailer/SearchTrailers?${queryString}`,
            token && BearerHeaders,
          );
          console.log('GET TRAILER RES', response);
          dispatch(LoaderAction.LoaderFalse());

          if (response.data?.statusCode == 200) {
            resolve(response.data?.data);
          } else {
            reject(false);
            Toast.show(
              ToastError(
                response.data?.message ?? `Error Code: ${response?.status}`,
              ),
            );
          }
        } catch (error) {
          reject(false);
          console.log('MIDDLEWARE CATCH:', error);
          // Toast.show(ToastError(error));
        }
      });
    };
  }
  static GetDashboardData(date, token, deviceToken) {
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.LoaderTrue());

          const BearerHeaders = ApiCaller.BearerHeaders(token);

          let response = await ApiCaller.Get(
            `Account/getRenterDashboard?Date=${date}`,
            BearerHeaders,
          );
          console.log('Account/getRenterDashboard RES', response);
          dispatch(LoaderAction.LoaderFalse());

          if (response.data?.statusCode == 200) {
            resolve(response.data?.data);
          } else {
            reject(false);
            Toast.show(
              ToastError(
                response.data?.message ?? `Error Code: ${response?.status}`,
              ),
            );
          }
        } catch (error) {
          reject(false);
          console.log('MIDDLEWARE CATCH:', error);
          // Toast.show(ToastError(error));
        }
      });
    };
  }
  static GetCategories({deviceToken, token}) {
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.LoaderTrue());

          // const BearerHeaders = ApiCaller.BearerHeaders(token)

          let response = await ApiCaller.Get(
            'Trailer/getCategory',
            // BearerHeaders
          );
          console.log('GET CAT RES', response);
          dispatch(LoaderAction.LoaderFalse());

          if (response.data?.statusCode == 200) {
            resolve(response.data?.data);
          } else {
            reject(false);
            Toast.show(ToastError(response.data?.message));
          }
        } catch (error) {
          reject(false);
          console.log('MIDDLEWARE CATCH:', error);
          // Toast.show(ToastError(error));
        }
      });
    };
  }
  //
  static GetTrailerReviews({trailerIdentifier, token}) {
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.LoaderTrue());
          let body = {trailerIdentifier};
          const BearerHeaders = ApiCaller.BearerHeaders(token);

          let response = await ApiCaller.Post(
            'Review/GetTrailerReviews',
            body,
            BearerHeaders,
          );
          console.log('RES TRAILER REVIEWS', response);
          dispatch(LoaderAction.LoaderFalse());

          if (response.data?.statusCode == 200) {
            resolve(response.data?.data);
          } else {
            reject(false);
            // Toast.show(
            //   ToastError(
            //     response.data?.message ?? `Error Code: ${response?.status}`,
            //   ),
            // );
            Toast.show(ToastError(response.data?.message));
          }
        } catch (error) {
          reject(false);
          console.log('MIDDLEWARE CATCH:', error);
          // Toast.show(ToastError(error));
        }
      });
    };
  }
}
export default HomeMiddleware;
