<<<<<<< HEAD
const config = require('../config.js')

const clickBoxZero = function (userData) {
  return $.ajax({
    url: config.apiUrl + '/games/:id',
=======
const onClickBoxZero = function (userData) {
  return $.ajax({
    url: config.apiUrl + '/',
>>>>>>> logic
    method: 'POST',
    data: userData
  })
}

module.exports = {
<<<<<<< HEAD
  clickBoxZero
=======
onClickBoxZero
>>>>>>> logic
}
