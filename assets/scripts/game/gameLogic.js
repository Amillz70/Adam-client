// Have constant variables needed for game

// let game ={
// let user1 = 'x'
// const user2 = 'O'

const board = ['', '', '', '', '', '', '', '', '']
// }

// const gameStart
// I don't remeber what this was, look into it
// const cells = querySelctorAll('.tic-box')

// X goes first
//
// clickBox

let user1 = 'x'

const playerSwitch = function (event) {
  event.preventDefault()
  console.log($(this))
  console.log('user1 is ', user1)
  if (user1 === 'x') {
    $(this).text(user1)
    user1 = 'o'
  } else {
    $(this).text(user1)
    user1 = 'x'
  }
  return user1
}

// const gameWin = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
// // Win conditions
// function checkWin(user1)
// {
//   return gameWin.some(function()) {
//     return threeInARow.every(function(square)
//       return board[square] === user1
//   )
//   }
// }
// Win for user1 or 'X'
const gameWin = function (board) {
  if (board[0] !== '' && board[0] === board[1] && board[1] === board[2]) {
    return ('Winner is ' + board[1])
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

// Clickable Board
// for (let i = 0; i < board.length; i++) {
//   // console.log(board[i])
//   board[i].addEventListener('click', function () {
//     if (this.innerhtml !== '') {
//       this.innerhtml = user1
//     }
//   })
// }

// for (let i = 0; i < winLines[lastMove].length; i++){
// if ($('#squareZero').hasClass('x') && $('#squareOne').hasClass('x') && $('#squareTwo').hasClass('x')) ||
// ($('#squareThree').hasClass('x') && $('#squareFour').hasClass('x') && $('#squareFive').hasClass('x')) ||
// ($('#squareSix').hasClass('x') && $('#squareSeven').hasClass('x') && $('#squareEight').hasClass('x')) ||
// ($('#squareZero').hasClass('x') && $('#squareThree').hasClass('x') && $('#squareSix').hasClass('x')) ||
// ($('#squareOne').hasClass('x') && $('#squareFour').hasClass('x') && $('#squareSeven').hasClass('x')) ||
// ($('#squareTwo').hasClass('x') && $('#squareFive').hasClass('x') && $('#squareEight').hasClass('x')) ||
// ($('#squareZero').hasClass('x') && $('#squareFour').hasClass('x') && $('#squareEight').hasClass('x')) ||
// ($('#squareTwo').hasClass('x') && $('#squareFour').hasClass('x') && $('#squareSix').hasClass('x'))}
// for ()
// {
// return 'Winner is' + 'X'
//   // User1 wins
// }
// // Win for user2 or 'O'
// else if ($('#squareZero').hasClass('o') && $('#squareOne').hasClass('o') && $('#squareTwo').hasClass('o')) ||
// ($('#squareThree').hasClass('o') && $('#squareFour').hasClass('o') && $('#squareFive').hasClass('o')) ||
// ($('#squareSix').hasClass('o') && $('#squareSeven').hasClass('o') && $('#squareEight').hasClass('o')) ||
// ($('#squareZero').hasClass('o') && $('#squareThree').hasClass('o') && $('#squareSix').hasClass('o')) ||
// ($('#squareOne').hasClass('o') && $('#squareFour').hasClass('o') && $('#squareSeven').hasClass('o')) ||
// ($('#squareTwo').hasClass('o') && $('#squareFive').hasClass('o') && $('#squareEight').hasClass('o')) ||
// ($('#squareZero').hasClass('o') && $('#squareFour').hasClass('o') && $('#squareEight').hasClass('o')) ||
// ($('#squareTwo').hasClass('o') && $('#squareFour').hasClass('o') && $('#squareSix').hasClass('o'))
// )
// {
//   // User2 wins
//   return 'Winner is' + 'O'
// }
// if else {
//
// }
// // For draw
// else  {
//   //draw
//   return 'Draw, try again.'
// }
// }
//
//
//
//
// function winCondition( ,){
// for (let i = 0; i < winLines[lastMove].length; i++)
// }

// Says player has won, lost, or drew
module.exports = {
  user1,
  playerSwitch,
  gameWin
}
