const onClickBoxZero = function (userData) {
  return $.ajax({
    url: config.apiUrl + '/',
    method: 'POST',
    data: userData
  })
}

module.exports = {
onClickBoxZero
}
