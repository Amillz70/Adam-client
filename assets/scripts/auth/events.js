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
const onClickBox = function (event) {
  const currentBox = event.target
  // !== true seems to be the issue
  if (store.game !== null && store.game !== undefined && store.game.over !== true) {
    $(currentBox).html(store.currentPlayer)
    store.game.cells[''] = store.currentPlayer
    gameLogic.playerSwitch()
      $(currentBox).off()
      const gameOver = gameLogic.gameWin()
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
}

// const onClickBoxZero = function (event) {
//   // !== true seems to be the issue
//   if (store.game !== null && store.game !== undefined && store.game.over !== true) {
//     $('#squareZero').html(store.currentPlayer)
//     store.game.cells[0] = store.currentPlayer
//     gameLogic.playerSwitch()
//       $('#squareZero').off()
//       const gameOver = gameLogic.gameWin()
//     // console.log('Click 1 check' + event.target.id)
//     const changeIn = event.target.id
//     const gamePieces = store.currentPlayer
//     const gameMove = {
//       'game': {
//         'cell': {
//           'index': changeIn,
//           'value': gamePieces
//         },
//         'over': false
//       }
//     }
//     api.onClickBox(gameMove)
//       .then(ui.clickBox)
//       .catch(ui.failClick)
//   }
// }
//
// const onClickBoxOne = function (event) {
//   if (store.game !== null && store.game !== undefined && store.game.over !== true) {
//     $('#squareOne').html(store.currentPlayer)
//     store.game.cells[1] = store.currentPlayer
//     gameLogic.playerSwitch()
//       $('#squareOne').off()
//       const gameOver = gameLogic.gameWin()
//     // console.log('Click 1 check' + event.target.id)
//     const changeIn = event.target.id
//     const gamePieces = store.currentPlayer
//     const gameMove = {
//       'game': {
//         'cell': {
//           'index': changeIn,
//           'value': gamePieces
//         },
//         'over': false
//       }
//     }
//     api.onClickBox(gameMove)
//       .then(ui.clickBox)
//       .catch(ui.failClick)
//   }
// }
//
// const onClickBoxTwo = function (event) {
//   if (store.game !== null && store.game !== undefined && store.game.over !== true) {
//     $('#squareTwo').html(store.currentPlayer)
//     store.game.cells[2] = store.currentPlayer
//     gameLogic.playerSwitch()
//       $('#squareTwo').off()
//       const gameOver = gameLogic.gameWin()
//     // console.log('Click 1 check' + event.target.id)
//     const changeIn = event.target.id
//     const gamePieces = store.currentPlayer
//     const gameMove = {
//       'game': {
//         'cell': {
//           'index': changeIn,
//           'value': gamePieces
//         },
//         'over': false
//       }
//     }
//     api.onClickBox(gameMove)
//       .then(ui.clickBox)
//       .catch(ui.failClick)
//   }
// }
//
// const onClickBoxThree = function (event) {
//   if (store.game !== null && store.game !== undefined && store.game.over !== true) {
//     $('#squareThree').html(store.currentPlayer)
//     store.game.cells[3] = store.currentPlayer
//     gameLogic.playerSwitch()
//       $('#squareThree').off()
//       const gameOver = gameLogic.gameWin()
//     // console.log('Click 1 check' + event.target.id)
//     const changeIn = event.target.id
//     const gamePieces = store.currentPlayer
//     const gameMove = {
//       'game': {
//         'cell': {
//           'index': changeIn,
//           'value': gamePieces
//         },
//         'over': false
//       }
//     }
//     api.onClickBox(gameMove)
//       .then(ui.clickBox)
//       .catch(ui.failClick)
//   }
// }
//
// const onClickBoxFour = function (event) {
//   if (store.game !== null && store.game !== undefined && store.game.over !== true) {
//     $('#squareFour').html(store.currentPlayer)
//     store.game.cells[4] = store.currentPlayer
//     gameLogic.playerSwitch()
//       $('#squareFour').off()
//       const gameOver = gameLogic.gameWin()
//     // console.log('Click 1 check' + event.target.id)
//     const changeIn = event.target.id
//     const gamePieces = store.currentPlayer
//     const gameMove = {
//       'game': {
//         'cell': {
//           'index': changeIn,
//           'value': gamePieces
//         },
//         'over': false
//       }
//     }
//     api.onClickBox(gameMove)
//       .then(ui.clickBox)
//       .catch(ui.failClick)
//   }
// }
//
// const onClickBoxFive = function (event) {
//   if (store.game !== null && store.game !== undefined && store.game.over !== true) {
//     $('#squareFive').html(store.currentPlayer)
//     store.game.cells[5] = store.currentPlayer
//     gameLogic.playerSwitch()
//       $('#squareFive').off()
//       const gameOver = gameLogic.gameWin()
//     // console.log('Click 1 check' + event.target.id)
//     const changeIn = event.target.id
//     const gamePieces = store.currentPlayer
//     const gameMove = {
//       'game': {
//         'cell': {
//           'index': changeIn,
//           'value': gamePieces
//         },
//         'over': false
//       }
//     }
//     api.onClickBox(gameMove)
//       .then(ui.clickBox)
//       .catch(ui.failClick)
//   }
// }
//
// const onClickBoxSix = function (event) {
//   if (store.game !== null && store.game !== undefined && store.game.over !== true) {
//     $('#squareSix').html(store.currentPlayer)
//     store.game.cells[6] = store.currentPlayer
//     gameLogic.playerSwitch()
//       $('#squareSix').off()
//       const gameOver = gameLogic.gameWin()
//     // console.log('Click 1 check' + event.target.id)
//     const changeIn = event.target.id
//     const gamePieces = store.currentPlayer
//     const gameMove = {
//       'game': {
//         'cell': {
//           'index': changeIn,
//           'value': gamePieces
//         },
//         'over': false
//       }
//     }
//     api.onClickBox(gameMove)
//       .then(ui.clickBox)
//       .catch(ui.failClick)
//   }
// }
//
// const onClickBoxSeven = function (event) {
//   if (store.game !== null && store.game !== undefined && store.game.over !== true) {
//     $('#squareSeven').html(store.currentPlayer)
//     store.game.cells[7] = store.currentPlayer
//     gameLogic.playerSwitch()
//       $('#squareSeven').off()
//       const gameOver = gameLogic.gameWin()
//     // console.log('Click 1 check' + event.target.id)
//     const changeIn = event.target.id
//     const gamePieces = store.currentPlayer
//     const gameMove = {
//       'game': {
//         'cell': {
//           'index': changeIn,
//           'value': gamePieces
//         },
//         'over': false
//       }
//     }
//     api.onClickBox(gameMove)
//       .then(ui.clickBox)
//       .catch(ui.failClick)
//   }
// }
//
// const onClickBoxEight = function (event) {
//   if (store.game !== null && store.game !== undefined && store.game.over !== true) {
//     $('#squareEight').html(store.currentPlayer)
//     store.game.cells[8] = store.currentPlayer
//     gameLogic.playerSwitch()
//       $('#squareEight').off()
//       const gameOver = gameLogic.gameWin()
//     // console.log('Click 1 check' + event.target.id)
//     const changeIn = event.target.id
//     const gamePieces = store.currentPlayer
//     const gameMove = {
//       'game': {
//         'cell': {
//           'index': changeIn,
//           'value': gamePieces
//         },
//         'over': false
//       }
//     }
//     api.onClickBox(gameMove)
//       .then(ui.clickBox)
//       .catch(ui.failClick)
//   }
// }

const currentGameData = function () {

}

// Need to figure out how to make this hear to start new game
const newGame = function (event) {
  event.preventDefault()
  store.game = nil
  // $('#squareZero').on('click', (onClickBoxZero))
  // $('#squareOne').on('click', (onClickBoxOne))
  // $('#squareTwo').on('click', (onClickBoxTwo))
  // $('#squareThree').on('click', (onClickBoxThree))
  // $('#squareFour').on('click', (onClickBoxFour))
  // $('#squareFive').on('click', (onClickBoxFive))
  // $('#squareSix').on('click', (onClickBoxSix))
  // $('#squareSeven').on('click', (onClickBoxSeven))
  // $('#squareEight').on('click', (onClickBoxEight))
  api.startNewGameSuccess()
    .then(ui.newGameStart)
    .catch(ui.startNewGameFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  // onClickBoxZero,
  // onClickBoxOne,
  // onClickBoxTwo,
  // onClickBoxThree,
  // onClickBoxFour,
  // onClickBoxFive,
  // onClickBoxSix,
  // onClickBoxSeven,
  // onClickBoxEight,
  newGame,
  onClickBox
}
