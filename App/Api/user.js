import client from './configAPI'

export default {

  getCurrentUser (token) {
    const url = `/me/`
    // noinspection JSAnnotator
    return client.get(url, {
      apiName: arguments.callee.name,
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).then(response => response)
  },

  updateUser (token, params) {
    const url = `/me/`
    // noinspection JSAnnotator
    return client.put(url, params, {
      apiName: arguments.callee.name,
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).then(response => response)
  },

  ratingApp (token, params) {
    const url = `/me/rating/`
    // noinspection JSAnnotator
    return client.put(url, params, {
      apiName: arguments.callee.name,
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).then(response => response)
  },

  updateSNSFaceBook (params, token) {
    const url = `/me/facebook/`
    // noinspection JSAnnotator
    return client.put(url, params, {
      apiName: arguments.callee.name,
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).then(response => response)
  },

  updateSNSLine (params, token) {
    const url = `/me/line/`
    // noinspection JSAnnotator
    return client.put(url, params, {
      apiName: arguments.callee.name,
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).then(response => response)
  },

  getNotifications (url, token) {
    // noinspection JSAnnotator
    return client.get(url, {
      apiName: arguments.callee.name,
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).then(response => response)
  },

  getTransferCode (token) {
    const url = `/transfer-code/`
    // noinspection JSAnnotator
    return client.get(url, {
      apiName: arguments.callee.name,
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).then(response => response)
  }
}
