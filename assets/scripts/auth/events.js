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

// Register click of individual boxes
const onClickBoxZero = function () {
  $('#squareZero').html(store.currentPlayer)
  gameLogic.playerSwitch()
  api.onClickBoxZero()
    .then(ui.clickBoxZero)
    .catch(ui.failClickZero)
}

const onClickBoxOne = function () {
  $('#squareOne').html(store.currentPlayer)
  gameLogic.playerSwitch()
  api.onClickBoxOne()
    .then(ui.clickBoxOne)
}

const onClickBoxTwo = function () {
  $('#squareTwo').html(store.currentPlayer)
  gameLogic.playerSwitch()
  api.onClickBoxTwo()
    .then(ui.signOutTwo)
}

const onClickBoxThree = function () {
  $('#squareThree').html(store.currentPlayer)
  gameLogic.playerSwitch()
  api.onClickBoxThree()
    .then(ui.signOutThree)
}

const onClickBoxFour = function () {
  $('#squareFour').html(store.currentPlayer)
  gameLogic.playerSwitch()
  api.onClickBoxFour()
    .then(ui.clickBoxFour)
}

const onClickBoxFive = function () {
  $('#squareFive').html(store.currentPlayer)
  gameLogic.playerSwitch()
  api.onClickBoxFive()
    .then(ui.clickBoxFive)
}

const onClickBoxSix = function () {
  $('#squareSix').html(store.currentPlayer)
  gameLogic.playerSwitch()
  api.onClickBoxSix()
    .then(ui.clickBoxSix)
}

const onClickBoxSeven = function () {
  $('#squareSeven').html(store.currentPlayer)
  gameLogic.playerSwitch()
  api.onClickBoxSeven()
    .then(ui.clickBoxSeven)
}

const onClickBoxEight = function () {
  $('#squareEight').html(store.currentPlayer)
  gameLogic.playerSwitch()
  api.onClickBoxEight()
    .then(ui.clickBoxEight)
}

// Need to figure out how to make this hear to start new game
const newGameButton = function () {
  event.preventDefault()
    .then(ui.newGameStart)
    // .catch(ui.startNewGameFailure)
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
  newGameButton
}
