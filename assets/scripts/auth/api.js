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

const onClickBox = function (gameMove) {
  // console.log('In onClickGameAPI')
  console.log('api test', store.game)
  return $.ajax({
    url: config.apiUrl + `/games/${store.game.id}`,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'PATCH',
    data: gameMove
  })
}

const startNewGameSuccess = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    headers:
      {Authorization: `Token token=${store.user.token}`},
    method: 'POST'
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  onClickBox,
  startNewGameSuccess
}
