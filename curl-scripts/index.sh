<<<<<<< HEAD
curl "https://tic-tac-toe-wdi.herokuapp.com/games" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \

  echo
=======
curl "https://tic-tac-toe-wdi.herokuapp.com/" + `/games[?over=]` \
--include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}" \
  --data
'{
  "games": [

  ]
}'
>>>>>>> logic
