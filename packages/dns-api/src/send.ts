// import 'whatwg-fetch';
import axios, { AxiosResponse } from 'axios';
import { addNotification } from '@dns/contextual-modules';
import { history } from '@dns/store-configuration';

import { Call } from './definitions';

const errorInterceptor = error => {
  const status = error && error.status ? error.status : -1;
  const responseURL = error && error.request && error.request.responseURL ? error.request.responseURL : '';
  let label = '';
  if (responseURL.indexOf('canPerform') > -1) {
    return;
  }

  if (!error) {
    label = 'Service appears to be unavailable';
    addNotification({ message: label, type: 'error' });
    return;
  }

  if (error.data && error.data.message && error.data.message === 'locked') {
    history.push('/locked');
    return;
  }

  if (
    (window.location.pathname === '/login' || window.location.pathname === '') &&
    error.status === 403
  ) {
    return;
  }

  switch (status) {
    case 400:
      label = 'Bad request';
      break;
    case 401:
      label = responseURL.indexOf('login') > -1 ? '' : 'Unauthorized';
      break;
    case 403:
      if (error.data.message === 'locked') {
        history.push('/locked');
      } else {
        label = 'Forbidden';
      }
      break;
    case 404:
      label = responseURL.indexOf('login') > -1 ? '' : 'Not found';
      break;
    case 409:
      label = 'Conflict';
      break;
    default:
      label = 'An error occurred';
  }

  if (label && label.length) {
    addNotification({ message: label, type: 'error' });
  }
};

const send = (call: Call) => {
  if (!navigator.onLine) {
    const notification = {
      message: 'You seem to be offline. Please re-connect to continue!',
      type: 'error'
    };
    addNotification(notification);
    // return;
  }

  let url = call.url;

  if (call.params) {
    const { params } = call;
    let i = 0;

    url = `${url}?`;
    for (let key in params) {
      if (params.hasOwnProperty(key)) {
        if (i > 0) {
          url = `${url}&`;
        }
        url = `${url}${key}=${params[key]}`;
        i++;
      }
    }
  }

  let options = {
    url,
    method: call.httpMethod || 'post',
    // timeout: 1000,
    headers: {
      ...call.headers,
      'Pragma': 'no-cache'
    },
  };

  if (call.data) {
    options = {
      ...options,
      data: call.data,
    } as any;
  }

  axios(options)
    .then((response: AxiosResponse) => {
      if (response.status === 200 && call.successCallback) {
        call.successCallback(response.data);
      } else if (response.status >= 400 && response.status < 600) {
        if (call.errorCallback) {
          call.errorCallback(response);
        }
      }
    })
    .catch((exception: any) => {
      if (call.errorCallback) {
        call.errorCallback(exception.response);
      }
      if (!call.silent) {
        errorInterceptor(exception.response);
      }
    });
};

export default send;
