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
  $('#reset').show()
  $('#count-games-button').show()
  $('#count-game-display').show()
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
  $('#reset').hide()
  $('#count-games-button').hide()
  $('#count-game-display').hide()
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

const newGameStart = function (response) {
   $('#display-message').html('New Game!')
  $('#squareZero').html('')
  $('#squareOne').html('')
  $('#squareTwo').html('')
  $('#squareThree').html('')
  $('#squareFour').html('')
  $('#squareFive').html('')
  $('#squareSix').html('')
  $('#squareSeven').html('')
  $('#squareEight').html('')
  store.game = response.game
}

const gameOver = function () {
  $('#game').addClass('unclickable')
}

const gameWin = function () {
  $('#display-message').html('You win, game over')
}

const gamesPlayedSuccess = function () {
  $('#count-game-display').html(`Games Played ${store.game.id}`)
  $('#count-games-button').html(`Games Played ${store.game.id}`)

  $('#count-game-display').css('color','black')
  $('#count-games-button').css('color','black')

  $('#display-message').html(`Games Played ${store.game.id}`)
  $('#display-message').css('color','black')
}

const gamesPlayedFailed = function () {
  $('#count-game-display').text('Failure')
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
  gameWin,
  // oddMove,
  // evenMove,
  clickBox,
  failClick,
  gameOver
  // startNewGameSuccess,
  // startNewGameFailure
}
