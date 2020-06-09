curl "https://tic-tac-toe-wdi.herokuapp.com/games/${ID}" \
--include \
--request DELETE \
--header "Authorization: Token token=${TOKEN}" \
--header "Content-Type: application/json" \


echo
