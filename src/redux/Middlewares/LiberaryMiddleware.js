import Toast from 'react-native-toast-message';
import {ApiCaller, APIs} from '../../config';
import {ToastError} from '../../config/Constants';
import LoaderAction from '../Actions/LoaderAction';

export default class DataBaseMiddleware {
  // static GetTrailerCategories() {
  //   return dispatch => {
  //     return new Promise(async (resolve, reject) => {
  //       try {
  //         const response = await ApiCaller.Get(APIs.GetTrailerCategories);

  //         if (response.data.statusCode === 200) {
  //           dispatch(LoaderAction.LoaderFalse());
  //           resolve(response.data.data);
  //         } else {
  //           dispatch(LoaderAction.LoaderFalse());
  //           reject(false);
  //           Toast.show(ToastError(response.data.message));
  //         }
  //       } catch (error) {
  //         dispatch(LoaderAction.LoaderFalse());
  //         console.warn('error', error);
  //         reject(false);
  //         Toast.show(ToastError(error.message));
  //       }
  //     });
  //   };
  // }
  // static GetTrailerBallSize() {
  //   return dispatch => {
  //     return new Promise(async (resolve, reject) => {
  //       try {
  //         const response = await ApiCaller.Get(APIs.getBallSize);

  //         if (response.data.statusCode === 200) {
  //           dispatch(LoaderAction.LoaderFalse());
  //           resolve(response.data.data);
  //         } else {
  //           dispatch(LoaderAction.LoaderFalse());
  //           reject(false);
  //           Toast.show(ToastError(response.data.message));
  //         }
  //       } catch (error) {
  //         dispatch(LoaderAction.LoaderFalse());
  //         console.warn('error', error);
  //         reject(false);
  //         Toast.show(ToastError(error.message));
  //       }
  //     });
  //   };
  // }
  // static GetTrailerHitchType() {
  //   return dispatch => {
  //     return new Promise(async (resolve, reject) => {
  //       try {
  //         const response = await ApiCaller.Get(APIs.getHitchType);

  //         if (response.data.statusCode === 200) {
  //           dispatch(LoaderAction.LoaderFalse());
  //           resolve(response.data.data);
  //         } else {
  //           dispatch(LoaderAction.LoaderFalse());
  //           reject(false);
  //           Toast.show(ToastError(response.data.message));
  //         }
  //       } catch (error) {
  //         dispatch(LoaderAction.LoaderFalse());
  //         console.warn('error', error);
  //         reject(false);
  //         Toast.show(ToastError(error.message));
  //       }
  //     });
  //   };
  // }

  static GetLibrary({token, callback}) {
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        const bearerHeaders = ApiCaller.BearerHeaders(token);
        try {
          dispatch(LoaderAction.LoaderTrue());
          const response = await ApiCaller.Get(
            'Library/GetLibrary',
            bearerHeaders,
          );
          dispatch(LoaderAction.LoaderFalse());

          if (response.data.statusCode === 200) {
            resolve(response.data.data);
            callback(response.data.data);
          } else {
            reject(false);
            Toast.show(ToastError(response.data.message));
          }
        } catch (error) {
          dispatch(LoaderAction.LoaderFalse());
          console.warn('error', error);
          reject(false);
          Toast.show(ToastError(error.message));
        }
      });
    };
  }

  static GetLibraryMedia({token, callback, identifier}) {
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        const bearerHeaders = ApiCaller.BearerHeaders(token);
        try {
          const response = await ApiCaller.Get(
            `Library/GetMedia?LibraryIdentifier=${identifier}`,
            bearerHeaders,
          );

          if (response.data.statusCode === 200) {
            dispatch(LoaderAction.LoaderFalse());
            resolve(response.data.data);
            callback(response.data.data);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(false);
            Toast.show(ToastError(response.data.message));
          }
        } catch (error) {
          dispatch(LoaderAction.LoaderFalse());
          console.warn('error', error);
          reject(false);
          Toast.show(ToastError(error.message));
        }
      });
    };
  }

  static GetLibraryFAQ({token, callback, identifier}) {
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        const bearerHeaders = ApiCaller.BearerHeaders(token);
        try {
          const response = await ApiCaller.Get(
            `Library/GetFaq?LibraryIdentifier=${identifier}`,
            bearerHeaders,
          );

          if (response.data.statusCode === 200) {
            dispatch(LoaderAction.LoaderFalse());
            resolve(response.data.data);
            callback(response.data.data);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(false);
            Toast.show(ToastError(response.data.message));
          }
        } catch (error) {
          dispatch(LoaderAction.LoaderFalse());
          console.warn('error', error);
          reject(false);
          Toast.show(ToastError(error.message));
        }
      });
    };
  }

  static GetLatestBookings({token, callback}) {
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        const bearerHeaders = ApiCaller.BearerHeaders(token);
        try {
          const response = await ApiCaller.Get(
            APIs.getLatestBookings,
            bearerHeaders,
          );

          if (response.data.statusCode === 200) {
            dispatch(LoaderAction.LoaderFalse());
            resolve(response.data);
            callback(response.data);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(false);
            Toast.show(ToastError(response.data.message));
          }
        } catch (error) {
          dispatch(LoaderAction.LoaderFalse());
          console.warn('error', error);
          reject(false);
          Toast.show(ToastError(error.message));
        }
      });
    };
  }

  static GetRevenueSammary({token, callback}) {
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        dispatch(LoaderAction.loaderTrue());
        const bearerHeaders = ApiCaller.BearerHeaders(token);
        try {
          const response = await ApiCaller.Get(
            APIs.getRevSummary,
            bearerHeaders,
          );

          if (response.data.statusCode === 200) {
            dispatch(LoaderAction.LoaderFalse());
            resolve(response.data);
            callback(response.data);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(false);
            Toast.show(ToastError(response.data.message));
          }
        } catch (error) {
          dispatch(LoaderAction.LoaderFalse());
          console.warn('error', error);
          reject(false);
          Toast.show(ToastError(error.message));
        }
      });
    };
  }

  static GetRevenueDetail({token, callback, body}) {
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        dispatch(LoaderAction.loaderTrue());
        const bearerHeaders = ApiCaller.BearerHeaders(token);
        try {
          const response = await ApiCaller.Post(
            APIs.getRevDetail,
            body,
            bearerHeaders,
          );
          console.log('response====', response);
          if (response.data.statusCode === 200) {
            dispatch(LoaderAction.LoaderFalse());
            resolve(response.data);
            callback(response.data);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(false);
            Toast.show(ToastError(response.data.message));
          }
        } catch (error) {
          dispatch(LoaderAction.LoaderFalse());
          console.warn('error', error);
          reject(false);
          Toast.show(ToastError(error.message));
        }
      });
    };
  }

  static GetMyPayOuts({token, callback, body}) {
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        dispatch(LoaderAction.loaderTrue());
        const bearerHeaders = ApiCaller.BearerHeaders(token);
        try {
          const response = await ApiCaller.Get(APIs.myPayouts, bearerHeaders);
          console.log('response====', response);
          if (response.data.statusCode === 200) {
            dispatch(LoaderAction.LoaderFalse());
            resolve(response.data);
            callback(response.data);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(false);
            Toast.show(ToastError(response.data.message));
          }
        } catch (error) {
          dispatch(LoaderAction.LoaderFalse());
          console.warn('error', error);
          reject(false);
          Toast.show(ToastError(error.message));
        }
      });
    };
  }

  static GetTrailerSchedule({identifier, callback, token}) {
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        const bearerHeaders = ApiCaller.BearerHeaders(token);
        try {
          const response = await ApiCaller.Get(
            `${APIs.GetTrailersSchedules}Booking/getBookingSchedule?categoryId=0&Identifier=${identifier}`,
            bearerHeaders,
          );
          console.log('reesspiocs', response);
          if (response.data.statusCode === 200) {
            dispatch(LoaderAction.LoaderFalse());
            resolve(response.data.data);
            callback(response.data.data);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(false);
            Toast.show(ToastError(response.data.message));
          }
        } catch (error) {
          dispatch(LoaderAction.LoaderFalse());
          console.warn('error', error);
          reject(false);
          Toast.show(ToastError(error.message));
        }
      });
    };
  }

  static UploadTrailerImage = ({imageObj}) => {
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.loaderTrue());

          const formData = new FormData();
          formData.append('file', imageObj);

          const response = await ApiCaller.Post(APIs.uploadImage, formData);
          if (response.data.statusCode === 200) {
            dispatch(LoaderAction.LoaderFalse());
            resolve(response.data.data);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(false);
            Toast.show(ToastError(response.data.message));
          }
          console.warn('response ==', response);
        } catch (error) {
          dispatch(LoaderAction.LoaderFalse());
          reject(false);
          Toast.show(ToastError(error.message));
        }
      });
    };
  };

  static GetMyChats = ({body, token}) => {
    // console.warn('body token', body, token);
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.loaderTrue());
          const bearerHeaders = ApiCaller.BearerHeaders(token);
          console.log('bearerHeaders', bearerHeaders);
          const response = await ApiCaller.Post(
            APIs.GetAllChats,
            body,
            bearerHeaders,
          );
          if (response.data.statusCode === 200) {
            dispatch(LoaderAction.LoaderFalse());
            resolve(response.data.data);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(false);
            Toast.show(ToastError(response.data.message));
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

  static RemoveTrailerImage({directory, trailerID, token}) {
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.loaderTrue());

          const bearerHeaders = ApiCaller.BearerHeaders(token);

          let body = {
            directory,
            trailerID,
          };

          const response = await ApiCaller.Post(
            APIs.removeImage,
            body,
            bearerHeaders,
          );

          if (response.data.statusCode === 200) {
            dispatch(LoaderAction.LoaderFalse());
            resolve(response.data.data);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(false);
            Toast.show(ToastError(response.data.message));
          }
        } catch (error) {
          dispatch(LoaderAction.LoaderFalse());
          reject(false);
          Toast.show(ToastError(error.message));
        }
      });
    };
  }

  static CreateTrailer({
    trailerIdentifier,
    token,
    ownerId,
    isCheched,
    dailyPrice,
    weeklyPrice,
    monthlyPrice,
    description,
    lightPlug,
    trailerDimension,
    weightCapacity,
    refundableDeposit,
    tags,
    deliveryCharges,
    radius,
    year,
    make,
    model,
    vin,
    city,
    state,
    addOneArray,
    lat,
    lng,
    categoryId,
    hitchTypeId,
    ballSizeId,
    location,
    imageIdentifier,
    trailerTitle,
  }) {
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.loaderTrue());

          const bearerHeaders = await ApiCaller.BearerHeaders(token);

          const formData = {
            identifier: trailerIdentifier,
            ownerId,
            title: trailerTitle,
            dailyPrice,
            weeklyPrice,
            monthlyPrice,
            description,
            categoryId,
            hitchTypeId,
            ballSizeId,
            tags,
            city,
            state,
            year,
            make,
            model,
            vin,
            location,
            imageIdentifier,
            locLat: lat,
            longLat: lng,
            addOns: addOneArray,
            deliveryRadius: radius,
            perMileCharges: deliveryCharges,
            weightCapicity: weightCapacity,
            lightPlugConfiguration: lightPlug,
            trialerDimension: trailerDimension,
            refundableCashDeposit: refundableDeposit,
            isDeliveryAvailable: isCheched == 'yes' ? true : false,
          };

          console.log('formData', formData);

          const response = await ApiCaller.Post(
            APIs.CreateTrailer,
            formData,
            bearerHeaders,
          );

          console.log('ress ===', response.data);

          if (response.data.statusCode === 200) {
            dispatch(LoaderAction.LoaderFalse());
            resolve(response.data.data);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(false);
            Toast.show(ToastError(response.data.message));
          }
        } catch (error) {
          dispatch(LoaderAction.LoaderFalse());
          reject(false);
          Toast.show(ToastError(error.message));
        }
      });
    };
  }

  static GetTrailersList({
    token,
    userID,
    pageNumber,
    pageSize,
    recordCount,
    searchText,
    userTypeID,
  }) {
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.loaderTrue());

          const bearerHeaders = ApiCaller.BearerHeaders(token);

          const formData = {
            pageNumber,
            pageSize,
            recordCount,
            searchTerm: searchText,
            userTypeID,
            startDate: '',
            endDate: '',
            categoryID: 0,
            userID,
          };

          const response = await ApiCaller.Post(
            APIs.GetTrailers,
            formData,
            bearerHeaders,
          );

          if (response.data.statusCode === 200) {
            dispatch(LoaderAction.LoaderFalse());
            resolve(response.data.data);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(false);
            Toast.show(ToastError(response.data.message));
          }
        } catch (error) {
          dispatch(LoaderAction.LoaderFalse());
          reject(false);
          Toast.show(ToastError(error.message));
        }
      });
    };
  }

  static getTrailerDetail({token, trailerIdentifier}) {
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.loaderTrue());

          const bearerHeaders = ApiCaller.BearerHeaders(token);

          const response = await ApiCaller.Get(
            APIs.GetTrailerDetail(trailerIdentifier),
            bearerHeaders,
          );

          if (response.data.statusCode === 200) {
            dispatch(LoaderAction.LoaderFalse());
            resolve(response.data.data);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(false);
            Toast.show(ToastError(response.data.message));
          }
        } catch (error) {
          dispatch(LoaderAction.LoaderFalse());
          reject(false);
          Toast.show(ToastError(error.message));
        }
      });
    };
  }

  static GetTrailerReview(token, trailerIdentifier) {
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          const bearerHeaders = ApiCaller.BearerHeaders(token);

          const formData = {
            trailerIdentifier,
          };

          const response = await ApiCaller.Post(
            APIs.GetTrailerReview,
            formData,
            bearerHeaders,
          );

          // console.warn('ress ===', response.data);
          if (response.data.statusCode === 200) {
            this.GetTrailerReview(token, trailerIdentifier);
            resolve(response.data.data);
          } else {
            reject(false);
            Toast.show(ToastError(response.data.message));
          }
        } catch (error) {
          reject(false);
          Toast.show(ToastError(error.message));
        }
      });
    };
  }

  static UpdateTrailerRate({
    token,
    identifier,
    dailyPrice,
    weeklyPrice,
    monthlyPrice,
  }) {
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.loaderTrue());

          const bearerHeaders = ApiCaller.BearerHeaders(token);

          const formData = {
            identifier,
            daily: dailyPrice,
            weekly: weeklyPrice,
            monthly: monthlyPrice,
          };

          const response = await ApiCaller.Post(
            APIs.UpdateTrailerRate,
            formData,
            bearerHeaders,
          );

          if (response.data.statusCode === 200) {
            dispatch(LoaderAction.LoaderFalse());
            resolve(response.data.data);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(false);
            Toast.show(ToastError(response.data.message));
          }
        } catch (error) {
          dispatch(LoaderAction.LoaderFalse());
          reject(false);
          Toast.show(ToastError(error.message));
        }
      });
    };
  }

  static GetTrailerForUpdate({token, trailerIdentifier}) {
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.loaderTrue());

          const bearerHeaders = ApiCaller.BearerHeaders(token);

          const response = await ApiCaller.Get(
            APIs.GetCreatedTrailer(trailerIdentifier),
            bearerHeaders,
          );

          if (response.data.statusCode === 200) {
            dispatch(LoaderAction.LoaderFalse());
            resolve(response.data.data);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(false);
            Toast.show(ToastError(response.data.message));
          }
        } catch (error) {
          dispatch(LoaderAction.LoaderFalse());
          reject(false);
          Toast.show(ToastError(error.message));
        }
      });
    };
  }

  static UpdateTrailerStatus({token, trailerID, status}) {
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.loaderTrue());

          const bearerHeaders = ApiCaller.BearerHeaders(token);

          const formData = {
            trailerID,
            status,
          };

          // console.warn('formDataa ==', formData);
          const response = await ApiCaller.Post(
            APIs.UpdateTrailerStatus,
            formData,
            bearerHeaders,
          );

          if (response.data.statusCode === 200) {
            dispatch(LoaderAction.LoaderFalse());
            resolve(response.data.data);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(false);
            Toast.show(ToastError(response.data.message));
          }
        } catch (error) {
          dispatch(LoaderAction.LoaderFalse());
          reject(false);
          Toast.show(ToastError(error.message));
        }
      });
    };
  }

  static GetTrailerBlockDates({token, identifier}) {
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.loaderTrue());

          const bearerHeaders = ApiCaller.BearerHeaders(token);

          const response = await ApiCaller.Get(
            APIs.getTrailerBlockDates(identifier),
            bearerHeaders,
          );

          if (response.data.statusCode === 200) {
            dispatch(LoaderAction.LoaderFalse());
            resolve(response.data.data);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(false);
            Toast.show(ToastError(response.data.message));
          }
        } catch (error) {
          dispatch(LoaderAction.LoaderFalse());
          reject(false);
          Toast.show(ToastError(error.message));
        }
      });
    };
  }

  static AddBlockDates({token, identifier, blockedDate}) {
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.loaderTrue());

          const bearerHeaders = ApiCaller.BearerHeaders(token);

          const formData = {
            identifier,
            BlockedDates: blockedDate,
          };

          const response = await ApiCaller.Post(
            APIs.AddBlockDates,
            formData,
            bearerHeaders,
          );

          if (response.data.statusCode === 200) {
            dispatch(LoaderAction.LoaderFalse());
            resolve(response.data.data);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(false);
            Toast.show(ToastError(response.data.message));
          }
        } catch (error) {
          dispatch(LoaderAction.LoaderFalse());
          reject(false);
          Toast.show(ToastError(error.message));
        }
      });
    };
  }

  static UpdateBlockDates({token, identifier, blockedDate}) {
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.loaderTrue());

          const bearerHeaders = ApiCaller.BearerHeaders(token);

          const formData = {
            identifier,
            BlockedDates: blockedDate,
          };

          const response = await ApiCaller.Post(
            APIs.UpdateBlockDates,
            formData,
            bearerHeaders,
          );

          if (response.data.statusCode === 200) {
            dispatch(LoaderAction.LoaderFalse());
            resolve(response.data.data);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(false);
            Toast.show(ToastError(response.data.message));
          }
        } catch (error) {
          dispatch(LoaderAction.LoaderFalse());
          reject(false);
          Toast.show(ToastError(error.message));
        }
      });
    };
  }

  static GetBookings({
    token,
    search,
    categoryId,
    filterType,
    pageNumer,
    pageSize,
    from,
    to,
    trailerIdentifier,
    bookingID,
  }) {
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.loaderTrue());

          const bearerHeaders = ApiCaller.BearerHeaders(token);

          const response = await ApiCaller.Get(
            APIs.getBookings(
              filterType,
              categoryId,
              from,
              to,
              search,
              trailerIdentifier,
              pageNumer,
              pageSize,
              bookingID,
            ),
            bearerHeaders,
          );

          if (response.data.statusCode === 200) {
            dispatch(LoaderAction.LoaderFalse());
            resolve(response.data.data?.list);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(false);
            Toast.show(ToastError(response.data.message));
          }
        } catch (error) {
          dispatch(LoaderAction.LoaderFalse());
          reject(false);
          Toast.show(ToastError(error.message));
        }
      });
    };
  }

  static getAllTrailers({token}) {
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          const bearerHeaders = ApiCaller.BearerHeaders(token);

          const response = await ApiCaller.Get(
            APIs.getAllTrailers,
            bearerHeaders,
          );
          if (response.data.statusCode === 200) {
            dispatch(LoaderAction.LoaderFalse());
            resolve(response.data.data);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(false);
            Toast.show(ToastError(response.data.message));
          }
        } catch (error) {
          dispatch(LoaderAction.LoaderFalse());
          reject(false);
          Toast.show(ToastError(error.message));
        }
      });
    };
  }

  static GetBookingDetail({token, identifier}) {
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          const bearerHeaders = ApiCaller.BearerHeaders(token);

          const response = await ApiCaller.Get(
            APIs.getBookingDetail(identifier),
            bearerHeaders,
          );

          if (response.data.statusCode === 200) {
            dispatch(LoaderAction.LoaderFalse());
            resolve(response.data.data);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(false);
            Toast.show(ToastError(response.data.message));
          }
        } catch (error) {
          dispatch(LoaderAction.LoaderFalse());
          reject(false);
          Toast.show(ToastError(error.message));
        }
      });
    };
  }

  static GetClaimReasons({}) {
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.loaderTrue());

          const response = await ApiCaller.Get(APIs.getClaimReasons, {});

          if (response.data.statusCode === 200) {
            dispatch(LoaderAction.LoaderFalse());
            resolve(response.data.data);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(false);
            Toast.show(ToastError(response.data.message));
          }
        } catch (error) {
          dispatch(LoaderAction.LoaderFalse());
          reject(false);
          Toast.show(ToastError(error.message));
        }
      });
    };
  }

  static UploadReceiveMedia({token, side, imageObj}) {
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.loaderTrue());

          const bearerHeaders = ApiCaller.BearerHeaders(token);

          const formData = new FormData();
          formData.append('file', imageObj);

          const response = await ApiCaller.Post(
            APIs.uploadReceiveMedia(side),
            formData,
            bearerHeaders,
          );

          // console.warn('response', response);
          if (response.data.statusCode === 200) {
            dispatch(LoaderAction.LoaderFalse());
            resolve(response.data.data);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(false);
            Toast.show(ToastError(response.data.message));
          }
        } catch (error) {
          dispatch(LoaderAction.LoaderFalse());
          reject(false);
          Toast.show(ToastError(error.message));
        }
      });
    };
  }

  static UploadSendOutMedia({token, side, imageObj}) {
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.loaderTrue());

          const bearerHeaders = ApiCaller.BearerHeaders(token);

          const formData = new FormData();
          formData.append('file', imageObj);

          const response = await ApiCaller.Post(
            APIs.uploadSendOutMedia(side),
            formData,
            bearerHeaders,
          );

          // console.warn('response', response);
          if (response.data.statusCode === 200) {
            dispatch(LoaderAction.LoaderFalse());
            resolve(response.data.data);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(false);
            Toast.show(ToastError(response.data.message));
          }
        } catch (error) {
          dispatch(LoaderAction.LoaderFalse());
          reject(false);
          Toast.show(ToastError(error.message));
        }
      });
    };
  }

  static GetExtensionRequest({
    token,
    UserID,
    pageNumber,
    pageSize,
    userTypeID,
    SearchTerm,
  }) {
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.loaderTrue());

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

          const response = await ApiCaller.Post(
            APIs.getExtenstionRequest,
            formData,
            bearerHeaders,
          );

          if (response.data.statusCode === 200) {
            dispatch(LoaderAction.LoaderFalse());
            resolve(response.data.data.list);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(false);
            Toast.show(ToastError(response.data.message));
          }
        } catch (error) {
          dispatch(LoaderAction.LoaderFalse());
          reject(false);
          Toast.show(ToastError(error.message));
        }
      });
    };
  }

  static InformRenter({token, identifier, statusId, remarks}) {
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.loaderTrue());

          const bearerHeaders = ApiCaller.BearerHeaders(token);

          const formData = {
            identifier,
            statusId,
            remarks,
          };

          const response = await ApiCaller.Post(
            APIs.informRenter,
            formData,
            bearerHeaders,
          );

          console.log('responsee', response);
          if (response.data.statusCode === 200) {
            dispatch(LoaderAction.LoaderFalse());
            resolve(response.data.data);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(false);
            Toast.show(ToastError(response.data.message));
          }
        } catch (error) {
          dispatch(LoaderAction.LoaderFalse());
          reject(false);
          Toast.show(ToastError(error.message));
        }
      });
    };
  }

  static SaveReceiveTrailer({
    token,
    bookingIdentifier,
    remarks,
    damageDetail,
    approximateDamageAmount,
    isReportDamage,
    receiveTrailerDateTime,
    claimReasonID,
    frontImage,
    backImage,
    rightImage,
    leftImage,
    otherImages,
  }) {
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.loaderTrue());

          const bearerHeaders = ApiCaller.BearerHeaders(token);

          const formData = {
            bookingIdentifier,
            remarks,
            damageDetail,
            approximateDamageAmount,
            isReportDamage,
            receiveTrailerDateTime,
            claimReasonID,
            frontImage,
            backImage,
            rightImage,
            leftImage,
            otherImages,
          };

          const response = await ApiCaller.Post(
            APIs.saveReceiveTrailer,
            formData,
            bearerHeaders,
          );

          if (response.data.statusCode === 200) {
            dispatch(LoaderAction.LoaderFalse());
            resolve(response.data.data);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(false);
            Toast.show(ToastError(response.data.message));
          }
        } catch (error) {
          dispatch(LoaderAction.LoaderFalse());
          reject(false);
          Toast.show(ToastError(error.message));
        }
      });
    };
  }

  static SaveSendOutTrailer({
    token,
    bookingIdentifier,
    remarks,
    sendTrailerDateTime,
    frontImage,
    backImage,
    rightImage,
    leftImage,
    otherImages,
  }) {
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.loaderTrue());

          const bearerHeaders = ApiCaller.BearerHeaders(token);

          const formData = {
            bookingIdentifier,
            remarks,
            sendTrailerDateTime,
            frontImage,
            backImage,
            rightImage,
            leftImage,
            otherImages,
          };

          const response = await ApiCaller.Post(
            APIs.saveSendOutTrailer,
            formData,
            bearerHeaders,
          );

          if (response.data.statusCode === 200) {
            dispatch(LoaderAction.LoaderFalse());
            resolve(response.data.data);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(false);
            Toast.show(ToastError(response.data.message));
          }
        } catch (error) {
          dispatch(LoaderAction.LoaderFalse());
          reject(false);
          Toast.show(ToastError(error.message));
        }
      });
    };
  }

  static AddReview({
    token,
    userTypeId,
    userId,
    bookingId,
    rating1,
    rating2,
    rating3,
    remarks,
  }) {
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.loaderTrue());

          const bearerHeaders = ApiCaller.BearerHeaders(token);
          const formData = {
            userTypeId,
            userId,
            bookingId,
            rating1,
            rating2,
            rating3,
            remarks,
          };

          const response = await ApiCaller.Post(
            APIs.AddReview,
            formData,
            bearerHeaders,
          );
          if (response.data.statusCode === 200) {
            dispatch(LoaderAction.LoaderFalse());
            resolve(response.data.data);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(false);
            Toast.show(ToastError(response.data.message));
          }
        } catch (error) {
          dispatch(LoaderAction.LoaderFalse());
          reject(false);
          Toast.show(ToastError(error.message));
        }
      });
    };
  }

  static GetSendOutDetails({token, identifier}) {
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.loaderTrue());

          const bearerHeaders = ApiCaller.BearerHeaders(token);

          const response = await ApiCaller.Get(
            APIs.getSendOutDetai(identifier),
            bearerHeaders,
          );

          console.log('ress ==', response);
        } catch (error) {}
      });
    };
  }

  static GetReceiveOutDetails({token, identifier}) {
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
        } catch (error) {}
      });
    };
  }

  // static SignIn({email, password}){
  //     return dispatch => {
  //         return new Promise(async (resolve, reject) => {
  //             try {

  //             } catch (error) {

  //             }
  //         })
  //     }
  // }
}
