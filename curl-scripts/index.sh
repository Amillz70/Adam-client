curl "https://tic-tac-toe-wdi.herokuapp.com/sign-up" \
--include \
  --request GET \
  --header "Content-Type: application/json" \
  --data
{
  "games": [
    {
      "id": 1,
      "cells": ["x","o","x","o","x","o","x","o","x"],
      "over": true,
      "player_x": {
        "id": 1,
        "email": "and@and.com"
      },
      "player_o": {
        "id": 3,
        "email": "dna@dna.com"
      }
    },
    {
      "id": 2,
      "cells": ["","","","","","","","",""],
      "over": false,
      "player_x": {
        "id": 3,
        "email": "dna@dna.com"
      },
      "player_o": {
        "id": 1,
        "email": "and@and.com"
      }
    }
  ]
}
