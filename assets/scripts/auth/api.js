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
  console.log(passwordData)
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

const onClickBoxZero = function (b0) {
  return $.ajax ({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data:
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  onClickBoxZero
}
