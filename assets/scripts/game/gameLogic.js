// Have constant variables needed for game

const board = ['', '', '', '', '', '', '', '', '']
const store = require('../store.js')
// const api = require('../auth/api.js')
// }

// X goes first
//

// Used Bret Greensteins issue from Jun 12th

// let user1 = 'x'
store.currentPlayer = 'x'

const playerSwitch = function () {
  // console.log('user1 is ', store.currentPlayer)
  if (store.currentPlayer === 'x') {
    store.currentPlayer = 'o'
  } else {
    store.currentPlayer = 'x'
  }
}

const gameWin = function () {
  const board = store.game.cells
  console.log(store.game.cells)
  if (board[0] !== '' && board[0] === board[1] && board[1] === board[2])  {
    store.game.over = true
    $('#display-message').text('Win for player' + ' ' + board[0])
    return ('Winner is ' + board[0])
  } else if (board[3] !== '' && board[3] === board[4] && board[4] === board[5]) {
    store.game.over = true
    $('#display-message').text('Win for player' + ' ' + board[3])
    return ('Winner is ' + board[3])
  } else if (board[6] !== '' && board[6] === board[7] && board[7] === board[8]) {
    store.game.over = true
    $('#display-message').text('Win for player' + ' ' + board[6])
    return ('Winner is ' + board[6])
  } else if (board[0] !== '' && board[0] === board[4] && board[4] === board[8]) {
    store.game.over = true
    $('#display-message').text('Win for player' + ' ' + board[0])
    return ('Winner is ' + board[0])
  } else if (board[2] !== '' && board[2] === board[4] && board[4] === board[6]) {
    store.game.over = true
    $('#display-message').text('Win for player' + ' ' + board[2])
    return ('Winner is ' + board[2])
  } else if (board[0] !== '' && board[0] === board[3] && board[3] === board[6]) {
    store.game.over = true
    $('#display-message').text('Win for player' + ' ' + board[0])
    return ('Winner is ' + board[0])
  } else if (board[1] !== '' && board[1] === board[4] && board[4] === board[7]) {
    store.game.over = true
    $('#display-message').text('Win for player' + ' ' + board[1])
    return ('Winner is ' + board[1])
  } else if (board[2] !== '' && board[2] === board[5] && board[5] === board[8]) {
    store.game.over = true
    $('#display-message').text('Win for player' + ' ' + board[2])
    return ('Winner is ' + board[2])
  } else if (board.every(element => element !== '')) {
    store.game.over = true
    $('#display-message').text('Draw')
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

// const newGame = function (){
//   for (let i = 0; i < 9; i++){
//     board[i] = ''
//   }
// }

module.exports = {
  playerSwitch,
  gameWin,
  // boardInteraction,
  board
  // hideSignOut
  // newGame
}
