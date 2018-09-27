curl "https://tic-tac-toe-wdi.herokuapp.com/" + `/games[?over=]` \
--include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}" \
  --data
'{
  "games": [

  ]
}'
