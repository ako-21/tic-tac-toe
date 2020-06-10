
// require in getFormFields
const getFormFields = require('../../lib/get-form-fields.js')
// require in api file and ui file
const api = require('./api')
const ui = require('./ui')
const store = require('./store')

const onSignUp = function (event) {
  // no default refresh
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  // sumbit the event info to the api
  api.signUp(data)

  // create a success or failure response for the user
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  // no default refresh
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  // sumbit the event info to the api
  api.signIn(data)

  // create a success or failure response for the user
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePWD = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.changePWD(data)
    .then(ui.changePWDSuccess)
    .catch(ui.changePWDFailure)
}

const onSignOut = function () {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onNewGame = function () {
  event.preventDefault()
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

let currentChoice = 'X'
const onSelection = function (event) {
  $('#messages').empty()
  event.preventDefault()
  console.log(event.target)
  // Remember to only display game board after New Game is clicked
  if ($(event.target).parents().hasClass('X')) {
    currentChoice = 'X'
    $('#game').removeClass()
    $('#game').addClass('O')
  } else if ($(event.target).parents().hasClass('O')) {
    currentChoice = 'O'
    $('#game').removeClass()
    $('#game').addClass('X')
  }
  $(event.target).attr('data-cell-value', currentChoice)
  $(event.target).parent().text(currentChoice)

  api.selectionZero()
    .then(ui.selectionZeroSuccess)
    .catch(ui.selectionZeroFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePWD,
  onSignOut,
  onNewGame,
  onSelection
}
