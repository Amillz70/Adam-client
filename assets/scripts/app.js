'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
// const gameLogic = require('./game/gameLogic.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp) // .hide()
  $('#sign-in-form').on('submit', authEvents.onSignIn) // .hide()
  $('#change-password-form').on('submit', authEvents.onChangePassword) // .hide()
  $('#sign-out-button').on('click', authEvents.onSignOut) // .hide()

  $('#reset').on('click', (authEvents.newGame))
  $('.tic-box').on('click', authEvents.onClickBox)
  $('#count-games-button').on('click', authEvents.gameCount)

  $('#squareZero').on('click', (authEvents.onClickBox))
  $('#squareOne').on('click', (authEvents.onClickBox))
  $('#squareTwo').on('click', (authEvents.onClickBox))
  $('#squareThree').on('click', (authEvents.onClickBox))
  $('#squareFour').on('click', (authEvents.onClickBox))
  $('#squareFive').on('click', (authEvents.onClickBox))
  $('#squareSix').on('click', (authEvents.onClickBox))
  $('#squareSeven').on('click', (authEvents.onClickBox))
  $('#squareEight').on('click', (authEvents.onClickBox))

  $('#squareZero').data('location', 0)
  $('#squareOne').data('location', 1)
  $('#squareTwo').data('location', 2)
  $('#squareThree').data('location', 3)
  $('#squareFour').data('location', 4)
  $('#squareFive').data('location', 5)
  $('#squareSix').data('location', 6)
  $('#squareSeven').data('location', 7)
  $('#squareEight').data('location', 8)


  $('#reset').hide()
  $('#tic').hide()
  $('#change-password-form').hide()
  $('#sign-out-button').hide()
  $('#count-games-button').hide()
  $('#count-game-display').hide()


  // $('#index').on('click', authEvents.onSignIn)
  // $('#create').on('click', authEvents.onSignIn)
  // $('#show').on('click', authEvents.onSignIn)
  // $('#update').on('click', authEvents.onSignIn)

  // How to link game logic with html page
  // $('#boxZero').on('click', () => { gameLogic.clickBox(0) })
})
