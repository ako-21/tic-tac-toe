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
}
const signOutSuccess = function () {
  $('#messages').text('You are now signed out.')
}
const signOutFailure = function () {
  $('#messages').text('Sign out failed, try again')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePWDSuccess,
  changePWDFailure,
  signOutSuccess,
  signOutFailure
}
