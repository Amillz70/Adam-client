curl "https://tic-tac-toe-wdi.herokuapp.com/" + `/games/:id`\
--include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}"\
  --data \
{
  "game": {
        "id" : 1
    "cell": {
      "index": 0,
      "value": "x"
    },
    "over": false
  }
}
