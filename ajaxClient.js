import HttpClient from './httpClient';

export default class AjaxClient extends HttpClient {
  
  getCredentialsConfig = (baseURL) => {
    const includePrefix = baseURL.includes('http://') || baseURL.includes('https://')
    return includePrefix ? 'include' : 'same-origin'
  }
  
  getConfig = (method, data, cookie) => {
    const config = {
      credentials: this.getCredentialsConfig(this.baseURL),
      method,
      headers: {
        'Content-type': 'application/json'
      }
    }

    if (cookie) {
      config.headers.Cookie = cookie
    }

    if (data) {
      config.body = JSON.stringify(data)
    }

    return config

  }
}