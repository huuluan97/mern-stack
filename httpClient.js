
import fetch from 'cross-fetch';
import queryString from 'query-string';

export default class HttpClient {
  constructor({
    baseURL,
    token
  }) {
    this.baseURL = baseURL;
    this.token = token;
  }

  getConfig = (method, data) => {
    const config = {
      method,
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${this.token}`
      }
    }

    if (data) {
      config.body = JSON.stringify(data);
    }

    return config;

  }

  postFormDataConfig = formData => ({
    method: 'post',
    body: formData,
    headers: {
      Authorization: `Bearer ${this.token}`
    }
  });

  returnStatusAndJson = response => {
    response.json().then((json) => ({
      status: response.status,
      json
    })).catch((err) => ({
      status: response.status,
      json: null
    }));
  }
    
  static returnStatusAndJsonStatic = response => {
    response.json().then((json) => ({
      status: response.status,
      json
    })).catch((err) => ({
      status: response.status,
      json: null
    }));
  }

  get = (endpoint, filter, cookie) => {
    return fetch(
      `${this.baseURL}${endpoint}?${queryString.stringify(filter)}`,
      this.getConfig('get', null, cookie)
    ).then(this.returnStatusAndJson)
  }

  post = (endpoint, data) => {
    return fetch(
      this.baseURL + endpoint,
      this.getConfig('post', data)
    ).then(this.returnStatusAndJson)
  }

  postFormData = (endpoint, formData) => {
    return fetch(
      this.baseURL + endpoint,
      this.postFormDataConfig(formData)
    ).then(this.returnStatusAndJson)
  }

  put = (endpoint, data) => {
    return fetch(
      this.baseURL + endpoint,
      this.getConfig('put', data)
    ).then(this.returnStatusAndJson)
  }

  delete = (endpoint, data) => {
    return fetch(
      this.baseURL + endpoint,
      this.getConfig('delete', data)
    ).then(this.returnStatusAndJson)
  }
  
}