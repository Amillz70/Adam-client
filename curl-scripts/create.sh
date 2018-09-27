curl "https://tic-tac-toe-wdi.herokuapp.com/games" \
--include \
  --request POST \
  --header "Authorization: Token token=${TOKEN}" \

# '{
#   "game": {
#     "id": 3,
#     "cells": ["","","","","","","","",""],
#     "over": false,
#     "player_x": {
#       "id": 1,
#       "email": "mmm@m.com"
#     },
#     "player_o": null
#   }
# }'
