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
  static ChatSharePhoneNumber({token, chatIdentifier, callback}) {
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.LoaderTrue());
          const BearerHeaders = ApiCaller.BearerHeaders(token);

          const response = await ApiCaller.Post(
            `Chat/SharePhoneNumber?ChatIdentifier=${chatIdentifier}`,
            '',
            BearerHeaders,
          );

          console.warn('response', response);

          if (response.data.statusCode === 200) {
            // resolve(response.data.data);
            dispatch(LoaderAction.LoaderFalse());
            callback({message: 'success'});
            Toast.show(ToastSuccess(response.data.message));
          } else {
            // reject(false);
            callback({message: 'success'});
            dispatch(LoaderAction.LoaderFalse());
            Toast.show(ToastError(response.data.message));
          }
        } catch (error) {
          callback({message: 'fail'});
          dispatch(LoaderAction.LoaderFalse());
          Toast.show(ToastError(error.message));
        }
      });
    };
  }
  static ReadNotifications(token) {
    return async dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          // const BearerHeaders = ApiCaller.BearerHeaders(token);
          dispatch(LoaderAction.LoaderTrue());
          const BearerHeaders = ApiCaller.BearerHeaders(token);

          let response = await ApiCaller.Post(
            'Account/markAllNotificationSeen',
            {},
            BearerHeaders,
          );
          console.log('READ NOTIFICATIONS RES:', response);

          if (response.data?.statusCode == 200) {
            dispatch(LoaderAction.LoaderFalse());
            resolve(response);
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
  static GetNotificationCount(token) {
    return async dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          const BearerHeaders = ApiCaller.BearerHeaders(token);
          let response = await ApiCaller.Get(
            'Account/getNotification?loadCount=10',
            BearerHeaders,
          );
          console.log('Get notifications res:', response);

          if (response.data?.statusCode == 200) {
            dispatch(LoaderAction.LoaderFalse());
            resolve(response);
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
  static Register({
    firstName,
    lastName,
    email,
    phoneNumber,
    password,
    deviceToken,
    isCheckOutUser,
    id,
    isSocialRegister,
    socialSite,
    ProfileImage,
  }) {
    return async dispatch => {
      return new Promise(async (resolve, reject) => {
        let payload = {
          userId: 0,
          firstname: firstName,
          lastname: lastName,
          fullname: firstName + lastName,
          phoneNumber: phoneNumber ?? null,
          email: email,
          password: password,
          role: '',
          userTypeID: 4,
          appType: 4,
          userType: 1,
          errorMsg: '',
          fcmToken: deviceToken,
          otp: 0,
          isSocialRegister: isSocialRegister ?? false,
          socialSite: socialSite ?? null,
          isCheckOutUser,
          socialAccountID: id,
          socialProfileImageUrl: ProfileImage ?? '',
          UserZoneTime: moment(new Date()).format('YYYY-MM-DD HH:mm'),
        };

        // console.warn('Register isSocial', isSocialRegister);
        try {
          dispatch(LoaderAction.LoaderTrue());
          console.log('regitser====>', payload);
          let response = await ApiCaller.Post('Account/Register', payload);
          console.log('REG RES:', response);

          if (response.data?.statusCode == 200) {
            dispatch(LoaderAction.LoaderFalse());
            if (isSocialRegister == true) {
              dispatch(AuthAction.Signin(response?.data?.data));
            }
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
          console.log('catch google', error);
          dispatch(LoaderAction.LoaderFalse());
          reject(false);
          Toast.show(ToastError(error.message));
        }
      });
    };
  }
  // static GoogleAuthRegister({ email, givenName, familyName, photo, googleAuthToken, deviceToken }) {
  //   return async dispatch => {
  //     return new Promise(async (resolve, reject) => {
  //       try {
  //         dispatch(LoaderAction.LoaderTrue());

  //         let registerPayload = {
  //           firstName: givenName,
  //           lastName: familyName,
  //           password: "",
  //           emailAddress: email,
  //           profilePictureUrl: photo,
  //           phoneNumber: "",
  //           socialMediaTypeId: 1,
  //           socialMediaAccountToken: googleAuthToken,
  //           deviceTokenId: deviceToken,
  //         };

  //         let response = await ApiCaller.Post('Account/Register', registerPayload);

  //         if (response.data?.status == 200) {
  //           dispatch(LoaderAction.LoaderFalse());
  //           dispatch(AuthAction.Signin(response?.data?.data));
  //           resolve(response?.data);
  //         } else {
  //           dispatch(LoaderAction.LoaderFalse());
  //           reject(false);
  //           Toast.show(ToastError(response?.data?.message));
  //         }
  //       } catch (error) {
  //         console.log('Error', error)
  //         dispatch(LoaderAction.LoaderFalse());
  //         reject(false);
  //         Toast.show(ToastError(error.message));

  //       }
  //     });
  //   };
  // }
  // static GoogleAuthLogin({ email, deviceToken }) {
  //   return async dispatch => {
  //     return new Promise(async (resolve, reject) => {
  //       try {
  //         dispatch(LoaderAction.LoaderTrue());

  //         let loginPayload = {
  //           emailAddress: email,
  //           password: "",
  //           socialMediaTypeId: 1,
  //           fingerPrintId: '',
  //           deviceTokenId: deviceToken
  //         }

  //         let response = await ApiCaller.Post('Account/Login', loginPayload);

  //         if (response.data?.status == 200) {
  //           dispatch(LoaderAction.LoaderFalse());
  //           dispatch(AuthAction.Signin(response?.data?.data));
  //           resolve(response?.data);
  //         } else {
  //           dispatch(LoaderAction.LoaderFalse());
  //           reject(false);
  //           Toast.show(ToastError(response?.data?.message));
  //         }

  //       } catch (error) {
  //         console.log('Error', error)
  //         dispatch(LoaderAction.LoaderFalse());
  //         reject(false);
  //         Toast.show(ToastError(error.message));
  //       }
  //     });
  //   };
  // }

  static Login({email, password, FcmToken = null}) {
    return async dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.LoaderTrue());

          let payload = {
            email: email,
            password,
            appType: 4,
            // socialMediaTypeId: 0,
            // deviceTokenId: deviceToken,
            fcmToken: FcmToken,
            UserZoneTime: moment(new Date()).format('YYYY-MM-DD HH:mm'),
          };

          let response = await ApiCaller.Post('Account/Login', payload);
          console.log('LOGIN RESPONSE', response);
          if (
            response.data?.statusCode == 200 &&
            response?.data?.data?.isVerified
          ) {
            dispatch(LoaderAction.LoaderFalse());
            dispatch(AuthAction.Signin(response?.data?.data));
            resolve(response?.data);
          } else if (response?.data?.data?.isVerified == false) {
            dispatch(LoaderAction.LoaderFalse());
            reject(false);
            Toast.show(ToastError('Please verify your email first.'));
            NavigationService.navigate('Verification', {
              email: email,
              commingFromScreen: 'register',
            });
          } else {
            dispatch(LoaderAction.LoaderFalse());
            Toast.show(
              ToastError(
                response.data?.message ?? `Error Code: ${response?.status}`,
              ),
            );
          }
        } catch (e) {
          dispatch(LoaderAction.LoaderFalse());
          console.log('Error', e);
        }
      });
    };
  }
  // static FBAuthRegister({ first_name, last_name, email, profilePhoto, fbAuthToken, deviceToken }) {
  //   return async dispatch => {
  //     return new Promise(async (resolve, reject) => {
  //       try {
  //         dispatch(LoaderAction.LoaderTrue());

  //         let registerPayload = {
  //           firstName: first_name,
  //           lastName: last_name,
  //           password: "",
  //           emailAddress: email,
  //           profilePictureUrl: profilePhoto,
  //           phoneNumber: "",
  //           socialMediaTypeId: 2,
  //           socialMediaAccountToken: fbAuthToken,
  //           deviceTokenId: deviceToken,
  //         };

  //         let response = await ApiCaller.Post('Account/Register', registerPayload);
  //         console.log('API RESPONSE', response)

  //         if (response.data?.statusCode == 200) {
  //           dispatch(LoaderAction.LoaderFalse());
  //           dispatch(AuthAction.Signin(response?.data?.data));
  //           resolve(response?.data);
  //         } else {
  //           dispatch(LoaderAction.LoaderFalse());
  //           reject(false);
  //           Toast.show(ToastError(response?.data?.message));
  //         }
  //       } catch (error) {
  //         console.log('Error', error)
  //         dispatch(LoaderAction.LoaderFalse());
  //         reject(false);
  //         Toast.show(ToastError(error.message));

  //       }
  //     });
  //   };
  // }
  // static FBAuthLogin({ email, deviceToken }) {
  //   return async dispatch => {
  //     return new Promise(async (resolve, reject) => {
  //       try {
  //         dispatch(LoaderAction.LoaderTrue());

  //         let loginPayload = {
  //           emailAddress: email,
  //           password: "",
  //           socialMediaTypeId: 2,
  //           fingerPrintId: '',
  //           deviceTokenId: deviceToken
  //         }

  //         let response = await ApiCaller.Post('Account/Login', loginPayload);
  //         console.log('API RESPONSE', response)

  //         if (response.data?.statusCode == 200) {
  //           dispatch(LoaderAction.LoaderFalse());
  //           dispatch(AuthAction.Signin(response?.data?.data));
  //           resolve(response?.data);
  //         } else {
  //           dispatch(LoaderAction.LoaderFalse());
  //           reject(false);
  //           Toast.show(ToastError(response?.data?.message));
  //         }
  //       } catch (error) {
  //         console.log('Error', error)
  //         dispatch(LoaderAction.LoaderFalse());
  //         reject(false);
  //         Toast.show(ToastError(error.message));

  //       }
  //     });
  //   };
  // }

  static createNewPassword({
    emailAddress,
    currentPassword,
    newPassword,
    token,
  }) {
    return async dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.LoaderTrue());

          let formData = {
            emailAddress,
            currentPassword,
            newPassword,
          };
          const BearerHeaders = ApiCaller.BearerHeaders(token);

          let response = await ApiCaller.Post(
            'Account/CreateNewPassword',
            formData,
            BearerHeaders,
          );
          //  this.createNewPassword()
          if (response?.data.statusCode == 200) {
            dispatch(LoaderAction.LoaderFalse());
            resolve(true);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(false);
            Toast.show(
              ToastError(
                response.data?.message ?? `Error Code: ${response?.status}`,
              ),
            );
          }
        } catch (error) {
          dispatch(LoaderAction.LoaderFalse());
          reject(false);
          Toast.show(
            ToastError(
              response.data?.message ?? `Error Code: ${response?.status}`,
            ),
          );
        }
      });
    };
  }
  static Logout(token) {
    return async dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.LoaderTrue());
          const BearerHeaders = ApiCaller.BearerHeaders(token);
          let response = await ApiCaller.Post(
            'Account/Logout',
            {},
            BearerHeaders,
          );
          console.log('Logout Response', response);
          if (response?.status == 200) {
            dispatch(LoaderAction.LoaderFalse());
            resolve(true);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(false);
            Toast.show(
              ToastError(
                response.data?.message ?? `Logout Error: ${response?.status}`,
              ),
            );
          }
        } catch (error) {
          dispatch(LoaderAction.LoaderFalse());
          reject(false);
          Toast.show(
            ToastError(
              response.data?.message ?? `Logout Catch: ${response?.status}`,
            ),
          );
        }
      });
    };
  }

  static ContactUs({id, callback, contactName, contactEmail, contactMessage}) {
    return async dispatch => {
      let payload = {
        id: id,
        contactName: contactName,
        contactEmail: contactEmail,
        contactMessage: contactMessage,
        isActive: true,
        isRead: true,
      };
      try {
        dispatch(LoaderAction.LoaderTrue());
        let response = await ApiCaller.Post(
          'Common/AddContactEnquiries',
          payload,
        );
        console.log('Contact Us Response', response);
        if (response?.statusCode == 200) {
          if (response?.data?.isSuccess) {
            dispatch(LoaderAction.LoaderFalse());
            Keyboard.dismiss();
            callback(response?.data);
          } else {
            dispatch(LoaderAction.LoaderFalse());

            callback(response.data);
            console.log('erro00', response?.data?.message);
          }
        } else {
          dispatch(LoaderAction.LoaderFalse());

          console.log('statusCode false');
          callback(response.data);
          if (response?.data?.statusCodeCode != 401)
            console.log('erro', response?.data?.message);
        }
      } catch (e) {
        dispatch(LoaderAction.LoaderFalse());
        console.log('Error', e);
      }
    };
  }

  static DiscardProfileChanges({token}) {
    return async dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.LoaderTrue());
          const BearerHeaders = ApiCaller.BearerHeaders(token);
          let response = await ApiCaller.Post(
            'User/DiscardProfileChanges',
            {},
            BearerHeaders,
          );
          console.log('DISCARDCHANGESres====>', response);
          if (response?.data.statusCode == 200) {
            Toast.show(ToastSuccess('Changes discard successfully'));
            dispatch(LoaderAction.LoaderFalse());
            resolve(response?.data?.data);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(false);
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
  static GetProfileById({token, identifier}) {
    return async dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.LoaderTrue());
          const BearerHeaders = ApiCaller.BearerHeaders(token);
          let response = await ApiCaller.Get(
            `Account/GetUserDetail?isGetPending=true`,
            BearerHeaders,
          );
          console.log('getProfileByID====>', response);
          if (response?.data.statusCode == 200) {
            dispatch(LoaderAction.LoaderFalse());
            resolve(response?.data?.data);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(false);
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
  static updateProfile({body, token, isSocialRegister}) {
    return async dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.LoaderTrue());
          const BearerHeaders = ApiCaller.BearerHeaders(token);
          let response = await ApiCaller.Post(
            'Account/UpdateProfile',
            // JSON.stringify(body),
            body,
            BearerHeaders,
          );
          console.log('res====>', response);
          if (response?.data.statusCode == 200) {
            Toast.show(ToastSuccess('Profile Update request sent'));
            dispatch(LoaderAction.LoaderFalse());
            // dispatch(AuthAction.Signin(response?.data?.data));
            // if (isSocialRegister) {
            //   NavigationService.resetStack('UserStack');
            // } else {
            //   NavigationService.goBack();
            // }
            // NavigationService.goBack();
            resolve(response?.data?.data);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(false);
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

  static UploadProfilePic({token, documentObj, callback}) {
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.LoaderTrue());
          const formData = new FormData();
          formData.append('file', documentObj);

          await fetch(baseUrl + `Account/UploadProfilePicture`, {
            method: 'POST',
            body: formData,
            headers: {
              Authorization: 'Bearer ' + token,
            },
          })
            .then(data => {
              dispatch(LoaderAction.LoaderFalse());
              data.json().then(response => {
                if (response?.statusCode == 200) {
                  Keyboard.dismiss();
                  // dispatch(AuthAction.EditProfile(response.data.data));
                  callback(response?.data);
                } else {
                  console.log('statusCode false');
                  callback(response.data);
                }
              });
            })
            .catch(err => {
              dispatch(LoaderAction.LoaderFalse());
              reject(false);
              Toast.show(ToastError(err));
              console.warn(err);
            });
        } catch (error) {
          dispatch(LoaderAction.LoaderFalse());
          reject(false);
          Toast.show(ToastError('Error occurred'));
        }
      });
    };
  }
  // static UploadProfilePic({token, imageUrl, callback}) {
  //   return async dispatch => {
  //     let formData = new FormData();
  //     formData.append('imageUrl', imageUrl);
  //     // formData.append('token', token);
  //     console.log('token===>', token, imageUrl);
  //     try {
  //       dispatch(LoaderAction.LoaderTrue());
  //       let response = await ApiCaller.Post(
  //         'Account/UploadProfilePicture',
  //         formData,
  //         {
  //           Authorization: 'Bearer ' + token,
  //         },
  //       );
  //       dispatch(LoaderAction.LoaderFalse());
  //       console.log('UploadProfilePic Response', response);
  //       if (response?.statusCode == 200) {
  //         if (response?.data?.isSuccess) {
  //           Keyboard.dismiss();
  //           // dispatch(AuthAction.EditProfile(response.data.data));
  //           callback(response?.data);
  //         } else {
  //           callback(response.data);
  //         }
  //       } else {
  //         console.log('statusCode false');
  //         callback(response.data);
  //         if (response?.data?.statusCodeCode != 401)
  //           console.log('erro', response?.data?.message);
  //       }
  //     } catch (e) {
  //       dispatch(LoaderAction.LoaderFalse());
  //       console.log('Error', e);
  //     }
  //   };
  // }

  static VerifyRegister({callback, code, email}) {
    return async dispatch => {
      try {
        dispatch(LoaderAction.LoaderTrue());
        let response = await ApiCaller.Get(
          `Users/VerifyUserCode/${code}/${email}/1`,
        );
        console.log('Verify Register Response', response);
        if (response?.statusCode == 200) {
          if (response?.data?.isSuccess) {
            dispatch(LoaderAction.LoaderFalse());
            Keyboard.dismiss();
            callback(response?.data);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            callback(response?.data);
          }
        } else {
          dispatch(LoaderAction.LoaderFalse());
          callback(response?.data);
          if (response?.statusCode != 401)
            Toast.show(ToastError(response?.data?.message));
        }
      } catch (e) {
        dispatch(LoaderAction.LoaderFalse());
        console.log('Error', e);
      }
    };
  }

  static VerifyForgotPassword({callback, code, email}) {
    return async dispatch => {
      try {
        dispatch(LoaderAction.LoaderTrue());
        let response = await ApiCaller.Get(
          `Users/VerifyUserCode/${code}/${email}/2`,
        );
        console.log('Verify Forgot Password Response', response);
        if (response?.statusCode == 200) {
          if (response?.data?.isSuccess) {
            dispatch(LoaderAction.LoaderFalse());
            Keyboard.dismiss();
            callback(response?.data);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            callback(response?.data);
          }
        } else {
          dispatch(LoaderAction.LoaderFalse());
          callback(response?.data);
          if (response?.statusCode != 401)
            Toast.show(ToastError(response?.data?.message));
        }
      } catch (e) {
        dispatch(LoaderAction.LoaderFalse());
        console.log('Error', e);
      }
    };
  }

  static GetFAQ({callback}) {
    return async dispatch => {
      try {
        dispatch(LoaderAction.LoaderTrue());
        let response = await ApiCaller.Get(`Common/GetFAQ`);
        console.log('Get FAQ Response', response);
        if (response?.statusCode == 200) {
          if (response?.data?.isSuccess) {
            dispatch(LoaderAction.LoaderFalse());
            Keyboard.dismiss();
            callback(response?.data);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            callback(response?.data);
          }
        } else {
          dispatch(LoaderAction.LoaderFalse());
          callback(response?.data);
          if (response?.statusCode != 401)
            Toast.show(ToastError(response?.data?.message));
        }
      } catch (e) {
        dispatch(LoaderAction.LoaderFalse());
        console.log('Error', e);
      }
    };
  }

  static ForgotPassword({email}) {
    return async dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.LoaderTrue());

          let payload = {
            email: email,
            otp: '',
          };

          let response = await ApiCaller.Post(
            'Account/ResetPasswordSendOTP',
            payload,
          );
          console.log('FORGOT PASSWORD RESPONSE', response);

          if (response.data?.statusCode == 200) {
            dispatch(LoaderAction.LoaderFalse());
            resolve(response?.data);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(false);
            Toast.show(ToastError(response.data?.message));
          }
        } catch (e) {
          dispatch(LoaderAction.LoaderFalse());
          console.log('Error', e);
        }
      });
    };
  }

  static VerifyOTP({email, code, typeId}) {
    return async dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.LoaderTrue());

          let payload = {
            email: email,
            optpCode: code,
            codeTypeId: typeId,
          };
          let response = await ApiCaller.Post(
            'Account/EmailVerification',
            payload,
          );
          console.log('VERIFY OTP RESPONSE\n', response);

          if (response.data?.statusCode == 200) {
            dispatch(LoaderAction.LoaderFalse());
            resolve(response?.data);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(false);
            Toast.show(ToastError(response.data?.message));
          }
        } catch (e) {
          dispatch(LoaderAction.LoaderFalse());
          reject(false);
          Toast.show(ToastError(error?.message));
          console.log('Error', e);
        }
      });
    };
  }
  static VerifyOTPOnBooking({email, code, typeId}) {
    return async dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.LoaderTrue());

          let payload = {
            Email: email,
            OTP: code,
          };
          let response = await ApiCaller.Post('Account/UpdateOTP', payload);
          console.log('VERIFY OTP RESPONSE\n', response);

          if (response.data?.statusCode == 200) {
            dispatch(LoaderAction.LoaderFalse());
            Toast.show(
              ToastSuccess(
                response.data?.statusCode == 500
                  ? 'Network Error'
                  : response.data.message,
              ),
            );
            resolve(response?.data);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(false);
            Toast.show(ToastError(response.data?.message));
          }
        } catch (e) {
          dispatch(LoaderAction.LoaderFalse());
          reject(false);
          Toast.show(ToastError(error?.message));
          console.log('Error', e);
        }
      });
    };
  }
  static ResendOTP({email, typeId}) {
    return async dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.LoaderTrue());

          let payload = {
            email: email,
            // typeId: typeId
            otp: '',
          };
          let response = await ApiCaller.Post('Account/UpdateOTP', payload);
          console.log('Resend OTP RESPONSE', response);

          if (response.data?.statusCode == 200) {
            dispatch(LoaderAction.LoaderFalse());
            Toast.show(
              ToastSuccess(
                response.data?.statusCode == 500
                  ? 'Network Error'
                  : response.data.message,
              ),
            );
            resolve(response?.data);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(false);
            Toast.show(ToastError(response.data?.message));
          }
        } catch (e) {
          dispatch(LoaderAction.LoaderFalse());
          reject(false);
          Toast.show(ToastError(error?.message));
          console.log('Error', e);
        }
      });
    };
  }

  //after click on forgot password | withou login
  static ChangePassword({email, pass}) {
    return async dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.LoaderTrue());

          let payload = {
            email: email,
            newPassword: pass,
          };
          let response = await ApiCaller.Post(
            'Account/OTPChangePassword',
            payload,
          );
          console.log('CHANGE PASSWORD RESPONSE', response);

          if (response.data?.statusCode == 200) {
            dispatch(LoaderAction.LoaderFalse());
            resolve(response?.data);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(false);
            Toast.show(ToastError(response.data?.message));
          }
        } catch (e) {
          dispatch(LoaderAction.LoaderFalse());
          console.log('Error', e);
        }
      });
    };
  }
  //change password from profile
  static ProfileChangePassword({
    token,
    currentPassword,
    newPassword,
    confirmPassword,
  }) {
    return async dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          const BearerHeaders = ApiCaller.BearerHeaders(token);

          dispatch(LoaderAction.LoaderTrue());

          let payload = {
            currentPassword,
            newPassword,
            confirmPassword,
          };
          let response = await ApiCaller.Post(
            'Account/ChangePassword',
            payload,
            BearerHeaders,
          );
          console.log('CHANGE PASSWORD RESPONSE', response);

          if (response.data?.statusCode == 200) {
            dispatch(LoaderAction.LoaderFalse());
            resolve(response?.data);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(false);
            Toast.show(ToastError(response.data?.message));
          }
        } catch (e) {
          dispatch(LoaderAction.LoaderFalse());
          console.log('Error', e);
        }
      });
    };
  }
  static updateLastLogin({token}) {
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.LoaderTrue());

          const BearerHeaders = ApiCaller.BearerHeaders(token);

          let response = await ApiCaller.Get(
            'Account/UpdateLastLoginStatusCode',
            BearerHeaders,
          );
          console.log('UPDATE LOGIN STATUSCode RES', response);
          dispatch(LoaderAction.LoaderFalse());

          if (response.data?.statusCode == 200) {
            resolve(response.data?.data);
          } else {
            reject(false);
            Toast.show(ToastError(response.data?.message));
          }
        } catch (error) {
          reject(false);
          Toast.show(ToastError(error));
        }
      });
    };
  }

  static Contact({email, pass}) {
    return async dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.LoaderTrue());

          let payload = {
            email: email,
            message: pass,
          };
          let response = await ApiCaller.Post('Account/ContactUs', payload);
          if (response.data?.statusCode == 200) {
            dispatch(LoaderAction.LoaderFalse());
            Toast.show(ToastSuccess(response?.data?.message));
            // resolve(response?.data);
            NavigationService.goBack();
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(false);
            Toast.show(ToastError(response.data?.message));
          }
        } catch (e) {
          dispatch(LoaderAction.LoaderFalse());
          console.log('Error', e);
        }
      });
    };
  }

  static GetTerms() {
    return async dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.LoaderTrue());
          let response = await ApiCaller.Get('Terms/getTerms');
          if (response.data?.statusCode == 200) {
            // dispatch(LoaderAction.LoaderFalse());
            // Toast.show(ToastSuccess(response?.data?.message));
            resolve(response?.data);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(false);
            Toast.show(ToastError(response.data?.message));
          }
        } catch (e) {
          dispatch(LoaderAction.LoaderFalse());
          console.log('Error', e);
        }
      });
    };
  }

  static GetPrivacy() {
    return async dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.LoaderTrue());
          let response = await ApiCaller.Get('Privacy/PrivacyPolicy');
          if (response.data?.statusCode == 200) {
            // dispatch(LoaderAction.LoaderFalse());
            // Toast.show(ToastSuccess(response?.data?.message));
            resolve(response?.data);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(false);
            Toast.show(ToastError(response.data?.message));
          }
        } catch (e) {
          dispatch(LoaderAction.LoaderFalse());
          console.log('Error', e);
        }
      });
    };
  }

  static GetNotification({num, token, callback}) {
    return async dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.LoaderTrue());
          const BearerHeaders = ApiCaller.BearerHeaders(token);
          let response = await ApiCaller.Get(
            `Account/getNotification?loadCount=${num}`,
            BearerHeaders,
          );
          console.log('notification', response, BearerHeaders);
          if (response.data?.statusCode == 200) {
            dispatch(LoaderAction.LoaderFalse());
            callback(response?.data);
            // Toast.show(ToastSuccess(response?.data?.message));
            // resolve(response?.data);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(false);
            // console.warn(response);
            // Toast.show(ToastError(response.data?.message));
          }
        } catch (e) {
          dispatch(LoaderAction.LoaderFalse());
          console.log('Error', e);
        }
      });
    };
  }

  // static GetReviews({payload, token}) {
  //   console.warn(token);
  //   return async dispatch => {
  //     return new Promise(async (resolve, reject) => {
  //       try {
  //         dispatch(LoaderAction.LoaderTrue());
  //         const BearerHeaders = ApiCaller.BearerHeaders(token);
  //         let response = await ApiCaller.Post(
  //           `User/GetUserReviews`,
  //           payload,
  //           BearerHeaders,
  //         );
  //         if (response.data?.statusCode == 200) {
  //           dispatch(LoaderAction.LoaderFalse());
  //           console.log('Api Reviews===>', response);
  //           // Toast.show(ToastSuccess(response?.data?.message));
  //           // resolve(response?.data);
  //         } else {
  //           dispatch(LoaderAction.LoaderFalse());
  //           reject(false);
  //           // console.warn(response);
  //           // Toast.show(ToastError(response.data?.message));
  //         }
  //       } catch (e) {
  //         dispatch(LoaderAction.LoaderFalse());
  //         console.log('Error', e);
  //       }
  //     });
  //   };
  // }

  static GetReviews({body, token, callback}) {
    console.warn('toeken-==>', token);
    return async dispatch => {
      try {
        dispatch(LoaderAction.LoaderTrue());
        let response = await ApiCaller.Post('User/GetUserReviews', body, {
          Authorization: 'Bearer ' + token,
        });
        dispatch(LoaderAction.LoaderFalse());
        console.log('Reviews Response', response);
        if (response?.statusCode == 200) {
          if (response?.data?.isSuccess) {
            Keyboard.dismiss();
            callback(response?.data);
          } else {
            callback(response.data);
          }
        } else {
          console.log('statusCode false');
          callback(response.data);
          if (response?.data?.statusCodeCode != 401)
            console.log('erro', response?.data?.message);
        }
      } catch (e) {
        dispatch(LoaderAction.LoaderFalse());
        console.log('Error', e);
      }
    };
  }

  static GetExtensionRequest({body, token, callback}) {
    // console.warn('toeken-==>', token);
    return async dispatch => {
      try {
        dispatch(LoaderAction.LoaderTrue());
        let response = await ApiCaller.Post(
          'Booking/GetExtensionRequestsList',
          body,
          {
            Authorization: 'Bearer ' + token,
          },
        );
        dispatch(LoaderAction.LoaderFalse());
        // console.warn('\\extension Res', response);
        if (response?.statusCode == 200) {
          if (response?.data?.isSuccess) {
            Keyboard.dismiss();
            callback(response?.data);
          } else {
            callback(response.data);
          }
        } else {
          console.log('statusCode false');
          callback(response.data);
          if (response?.data?.statusCodeCode != 401)
            console.log('erro', response?.data?.message);
        }
      } catch (e) {
        dispatch(LoaderAction.LoaderFalse());
        console.log('Error', e);
      }
    };
  }

  static GetSavedTrailors({body, token, callback}) {
    // console.warn('toeken-==>', token);
    return async dispatch => {
      try {
        dispatch(LoaderAction.LoaderTrue());
        let response = await ApiCaller.Post('Favourite/UserFavourites', body, {
          Authorization: 'Bearer ' + token,
        });
        dispatch(LoaderAction.LoaderFalse());
        if (response?.statusCode == 200) {
          if (response?.data?.isSuccess) {
            Keyboard.dismiss();
            callback(response?.data);
          } else {
            callback(response.data);
          }
        } else {
          console.log('statusCode false');
          callback(response.data);
          if (response?.data?.statusCodeCode != 401)
            console.log('erro', response?.data?.message);
        }
      } catch (e) {
        dispatch(LoaderAction.LoaderFalse());
        console.log('Error', e);
      }
    };
  }

  static DeleteSaveTrailors({body, token, callback}) {
    return async dispatch => {
      try {
        dispatch(LoaderAction.LoaderTrue());
        let response = await ApiCaller.Post('Favourite/AddFavourite', body, {
          Authorization: 'Bearer ' + token,
        });
        dispatch(LoaderAction.LoaderFalse());
        if (response?.statusCode == 200) {
          if (response?.data?.isSuccess) {
            Keyboard.dismiss();
            Toast.show(ToastSuccess(response.data?.message));
            callback(response?.data);
          } else {
            callback(response.data);
          }
        } else {
          console.log('statusCode false');
          callback(response.data);
          if (response?.data?.statusCodeCode != 401)
            console.log('erro', response?.data?.message);
        }
      } catch (e) {
        dispatch(LoaderAction.LoaderFalse());
        console.log('Error', e);
      }
    };
  }

  static AddSaveTrailors({body, token, callback}) {
    return async dispatch => {
      try {
        dispatch(LoaderAction.LoaderTrue());
        let response = await ApiCaller.Post('Favourite/AddFavourite', body, {
          Authorization: 'Bearer ' + token,
        });
        console.log('Favourite/AddFavourite', response);
        dispatch(LoaderAction.LoaderFalse());
        if (response?.statusCode == 200) {
          if (response?.data?.isSuccess) {
            Toast.show(ToastSuccess(response.data?.message));
            Keyboard.dismiss();
            callback(response?.data);
          } else {
            callback(response.data);
          }
        } else {
          console.log('statusCode false');
          callback(response.data);
          if (response?.data?.statusCodeCode != 401)
            console.log('erro', response?.data?.message);
        }
      } catch (e) {
        dispatch(LoaderAction.LoaderFalse());
        console.log('Error', e);
      }
    };
  }

  static GetBookings({body, token}) {
    return async dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.LoaderTrue());
          const BearerHeaders = ApiCaller.BearerHeaders(token);
          const queryString = await ApiCaller.getQueryStringOfObject(body);

          let response = await ApiCaller.Get(
            `Booking/getMyBooking?${queryString}`,
            BearerHeaders,
          );
          console.log('Response booking====>', response?.data);
          if (response.data?.statusCode == 200) {
            dispatch(LoaderAction.LoaderFalse());
            // Toast.show(ToastSuccess(response?.data?.message));
            resolve(response?.data);
            dispatch(AuthMiddleware.GetUserPulse({token}));
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(false);
            Toast.show(ToastError(response.data?.message));
          }
        } catch (e) {
          dispatch(LoaderAction.LoaderFalse());
          console.log('Error', e);
        }
      });
    };
  }
  static GetBookingDetailsByIdentifier(body, token) {
    return async dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.LoaderTrue());
          const BearerHeaders = ApiCaller.BearerHeaders(token);
          const queryString = await ApiCaller.getQueryStringOfObject(body);
          let response = await ApiCaller.Get(
            `Booking/GetBookingDetailByIdentfier?${queryString}`,
            BearerHeaders,
          );
          console.log('api response===>', response);
          if (response.data?.statusCode == 200) {
            dispatch(LoaderAction.LoaderFalse());
            // Toast.show(ToastSuccess(response?.data?.message));
            resolve(response?.data);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(false);
            Toast.show(ToastError(response.data?.message));
          }
        } catch (e) {
          dispatch(LoaderAction.LoaderFalse());
          console.log('Error', e);
        }
      });
    };
  }

  static GetCancellationCharges(body, token) {
    console.log('body===>', body, token);
    return async dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.LoaderTrue());
          const BearerHeaders = ApiCaller.BearerHeaders(token);
          const queryString = await ApiCaller.getQueryStringOfObject(body);

          let response = await ApiCaller.Get(
            `Booking/getCancellationChargesByBooking?${queryString}`,
            BearerHeaders,
          );
          console.log('cancellation charges====>', response?.data);
          if (response.data?.statusCode == 200) {
            dispatch(LoaderAction.LoaderFalse());
            // Toast.show(ToastSuccess(response?.data?.message));
            resolve(response?.data);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(false);
            Toast.show(ToastError(response.data?.message));
          }
        } catch (e) {
          dispatch(LoaderAction.LoaderFalse());
          console.log('Error', e);
        }
      });
    };
  }
  static CancelledBooking(body, token) {
    // console.log('body----->', body);
    return async dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          const BearerHeaders = ApiCaller.BearerHeaders(token);
          dispatch(LoaderAction.LoaderTrue());
          let response = await ApiCaller.Post(
            'Booking/updateBookingStatus',
            body,
            BearerHeaders,
          );
          console.log('LOGIN RESPONSE', response);
          if (response.data?.statusCode == 200) {
            console.log('cancellation booking status====>', response?.data);
            dispatch(LoaderAction.LoaderFalse());
            resolve(response?.data);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            Toast.show(
              ToastError(
                response.data?.statusCode == 500
                  ? 'Network Error'
                  : response.data.message,
              ),
            );
          }
        } catch (e) {
          dispatch(LoaderAction.LoaderFalse());
          console.log('Error', e);
        }
      });
    };
  }

  // static ExtentionRequestExist(body, token) {
  //   return async dispatch => {
  //     return new Promise(async (resolve, reject) => {
  //       try {
  //         const BearerHeaders = ApiCaller.BearerHeaders(token);
  //         dispatch(LoaderAction.LoaderTrue());
  //         let response = await ApiCaller.Post(
  //           'Booking/CheckBookingExtensionExists',
  //           body,
  //           BearerHeaders,
  //         );
  //         console.log('Extension RESPONSE', response);
  //         if (response.data?.statusCode == 200) {
  //           dispatch(LoaderAction.LoaderFalse());
  //           resolve(response?.data);
  //         } else {
  //           dispatch(LoaderAction.LoaderFalse());
  //           Toast.show(ToastError(response.data?.statusCode==500 ?"Network Error":response.data.message));
  //         }
  //       } catch (e) {
  //         dispatch(LoaderAction.LoaderFalse());
  //         console.log('Error', e);
  //       }
  //     });
  //   };
  // }

  static ExtentionRequestExist(body, token) {
    // console.log('body----->', body);
    return async dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          const BearerHeaders = ApiCaller.BearerHeaders(token);
          dispatch(LoaderAction.LoaderTrue());
          let response = await ApiCaller.Post(
            'Booking/CheckBookingExtensionExists',
            body,
            BearerHeaders,
          );
          console.log('ExtentionRequestExist RESPONSE', response);
          if (response.data?.statusCode == 200) {
            // console.log('cancellation booking status====>', response?.data);
            dispatch(LoaderAction.LoaderFalse());
            resolve(response?.data);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            Toast.show(
              ToastError(
                response.data?.statusCode == 500
                  ? 'Network Error'
                  : response.data.message,
              ),
            );
          }
        } catch (e) {
          dispatch(LoaderAction.LoaderFalse());
          console.log('Error', e);
        }
      });
    };
  }
  static ExtensionRequestPackages(body, token) {
    // console.log('body----->', body);
    return async dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          const BearerHeaders = ApiCaller.BearerHeaders(token);
          dispatch(LoaderAction.LoaderTrue());
          let response = await ApiCaller.Post(
            'Booking/BookingExtensionApp',
            body,
            BearerHeaders,
          );
          console.log('PAckages Response', response);
          if (response.data?.statusCode == 200) {
            // console.log('cancellation booking status====>', response?.data);
            dispatch(LoaderAction.LoaderFalse());
            resolve(response?.data);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            Toast.show(
              ToastError(
                response.data?.statusCode == 500
                  ? 'Network Error'
                  : response.data.message,
              ),
            );
          }
        } catch (e) {
          dispatch(LoaderAction.LoaderFalse());
          console.log('Error', e);
        }
      });
    };
  }
  static GetMyChats = ({body, token}) => {
    // console.warn('body token', body, token);
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.LoaderTrue());
          const bearerHeaders = ApiCaller.BearerHeaders(token);
          console.log('bearerHeaders', bearerHeaders);
          const response = await ApiCaller.Post(
            'Chat/GetChatsByUserId',
            body,
            bearerHeaders,
          );
          if (response.data.statusCode === 200) {
            dispatch(LoaderAction.LoaderFalse());
            resolve(response.data.data);
            dispatch(AuthMiddleware.GetUserPulse({token}));
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(false);
            Toast.show(
              ToastError(
                response.data?.statusCode == 500
                  ? 'Network Error'
                  : response.data.message,
              ),
            );
          }
          // console.warn('response ==', response);
        } catch (error) {
          dispatch(LoaderAction.LoaderFalse());
          reject(false);
          Toast.show(ToastError(error.message));
        }
      });
    };
  };
  static SendBookingInstantMessage = ({bookingId, message, userId, token}) => {
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          let body = {bookingId, message, userId};
          dispatch(LoaderAction.LoaderTrue());
          const bearerHeaders = ApiCaller.BearerHeaders(token);
          const response = await ApiCaller.Post(
            'Chat/SendBookingInstantMessage',
            body,
            bearerHeaders,
          );
          console.log('Chat/SendBookingInstantMessage RES', response);
          dispatch(LoaderAction.LoaderFalse());
          if (response.data.statusCode === 200) {
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
          dispatch(LoaderAction.LoaderFalse());
          reject(false);
          Toast.show(ToastError(error.message));
        }
      });
    };
  };
  static CreateChat = ({
    token,
    message,
    trailerIdentifier,
    trailerID,
    renterID,
  }) => {
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          let body = {
            renterID,
            subject: '',
            ownerID: 0,
            trailerID,
            trailerIdentifier,
            bookingIdentifier: '',
            identifier: '',
            chatID: 0,
            message,
            userId: 0,
            userName: '',
          };

          dispatch(LoaderAction.LoaderTrue());
          const bearerHeaders = ApiCaller.BearerHeaders(token);
          const response = await ApiCaller.Post(
            'Chat/AddChat',
            body,
            bearerHeaders,
          );
          console.log('Chat/AddChat RES', response);
          dispatch(LoaderAction.LoaderFalse());
          if (response.data.statusCode === 200) {
            resolve(response.data);
          } else {
            // reject(false);
            Toast.show({
              type: 'error',
              text1: 'Error',
              text2: response.data.message,
              position: 'bottom',
              autoHide: true,
            });
            // alert(response?.data?.message);
          }
        } catch (error) {
          dispatch(LoaderAction.LoaderFalse());
          reject(false);
          // Toast.show(ToastError(error.message));
        }
      });
    };
  };
  static SendMessage({body, token, callback}) {
    return async dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.LoaderFalse());
          const BearerHeaders = ApiCaller.BearerHeaders(token);
          let response = await ApiCaller.Post(
            'Chat/SendMessage',
            body,
            BearerHeaders,
          );
          console.log('Send Message', response);
          if (response?.data.statusCode == 200) {
            dispatch(LoaderAction.LoaderFalse());
            callback(response.data.data);
            // resolve(true);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            // reject(false);
            callback(false);
            // console.log(response?.data?.message);
            Toast.show({
              type: 'error',
              text1: 'Error',
              text2: response.data.message,
              position: 'bottom',
              autoHide: true,
            });
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

  static GetChatByIdentifier({identifier, token, callback}) {
    return async dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.LoaderFalse());
          const BearerHeaders = ApiCaller.BearerHeaders(token);
          let response = await ApiCaller.Get(
            `Chat/GetChatByIdentifier/${identifier}`,
            BearerHeaders,
          );
          console.log('Chat/GetChatByIdentifier RES', response);
          if (response?.data.statusCode == 200) {
            // Toast.show(ToastSuccess('Chat Successfully'));
            dispatch(LoaderAction.LoaderFalse());
            // resolve(true);
            callback(response.data.data);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(false);
            Toast.show(
              ToastError(
                response.data?.statusCode == 500
                  ? 'Network Error'
                  : response.data.message,
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

  static GetUserProfileByIdentifier(identifier, token) {
    return async dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.LoaderTrue());
          const BearerHeaders = ApiCaller.BearerHeaders(token);
          const queryString = await ApiCaller.getQueryStringOfObject(
            identifier,
          );
          let response = await ApiCaller.Get(
            `ProfileDetail/GetProfileDetail?${queryString}`,
            BearerHeaders,
          );
          console.log('ProfileDetail/GetProfileDetail RES', response);
          if (response?.data.statusCode == 200) {
            // Toast.show(ToastSuccess('Chat Successfully'));
            dispatch(LoaderAction.LoaderFalse());
            resolve(response?.data);
            // callback(response.data.data);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(false);
            Toast.show(
              ToastError(
                response.data?.statusCode == 500
                  ? 'Network Error'
                  : response.data.message,
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
  static GetProfilesReviewByIdentifier(body, token) {
    return async dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.LoaderTrue());
          const BearerHeaders = ApiCaller.BearerHeaders(token);
          const queryString = await ApiCaller.getQueryStringOfObject(body);
          let response = await ApiCaller.Get(
            `ProfileDetail/GetReviews?${queryString}`,
            BearerHeaders,
          );
          if (response?.data.statusCode == 200) {
            // Toast.show(ToastSuccess('Chat Successfully'));
            dispatch(LoaderAction.LoaderFalse());
            resolve(response?.data);
            // callback(response.data.data);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(false);
            Toast.show(
              ToastError(
                response.data?.statusCode == 500
                  ? 'Network Error'
                  : response.data.message,
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
  static GetStates(token) {
    return async dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.LoaderTrue());
          const BearerHeaders = ApiCaller.BearerHeaders(token);

          let response = await ApiCaller.Get(
            `Trailer/getTrailerState`,
            BearerHeaders,
            console.log('states', response),
          );
          if (response?.data.statusCode == 200) {
            // Toast.show(ToastSuccess('Chat Successfully'));
            dispatch(LoaderAction.LoaderFalse());
            resolve(response?.data);
            // callback(response.data.data);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(false);
            Toast.show(
              ToastError(
                response.data?.statusCode == 500
                  ? 'Network Error'
                  : response.data.message,
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

  static PostReviews({body, token, callback}) {
    return async dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.LoaderFalse());
          const BearerHeaders = ApiCaller.BearerHeaders(token);
          let response = await ApiCaller.Post(
            'Review/AddReview',
            body,
            BearerHeaders,
          );
          console.log('Res Reviews===>', response);
          if (response?.data.statusCode == 200) {
            dispatch(LoaderAction.LoaderFalse());
            callback(response.data);
            // resolve(true);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(false);
            Toast.show(
              ToastError(
                response.data?.statusCode == 500
                  ? 'Network Error'
                  : response.data.message,
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
  static DeleteAccount({token, callback}) {
    return async dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.LoaderFalse());
          const BearerHeaders = ApiCaller.BearerHeaders(token);
          let response = await ApiCaller.Post(
            'User/InActiveUserApp',
            {},
            BearerHeaders,
          );
          console.log('InActiveAccount===>', response);
          if (response?.data.statusCode == 200) {
            dispatch(LoaderAction.LoaderFalse());
            // callback(response.data);
            resolve(response?.data);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(false);
            Toast.show(
              ToastError(
                response.data?.statusCode == 500
                  ? 'Network Error'
                  : response.data.message,
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
  static UpdateOffer({token, payload}) {
    return async dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.LoaderTrue());
          const BearerHeaders = ApiCaller.BearerHeaders(token);
          let response = await ApiCaller.Post(
            'Chat/UpdateOfferStatus',
            payload,
            BearerHeaders,
          );
          console.log('OfferStatus===>', response);
          if (response?.data.statusCode == 200) {
            dispatch(LoaderAction.LoaderFalse());
            // callback(response.data);
            resolve(response?.data);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(false);
            Toast.show(
              ToastError(
                response.data?.statusCode == 500
                  ? 'Network Error'
                  : response.data.message,
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
  static GetUserPulse({token}) {
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          const BearerHeaders = ApiCaller.BearerHeaders(token);
          const response = await ApiCaller.Get(
            'User/GetUserPulse',
            BearerHeaders,
          );
          console.log('Get user pulse response =======', response.data);
          if (response.data.statusCode === 200) {
            resolve(response.data.data);
            dispatch(
              AuthAction.GetIndicator({
                messageCount: response.data.data.messagePulse.messageCount,
                bookingCount: response.data.data.bookingPulse.bookingCount,
              }),
            );
          } else {
            reject(false);
            Toast.show(
              ToastError(
                response.data?.statusCode == 500
                  ? 'Network Error'
                  : response.data.message,
              ),
            );
          }
        } catch (error) {
          reject(false);
          Toast.show(ToastError(error.message));
        }
      });
    };
  }
  static GetChatCheckBoxStatus({identifier, token, callback}) {
    // console.log('iden===>', identifier, token);
    return async dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          const BearerHeaders = ApiCaller.BearerHeaders(token);
          let response = await ApiCaller.Post(
            `Chat/AcceptTermsForChat?Identifier=${identifier}`,
            {},
            BearerHeaders,
          );
          console.log('Chat/AcceptTermsForChat RES', response);
          if (response?.data.statusCode == 200) {
            // Toast.show(ToastSuccess('Chat Successfully'));
            resolve(response?.data?.data);
            callback(response.data.data);
          } else {
            reject(false);
            Toast.show(
              ToastError(
                response.data?.statusCode == 500
                  ? 'Network Error'
                  : response.data.message,
              ),
            );
          }
        } catch (error) {
          reject(false);
          Toast.show(ToastError(error.message));
        }
      });
    };
  }
}

export default AuthMiddleware;
