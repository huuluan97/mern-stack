import fetch from 'cross-fetch';
import HttpClient from './httpClient';

export default class ApiClient extends HttpClient {
  static authorize = (baseURL, email) => {
    const config = {
      method: 'post',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ email })
    }

    return fetch(
      `${baseURL}/authorize`,
      config
    ).then(
      HttpClient.returnStatusAndJson
    )

  }
}