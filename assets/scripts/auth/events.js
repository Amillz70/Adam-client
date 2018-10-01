'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
// const gameLogic = require('../game/gameLogic.js')

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
  event.preventDefault()
  // const value = $(event.target).text(gameLogic.___(index)).text()
  // console.log('skjfh;aejhf')
  api.onClickBoxZero()
    .then(ui.clickBoxZero)
    // .catch(ui.failClickZero)
}

const onClickBoxOne = function () {
  event.preventDefault()
  api.onClickBoxOne()
    .then(ui.clickBoxOne)
}

const onClickBoxTwo = function () {
  event.preventDefault()
  api.onClickBoxTwo()
    .then(ui.signOutTwo)
}

const onClickBoxThree = function () {
  event.preventDefault()
  api.onClickBoxThree()
    .then(ui.signOutThree)
}

const onClickBoxFour = function () {
  event.preventDefault()
  api.onClickBoxFour()
    .then(ui.clickBoxFour)
}

const onClickBoxFive = function () {
  event.preventDefault()
  api.onClickBoxFive()
    .then(ui.clickBoxFive)
}

const onClickBoxSix = function () {
  event.preventDefault()
  api.onClickBoxSix()
    .then(ui.clickBoxSix)
}

const onClickBoxSeven = function () {
  event.preventDefault()
  api.onClickBoxSeven()
    .then(ui.clickBoxSeven)
}

const onClickBoxEight = function () {
  event.preventDefault()
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
