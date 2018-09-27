// Have constant variables needed for game
// Need: users, turn, and amount of turns for each(1)
// let game ={
const user1 = 'X'
const user2 = 'O'
currentUser : ''
const moves = 1
// }

const cells = querySelctorAll('.tic-box')

// X goes first
//

// Win conditions
const win = new Array
// Win for user1 or 'X'
if ($('#squareZero').hasClass('x') && $('#squareOne').hasClass('x') && $('#squareTwo').hasClass('x') ||
($('#squareThree').hasClass('x') && $('#squareFour').hasClass('x') && $('#squareFive').hasClass('x') ||
($('#squareSix').hasClass('x') && $('#squareSeven').hasClass('x') && $('#squareEight').hasClass('x') ||
($('#squareZero').hasClass('x') && $('#squareThree').hasClass('x') && $('#squareSix').hasClass('x') ||
($('#squareOne').hasClass('x') && $('#squareFour').hasClass('x') && $('#squareSeven').hasClass('x') ||
($('#squareTwo').hasClass('x') && $('#squareFive').hasClass('x') && $('#squareEight').hasClass('x') ||
($('#squareZero').hasClass('x') && $('#squareFour').hasClass('x') && $('#squareEight').hasClass('x') ||
($('#squareTwo').hasClass('x') && $('#squareFour').hasClass('x') && $('#squareSix').hasClass('x')
)
{
  // User1 wins
}
// Win for user2 or 'O'
else if ($('#squareZero').hasClass('o') && $('#squareOne').hasClass('o') && $('#squareTwo').hasClass('o') ||
($('#squareThree').hasClass('o') && $('#squareFour').hasClass('o') && $('#squareFive').hasClass('o') ||
($('#squareSix').hasClass('o') && $('#squareSeven').hasClass('o') && $('#squareEight').hasClass('o') ||
($('#squareZero').hasClass('o') && $('#squareThree').hasClass('o') && $('#squareSix').hasClass('o') ||
($('#squareOne').hasClass('o') && $('#squareFour').hasClass('o') && $('#squareSeven').hasClass('o') ||
($('#squareTwo').hasClass('o') && $('#squareFive').hasClass('o') && $('#squareEight').hasClass('o') ||
($('#squareZero').hasClass('o') && $('#squareFour').hasClass('o') && $('#squareEight').hasClass('o') ||
($('#squareTwo').hasClass('o') && $('#squareFour').hasClass('o') && $('#squareSix').hasClass('o')
)
{
  // User2 wins
}
// For draw
else if (count === 9){
  //draw
}




function winCondition( ,){
for (let i = 0; i < winLines[lastMove].length; i++)
}

// Says player has won, lost, or drew

// Resets game
