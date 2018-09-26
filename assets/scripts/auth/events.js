'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.signUp(data)
    .then(console.log)
    .catch(console.log)
}

module.exports = {
  onSignUp
}