'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
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
})
