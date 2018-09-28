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

const onClickBoxZero = function (ID, INDEX, VALUE) {
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
      "over": false
    }
  }`
  })
}

const onClickBoxOne = function (ID, INDEX, VALUE) {
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
      "over": false
    }
  }`
  })
}

const onClickBoxTwo = function (ID, INDEX, VALUE) {
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
      "over": false
    }
  }`
  })
}

const onClickBoxThree = function (ID, INDEX, VALUE) {
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
      "over": false
    }
  }`
  })
}

const onClickBoxFour = function (ID, INDEX, VALUE) {
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
      "over": false
    }
  }`
  })
}

const onClickBoxFive = function (ID, INDEX, VALUE) {
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
      "over": false
    }
  }`
  })
}

const onClickBoxSix = function (ID, INDEX, VALUE) {
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
      "over": false
    }
  }`
  })
}

const onClickBoxSeven = function (ID, INDEX, VALUE) {
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
      "over": false
    }
  }`
  })
}

const onClickBoxEight = function (ID, INDEX, VALUE) {
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
      "over": false
    }
  }`
  })
}

const onClickBoxNine = function (ID, INDEX, VALUE) {
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
      "over": false
    }
  }`
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  onClickBoxZero,
  onClickBoxOne,
  onClickBoxTwo,
  onClickBoxThree,
  onClickBoxFour,
  onClickBoxFive,
  onClickBoxSix,
  onClickBoxSeven,
  onClickBoxEight,
  onClickBoxNine
}
