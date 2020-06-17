
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
  store.credentials = data.credentials
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

const onSignOut = function (event) {
  event.preventDefault()
  if (store.user === undefined) {
    $('#messages').text('You are not signed in.')
  }
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
  $('.hide-pw').hide()
  event.preventDefault()
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

  function winnerX () {
    api.gameOverX()
      .then(ui.gameOverXSuccess)
      .catch(ui.gameOverXFailure)
  }
  function winnerO () {
    api.gameOverO()
      .then(ui.gameOverOSuccess)
      .catch(ui.gameOverOFailure)
  }
  function winnerTie () {
    api.gameOverTie()
      .then(ui.gameOverTieSuccess)
      .catch(ui.gameOverTieFailure)
  }

  const winnerTest = function () {
    if ((store.game.cells[0] === 'X' && store.game.cells[1] === 'X' && store.game.cells[2] === 'X') ||
        (store.game.cells[3] === 'X' && store.game.cells[4] === 'X' && store.game.cells[5] === 'X') ||
        (store.game.cells[6] === 'X' && store.game.cells[7] === 'X' && store.game.cells[8] === 'X') ||
        (store.game.cells[0] === 'X' && store.game.cells[3] === 'X' && store.game.cells[6] === 'X') ||
        (store.game.cells[1] === 'X' && store.game.cells[4] === 'X' && store.game.cells[7] === 'X') ||
        (store.game.cells[2] === 'X' && store.game.cells[5] === 'X' && store.game.cells[8] === 'X') ||
        (store.game.cells[6] === 'X' && store.game.cells[4] === 'X' && store.game.cells[2] === 'X') ||
        (store.game.cells[0] === 'X' && store.game.cells[4] === 'X' && store.game.cells[8] === 'X')) {
      winnerX()
    } else if ((store.game.cells[0] === 'O' && store.game.cells[1] === 'O' && store.game.cells[2] === 'O') ||
        (store.game.cells[3] === 'O' && store.game.cells[4] === 'O' && store.game.cells[5] === 'O') ||
        (store.game.cells[6] === 'O' && store.game.cells[7] === 'O' && store.game.cells[8] === 'O') ||
        (store.game.cells[0] === 'O' && store.game.cells[3] === 'O' && store.game.cells[6] === 'O') ||
        (store.game.cells[1] === 'O' && store.game.cells[4] === 'O' && store.game.cells[7] === 'O') ||
        (store.game.cells[2] === 'O' && store.game.cells[5] === 'O' && store.game.cells[8] === 'O') ||
        (store.game.cells[6] === 'O' && store.game.cells[4] === 'O' && store.game.cells[2] === 'O') ||
        (store.game.cells[0] === 'O' && store.game.cells[4] === 'O' && store.game.cells[8] === 'O')) {
      winnerO()
    } else if ((store.game.cells[0] === 'X' || store.game.cells[0] === 'O') &&
              (store.game.cells[1] === 'X' || store.game.cells[1] === 'O') &&
              (store.game.cells[2] === 'X' || store.game.cells[2] === 'O') &&
              (store.game.cells[3] === 'X' || store.game.cells[3] === 'O') &&
              (store.game.cells[4] === 'X' || store.game.cells[4] === 'O') &&
              (store.game.cells[5] === 'X' || store.game.cells[5] === 'O') &&
              (store.game.cells[6] === 'X' || store.game.cells[6] === 'O') &&
              (store.game.cells[7] === 'X' || store.game.cells[7] === 'O') &&
              (store.game.cells[8] === 'X' || store.game.cells[8] === 'O')) {
      winnerTie()
    }
  }

  store.game.cells.every(winnerTest)
  setTimeout(winnerTest, 1000)
}

const onGameStats = function (event) {
  $('.stats-hide').toggle()
  if (store.user === undefined) {
    $('#messages').text('Must be logged in to view game stats.')
  }
  api.gameStats()
    .then(ui.gameStatsSuccess)
    .catch(ui.gameStatsFailure)
}
const liClick = function (event) {
  console.log(event.target)
  event.preventDefault()
  api.showGame()
    .then(ui.showGameSuccess)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePWD,
  onSignOut,
  onNewGame,
  onSelection,
  onGameStats,
  liClick
}
