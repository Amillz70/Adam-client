// Have constant variables needed for game

const board = ['', '', '', '', '', '', '', '', '']
const store = require('../store.js')
// }

// X goes first
//

// Used Bret Greensteins issue from Jun 12th

// let user1 = 'x'
store.currentPlayer = 'x'

const playerSwitch = function () {
  event.preventDefault()
  //  console.log('user1 is ', store.currentPlayer)
  if (store.currentPlayer === 'x') {
    store.currentPlayer = 'o'
  } else {
    store.currentPlayer = 'x'
  }
}

const gameWin = function (board) {
  if (board[0] !== '' && board[0] === board[1] && board[1] === board[2]) {
    return ('Winner is ' + board[0])
  } else if (board[3] !== '' && board[3] === board[4] && board[4] === board[5]) {
    return ('Winner is ' + board[3])
  } else if (board[6] !== '' && board[6] === board[7] && board[7] === board[8]) {
    return ('Winner is ' + board[6])
  } else if (board[0] !== '' && board[0] === board[4] && board[4] === board[8]) {
    return ('Winner is ' + board[0])
  } else if (board[2] !== '' && board[2] === board[4] && board[4] === board[6]) {
    return ('Winner is ' + board[2])
  } else if (board[0] !== '' && board[0] === board[3] && board[3] === board[6]) {
    return ('Winner is ' + board[0])
  } else if (board[1] !== '' && board[1] === board[4] && board[4] === board[7]) {
    return ('Winner is ' + board[1])
  } else if (board[2] !== '' && board[2] === board[5] && board[5] === board[8]) {
    return ('Winner is ' + board[2])
  } else if (board.length > 9) {
    return 'Draw'
  } else {
    return 'Continue Playing'
  }
}

// function hideSignOut () {
//   const hide = document.getElementById('sign-out-form')
//   if (hide.style.display === 'none') {
//     hide.style.display = 'block'
//   } else {
//     hide.style.display = 'none'
//   }
// }
// function to make game and events linked

// Says player has won, lost, or drew
module.exports = {
  playerSwitch,
  gameWin,
  // boardInteraction,
  board
  // hideSignOut
}
