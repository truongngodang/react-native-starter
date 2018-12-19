import Config from 'react-native-config'

export default {
  axios: {
    baseURL: Config.API_URL, // dev Mr.Vuong
    responseType: 'json',
    timeout: 10000
  }
}
