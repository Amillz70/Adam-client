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

  $('#boxZero').on('click', () => { authEvents.onClickBox(0) })
  $('#boxOne').on('click', () => { authEvents.onClickBox(1) })
  $('#boxTwo').on('click', () => { authEvents.onClickBox(2) })
  $('#boxThree').on('click', () => { authEvents.onClickBox(3) })
  $('#boxFour').on('click', () => { authEvents.onClickBox(4) })
  $('#boxFive').on('click', () => { authEvents.onClickBox(5) })
  $('#boxSix').on('click', () => { authEvents.onClickBox(6) })
  $('#boxSeven').on('click', () => { authEvents.onClickBox(7) })
  $('#boxEight').on('click', () => { authEvents.onClickBox(8) })
})
