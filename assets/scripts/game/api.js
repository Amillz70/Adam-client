const config = require('../config.js')

const clickBoxZero = function (userData) {
  return $.ajax({
    url: config.apiUrl + '/games/:id',
