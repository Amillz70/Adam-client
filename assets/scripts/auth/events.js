'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')
const gameLogic = require('../game/gameLogic.js')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log(data)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  // console.log(store.user)
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function () {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

// Register click of individual boxes, not needed to be individual
const onClickBoxZero = function (event) {
  $('#squareZero').html(store.currentPlayer)
  gameLogic.playerSwitch()
  // console.log('Click 1 check' + event.target.id)
  const changeIn = event.target.id
  const gamePieces = store.currentPlayer
  const gameMove = {
    'game': {
      'cell': {
        'index': changeIn,
        'value': gamePieces
      },
      'over': false
    }
  }
  api.onClickBox(gameMove)
    .then(ui.clickBox)
    .catch(ui.failClick)
}

const onClickBoxOne = function () {
  $('#squareOne').html(store.currentPlayer)
  gameLogic.playerSwitch()
  api.onClickBox()
    .then(ui.clickBox)
    .catch(ui.failClick)
}

const onClickBoxTwo = function () {
  $('#squareTwo').html(store.currentPlayer)
  gameLogic.playerSwitch()
  api.onClickBox()
    .then(ui.signOut)
    .catch(ui.failClick)
}

const onClickBoxThree = function () {
  $('#squareThree').html(store.currentPlayer)
  gameLogic.playerSwitch()
  api.onClickBox()
    .then(ui.signOut)
    .catch(ui.failClick)
}

const onClickBoxFour = function () {
  $('#squareFour').html(store.currentPlayer)
  gameLogic.playerSwitch()
  api.onClickBox()
    .then(ui.clickBox)
    .catch(ui.failClick)
}

const onClickBoxFive = function () {
  $('#squareFive').html(store.currentPlayer)
  gameLogic.playerSwitch()
  api.onClickBox()
    .then(ui.clickBox)
    .catch(ui.failClick)
}

const onClickBoxSix = function () {
  $('#squareSix').html(store.currentPlayer)
  gameLogic.playerSwitch()
  api.onClickBox()
    .then(ui.clickBox)
    .catch(ui.failClick)
}

const onClickBoxSeven = function () {
  $('#squareSeven').html(store.currentPlayer)
  gameLogic.playerSwitch()
  api.onClickBox()
    .then(ui.clickBox)
    .catch(ui.failClick)
}

const onClickBoxEight = function () {
  $('#squareEight').html(store.currentPlayer)
  gameLogic.playerSwitch()
  api.onClickBox()
    .then(ui.clickBox)
    .catch(ui.failClick)
}

const currentGameData = function () {

}

// Need to figure out how to make this hear to start new game
const newGame = function (event) {
  event.preventDefault()
  api.startNewGameSuccess()
    .then(ui.newGameStart)
    .catch(ui.startNewGameFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onClickBoxZero,
  onClickBoxOne,
  onClickBoxTwo,
  onClickBoxThree,
  onClickBoxFour,
  onClickBoxFive,
  onClickBoxSix,
  onClickBoxSeven,
  onClickBoxEight,
  newGame
}
