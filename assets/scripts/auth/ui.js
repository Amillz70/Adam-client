'use strict'
// const store = require('../store.js')

const store = require('../store.js')

const signUpSuccess = function () {
  $('#display-message').html('Sign up successful')
  $('#display-message').css('color', 'green')
  $('#sign-up-form').trigger('reset')
}

const signUpFailure = function () {
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('color', 'red')
  $('#sign-up-form').trigger('reset')
}

const signInSuccess = function (response) {
  console.log('ui test')
//  $('#squareZero').html('Sign in successful, Game start')
  $('#display-message').html('Sign in successful')
  $('#display-message').css('color', 'green')
  $('#sign-in-form').trigger('reset')
  store.user = response.user
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
  $('#change-password-form').show()
  $('#tic').show()
  $('#sign-out-button').show()
}

const signInFailure = function () {
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('color', 'red')
  $('#sign-in-form').trigger('reset')
}

const changePasswordSuccess = function () {
  $('#display-message').html('Change Password successful')
  $('#display-message').css('color', 'green')
  $('#change-password-form').trigger('reset')
}

const changePasswordFailure = function () {
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('color', 'red')
  $('#change-password-form').trigger('reset')
}

const signOutSuccess = function () {
  $('#display-message').html('Sign Out successful')
  $('#display-message').css('color', 'green')
  $('#sign-up-form').removeClass('hidden')
  $('#sign-in-form').removeClass('hidden')
  $('#change-password-form').addClass('hidden')
  $('#sign-out-button').addClass('hidden')
  $('#sign-up-form').show()
  $('#sign-in-form').show()
  $('#change-password-form').hide()
  $('#tic').hide()
  $('#sign-out-button').hide()
}

const signOutFailure = function () {
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('color', 'red')
}

const clickBox = function () {
  $('#display-message').html('Next Turn')
}

const failClick = function () {
  $('#display-message').html('Turn Fail')
}

const newGameStart = function () {
  $('#display-message').html('New Game!')
}

const gameOver = function () {
  $('#game').addClass('unclickable')
}

const gameWinsTotal = function () {
  $('#display-message').html('')
}



// const startNewGameSuccess = function() {
//
// }
//
// const startNewGameFailure = function() {
//
// }
// const oddMove = function () {
//   $('display-message').html('Xs move')
// }
//
// const evenMove = function () {
//   $('display-message').html('Os move')
// }

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  newGameStart,
  gameWinsTotal,
  // oddMove,
  // evenMove,
  clickBox,
  failClick,
  gameOver
  // startNewGameSuccess,
  // startNewGameFailure
}
