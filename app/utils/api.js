import _ from 'lodash';
import storage from './storage';
import axios from 'axios';
import querystring from 'querystring';
import apiConfig from '../config/api';

import pathToRegExp from 'path-to-regexp';
import { Platform } from 'react-native';

axios.interceptors.request.use((config) => {
  // console.log(`Request [${ config.method }] ${ config.url }`, config);
  return config;
});

const execute = async (path, method = 'GET', { params = {} , queries = {}, payloads = {}, headers = {} } = {}) => {
  const token = await storage.get('token');
  const compiler = pathToRegExp.compile(path);
  // SEND LOGIN TOKEN if LOGIN
  const notification_token = await storage.get('notification_token');

  const base = apiConfig.apiBaseUrl.replace(/~\/$/, '');
  const url = compiler(params || {});

  if (token) {
    headers['Authorization'] = `Bearer ${ token }`;
  }

  if (notification_token) {
    headers['NotificationToken'] = `${notification_token}`
    headers['Platform'] = `${Platform.OS}`
  }

  if ( ! headers['Content-Type']) {
    headers['Content-Type'] = 'application/x-www-form-urlencoded';
  }

  if ( ! headers['Accept']) {
    headers['Accept'] = 'application/json';
  }

  const options = { method, headers };

  if (method === 'POST' || method === 'PATCH') {
    options.data = querystring.stringify(payloads);
  }

  if (queries) {
    options.params = queries;
  }

  options.url = url;
  options.baseURL = base;
  console.log("Request",options)
  return await axios(options);
};


export default {
  get: (path, options) => execute(path, 'GET', options),
  post: (path, options) => execute(path, 'POST', options),
  patch: (path, options) => execute(path, 'PATCH', options),
  delete: (path, options) => execute(path, 'DELETE', options),
};