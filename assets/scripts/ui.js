// require in the store file
const store = require('./store')

const signUpSuccess = function () {
  $('#messages').text('You have successfully signed up!')
  $('form').trigger('reset')
}
const signUpFailure = function () {
  $('#messages').text('Sign Up failed, try again')
}
const signInSuccess = function (data) {
  $('#messages').text('You are now signed in and ready to play!')
  $('form').trigger('reset')
  // store the user object to access the token
  console.log(data)
  store.user = data.user
}
const signInFailure = function () {
  $('#messages').text('Sign In failed, try again')
}
const changePWDSuccess = function () {
  $('#messages').text('Password successfully changed!')
  $('form').trigger('reset')
}
const changePWDFailure = function () {
  $('#messages').text('Password change failed, try again')
  $('form').trigger('reset')
}
const signOutSuccess = function () {
  $('#messages').text('You are now signed out.')
  location.reload()
}
const signOutFailure = function () {
  $('#messages').text('Sign out failed, try again')
}

const newGameSuccess = function (data) {
  $('#game').load(location.href + ' #game>*', '')
  $('#game').removeClass()
  $('#game').addClass('X')
  $('#messages').text('Start by selecting a box!')
  console.log(data)
  store.game = data.game
}
const newGameFailure = function () {
  $('#messages').text('New Game failed, try again')
}

const selectionZeroSuccess = function (data) {
//  $('#indexZero').remove()
  console.log(data)
  store.game = data.game
  // $('#zero').text(store.game.cells[0])
}

const selectionZeroFailure = function () {
//  $('#indexZero').remove()

  // $('#zero').text(store.game.cells[0])
}

const gameOverXSuccess = function () {
  $('#messages').text('X won!')
}

const gameOverOSuccess = function () {
  $('#messages').text('O won!')
}

const gameOverTieSuccess = function () {
  $('#messages').text('Tie!')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePWDSuccess,
  changePWDFailure,
  signOutSuccess,
  signOutFailure,
  newGameSuccess,
  newGameFailure,
  selectionZeroSuccess,
  selectionZeroFailure,
  gameOverXSuccess,
  gameOverOSuccess,
  gameOverTieSuccess
}
