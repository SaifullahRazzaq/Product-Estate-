import moment from 'moment';
import React, {Component} from 'react';
import {Keyboard} from 'react-native';
import Toast from 'react-native-toast-message';
import {ApiCaller, NavigationService} from '../../config';
import {ToastError, ToastSuccess} from '../../config/Constants';
import {AuthAction, LoaderAction} from '../Actions';
// import { LoginManager } from "react-native-fbsdk-next";
// import { GoogleSignin, statusCodes, } from '@react-native-google-signin/google-signin';

export class BookingMiddleware extends Component {
  static AddBooking(token, body) {
    body.UserZoneTime = moment(new Date()).format('YYYY-MM-DD HH:mm');
    return async dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.LoaderTrue());

          const BearerHeaders = ApiCaller.BearerHeaders(token);

          let response = await ApiCaller.Post(
            'Booking/AddBooking',
            body,
            BearerHeaders,
          );
          console.log('Booking/AddBooking RES:', response);

          if (response.data?.statusCode == 200) {
            dispatch(LoaderAction.LoaderFalse());
            resolve(response?.data);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(response?.data.data);
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
  static PayWithSaveCard(token, body) {
    body.UserZoneTime = moment(new Date()).format('YYYY-MM-DD HH:mm');
    return async dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.LoaderTrue());

          const BearerHeaders = ApiCaller.BearerHeaders(token);

          let response = await ApiCaller.Post(
            'Payment/PayWithSavedCard',
            body,
            BearerHeaders,
          );
          console.log('PayWithSavedCard RES:', response);

          if (response.data?.statusCode == 200) {
            dispatch(LoaderAction.LoaderFalse());
            resolve(response?.data?.data);
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
  static GetIntent({amount, token, isSaved}) {
    return async dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.LoaderTrue());
          let body = {amount, isSaved};
          const BearerHeaders = ApiCaller.BearerHeaders(token);

          let response = await ApiCaller.Post(
            'Payment/CreateStripeIntent',
            body,
            BearerHeaders,
          );
          console.log('INTENT RES:', response);

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
  static GetBookingSummary(token, body) {
    return async dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.LoaderTrue());
          const BearerHeaders = ApiCaller.BearerHeaders(token);

          let response = await ApiCaller.Post(
            'Booking/BookingApp',
            body,
            BearerHeaders,
          );
          console.log('GetBookingSummary RES:', response);

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
  static CheckBookedDates({data, token}) {
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.LoaderTrue());

          const BearerHeaders = ApiCaller.BearerHeaders(token);
          // const queryString = await ApiCaller.getQueryStringOfObject(data);

          let response = await ApiCaller.Get(
            // `Trailer/IsTrailerAvailableDates?${queryString}`,
            `Trailer/IsTrailerAvailableDates?Identifier=${data.identifier}&From=${data.from}&To=${data.to}`,
            BearerHeaders,
          );
          console.log('BOOKED DATES RES', response);
          dispatch(LoaderAction.LoaderFalse());

          if (response.data?.statusCode == 200) {
            resolve(response.data);
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
          Toast.show(ToastError(error));
        }
      });
    };
  }
  static UpdateCardStatus(token, id) {
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.LoaderTrue());

          const BearerHeaders = ApiCaller.BearerHeaders(token);

          let response = await ApiCaller.Get(
            `Payment/UpdateCardStatus?CardID=${id}`,
            BearerHeaders,
          );
          console.log('UpdateCardStatus RES', response);
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
          Toast.show(ToastError(error));
        }
      });
    };
  }
  static GetAppConfiguration() {
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.LoaderTrue());

          // const BearerHeaders = ApiCaller.BearerHeaders(token);
          // const queryString = await ApiCaller.getQueryStringOfObject(data);

          let response = await ApiCaller.Get(
            // `Trailer/IsTrailerAvailableDates?${queryString}`,
            `Account/AppConfiguration`,
            // BearerHeaders,
          );
          console.log('AppConfiguration RES', response);
          dispatch(LoaderAction.LoaderFalse());

          if (response.data?.statusCode == 200) {
            resolve(response.data);
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
          Toast.show(ToastError(error));
        }
      });
    };
  }
  static GetUserCards(token) {
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.LoaderTrue());

          const BearerHeaders = ApiCaller.BearerHeaders(token);

          let response = await ApiCaller.Get(
            `Payment/UserCards`,
            BearerHeaders,
          );
          console.log('UserCards RES', response);
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
          Toast.show(ToastError(error));
        }
      });
    };
  }
  static SharePhoneNum({token, bookingIdentifier}) {
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.LoaderTrue());

          const BearerHeaders = ApiCaller.BearerHeaders(token);

          let response = await ApiCaller.Get(
            `Booking/OwnerSharePhoneNumberToRenter?BookingIdentifier=${bookingIdentifier}&isFromOwner=false`,
            BearerHeaders,
          );
          console.log('SharePhoneNumber RES', response);
          dispatch(LoaderAction.LoaderFalse());

          if (response.data?.statusCode == 200) {
            resolve(response.data);
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
          Toast.show(ToastError(error));
        }
      });
    };
  }
  static PayWithSaveCardExtension(token, body) {
    body.UserZoneTime = moment(new Date()).format('YYYY-MM-DD HH:mm');
    return async dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.LoaderTrue());

          const BearerHeaders = ApiCaller.BearerHeaders(token);

          let response = await ApiCaller.Post(
            'Payment/PayWithSavedCardExtension',
            body,
            BearerHeaders,
          );
          console.log('PayWithSavedCard Extension RES:', response);

          if (response.data?.statusCode == 200) {
            dispatch(LoaderAction.LoaderFalse());
            resolve(response?.data?.data);
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
  static AddDateChangeRequest(token, body) {
    // body.UserZoneTime = moment(new Date()).format('YYYY-MM-DD HH:mm');
    return async dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.LoaderTrue());

          const BearerHeaders = ApiCaller.BearerHeaders(token);

          let response = await ApiCaller.Post(
            'Booking/SaveDateChangeRequest',
            body,
            BearerHeaders,
          );
          console.log('Booking/SaveDateChangeRequest RES:', response);

          if (response.data?.statusCode == 200) {
            dispatch(LoaderAction.LoaderFalse());
            resolve(response?.data);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(response?.data.data);
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
  // static GetDateChangeRequest({token, bookingIdentifier}) {
  //   return dispatch => {
  //     return new Promise(async (resolve, reject) => {
  //       try {
  //         dispatch(LoaderAction.LoaderTrue());

  //         const BearerHeaders = ApiCaller.BearerHeaders(token);

  //         let response = await ApiCaller.Get(
  //           `Booking/OwnerSharePhoneNumberToRenter?BookingIdentifier=${bookingIdentifier}&isFromOwner=false`,
  //           BearerHeaders,
  //         );
  //         console.log('SharePhoneNumber RES', response);
  //         dispatch(LoaderAction.LoaderFalse());

  //         if (response.data?.statusCode == 200) {
  //           resolve(response.data);
  //         } else {
  //           reject(false);
  //           Toast.show(
  //             ToastError(
  //               response.data?.message ?? `Error Code: ${response?.status}`,
  //             ),
  //           );
  //         }
  //       } catch (error) {
  //         reject(false);
  //         console.log('MIDDLEWARE CATCH:', error);
  //         Toast.show(ToastError(error));
  //       }
  //     });
  //   };
  // }
  static GetDateChangeRequest({
    token,
    UserID,
    pageNumber,
    pageSize,
    userTypeID,
    SearchTerm,
    callback,
  }) {
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.LoaderTrue());

          const bearerHeaders = ApiCaller.BearerHeaders(token);

          const formData = {
            UserID,
            pageNumber,
            pageSize,
            SearchTerm,
            StartDate: '',
            EndDate: '',
            UserTypeID: userTypeID,
            CategoryID: 0,
          };

          let response = await ApiCaller.Post(
            'Booking/GetBookingDateChangeRequests',
            formData,
            bearerHeaders,
          );

          if (response.data.statusCode === 200) {
            dispatch(LoaderAction.LoaderFalse());
            resolve(response.data.data);
            callback(response.data.data);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(false);
            callback(false);
            Toast.show(ToastError(response.data.message));
          }
        } catch (error) {
          dispatch(LoaderAction.LoaderFalse());
          reject(false);
          callback(false);
          Toast.show(ToastError(error.message));
        }
      });
    };
  }
  static AddExtention(token, body) {
    body.UserZoneTime = moment(new Date()).format('YYYY-MM-DD HH:mm');
    return async dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.LoaderTrue());

          const BearerHeaders = ApiCaller.BearerHeaders(token);

          let response = await ApiCaller.Post(
            'Booking/saveExtensionRequest',
            body,
            BearerHeaders,
          );
          console.log('Booking/AddExtension RES:', response);

          if (response.data?.statusCode == 200) {
            dispatch(LoaderAction.LoaderFalse());
            resolve(response?.data);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(response?.data.data);
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
}

export default BookingMiddleware;
