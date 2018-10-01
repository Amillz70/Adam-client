'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
const gameLogic = require('./game/gameLogic.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp) // .hide()
  $('#sign-in-form').on('submit', authEvents.onSignIn) // .hide()
  $('#change-password-form').on('submit', authEvents.onChangePassword) // .hide()
  $('#sign-out-button').on('click', authEvents.onSignOut) // .hide()

  $('#squareZero').on('click', (authEvents.onClickBoxZero))
  $('#squareOne').on('click', (authEvents.onClickBoxOne))
  $('#squareTwo').on('click', (authEvents.onClickBoxTwo))
  $('#squareThree').on('click', (authEvents.onClickBoxThree))
  $('#squareFour').on('click', (authEvents.onClickBoxFour))
  $('#squareFive').on('click', (authEvents.onClickBoxFive))
  $('#squareSix').on('click', (authEvents.onClickBoxSix))
  $('#squareSeven').on('click', (authEvents.onClickBoxSeven))
  $('#squareEight').on('click', (authEvents.onClickBoxEight))

  // $('#index').on('click', authEvents.onSignIn)
  // $('#create').on('click', authEvents.onSignIn)
  // $('#show').on('click', authEvents.onSignIn)
  // $('#update').on('click', authEvents.onSignIn)

  $('#new-game').on('click', (authEvents.newGameButton))
  $('#boxZero').on('click', () => { authEvents.onClickBox(0) })
  $('#boxOne').on('click', () => { authEvents.onClickBox(1) })
  $('#boxTwo').on('click', () => { authEvents.onClickBox(2) })
  $('#boxThree').on('click', () => { authEvents.onClickBox(3) })
  $('#boxFour').on('click', () => { authEvents.onClickBox(4) })
  $('#boxFive').on('click', () => { authEvents.onClickBox(5) })
  $('#boxSix').on('click', () => { authEvents.onClickBox(6) })
  $('#boxSeven').on('click', () => { authEvents.onClickBox(7) })
  $('#boxEight').on('click', () => { authEvents.onClickBox(8) })

  // How to link game logic with html page
  $('#boxZero').on('click', () => { gameLogic.clickBox(0) })
})
