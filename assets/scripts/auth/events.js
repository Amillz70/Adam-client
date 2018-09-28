'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

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
const onClickBoxZero = function (b0) {
  event.preventDefault()
  // console.log('skjfh;aejhf')
  api.onClickBoxZero(b0)
    .then(ui.clickBoxZero)
}

const onClickBoxOne = function (b1) {
  event.preventDefault()
  api.onClickBoxOne(b1)
    .then(ui.clickBoxOne)
}

const onClickBoxTwo = function (b2) {
  event.preventDefault()
  api.onClickBoxTwo(b2)
    .then(ui.signOutTwo)
}

const onClickBoxThree = function (b3) {
  event.preventDefault()
  api.onClickBoxThree(b3)
    .then(ui.signOutThree)
}

const onClickBoxFour = function (b4) {
  event.preventDefault()
  api.onClickBoxFour(b4)
    .then(ui.clickBoxFour)
}

const onClickBoxFive = function (b5) {
  event.preventDefault()
  api.onClickBoxFive(b5)
    .then(ui.clickBoxFive)
}

const onClickBoxSix = function (b6) {
  event.preventDefault()
  api.onClickBoxSix(b6)
    .then(ui.clickBoxSix)
}

const onClickBoxSeven = function (b7) {
  event.preventDefault()
  api.onClickBoxSeven(b7)
    .then(ui.clickBoxSeven)
}

const onClickBoxEight = function (b8) {
  event.preventDefault()
  api.onClickBoxEight(b8)
    .then(ui.clickBoxEight)
}

const newGameButton = function () {
  event.preventDefault()
    .then(ui.startNewGameSuccess)
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
  newGameButton
}
