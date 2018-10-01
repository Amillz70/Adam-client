'use strict'
const store = require('../store.js')
const config = require('../config.js')

const signUp = function (userData) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: userData
  })
}

const signIn = function (userData) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: userData
  })
}

const changePassword = function (passwordData) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'PATCH',
    data: passwordData
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'DELETE'
  })
}

const onClickBox = function (ID, INDEX, VALUE, OVER) {
  return $.ajax({
    url: config.apiUrl + `/games/${ID}`,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'PATCH',
    data: `{
    "game": {
          "id" : ${ID},
      "cell": {
        "index": ${INDEX},
        "value": ${VALUE}
      },
      "over": ${OVER}
    }
  }`
  })
}

const startNewGameSuccess = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    header:
    {Authorization: `Token token=${store.user.token}`}
  })
}

const startNewGameFailure = function () {

}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  onClickBox,
  startNewGameSuccess,
  startNewGameFailure
}
