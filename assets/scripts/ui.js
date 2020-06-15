// require in the store file
const store = require('./store')

const signUpSuccess = function () {
  $('#messages').text('You have successfully signed up. Sign in to Play!')
  $('form').trigger('reset')
  $('.sign-up-hide').hide()
}
const signUpFailure = function () {
  $('form').trigger('reset')
  if (store.credentials.password !== store.credentials.password_confirmation) {
    $('#messages').text('Passwords do not match, try again.')
  } else if (store.credentials.password === store.credentials.password_confirmation) {
    $('#messages').text('Email already registered, try again.')
  }
}

const signInSuccess = function (data) {
  $('#messages').text('You are now signed in and ready to play!')
  $('form').trigger('reset')
  $('.hide-sign-up').hide()
  // $('.hide-pw').show()
  $('.hide-pw-button').show()
  $('#tosignup').hide()
  // store the user object to access the token
  store.user = data.user
}
const signInFailure = function () {
  $('#messages').text('Wrong user name or password. Try again.')
  $('form').trigger('reset')
}
const changePWDSuccess = function () {
  $('#messages').text('Password successfully changed!')
  $('form').trigger('reset')
  $('.hide-pw').hide()
}
const changePWDFailure = function () {
  $('#pwfail').text('Current password is not correct.')
  $('form').trigger('reset')
}
const signOutSuccess = function () {
  $('#game').load(location.href + ' #game>*', '')
  $('#messages').text('You are now signed out.')
  $('.hide').hide()
  $('.hide-pw').hide()
  $('.hide-pw-button').hide()
  $('#winnermessages').empty()

  // location.reload()
}
const signOutFailure = function () {
  $('#messages').text('You are not signed in.')
}

const newGameSuccess = function (data) {
  $('#indexZero').removeAttr('disabled')
  $('#indexOne').removeAttr('disabled')
  $('#indexTwo').removeAttr('disabled')
  $('#indexThree').removeAttr('disabled')
  $('#indexFour').removeAttr('disabled')
  $('#indexFive').removeAttr('disabled')
  $('#indexSix').removeAttr('disabled')
  $('#indexSeven').removeAttr('disabled')
  $('#indexEight').removeAttr('disabled')
  $('.hide').show()
  $('#winnermessages').empty()
  $('.hide-pw').hide()
  $('#game').load(location.href + ' #game>*', '')
  $('#game').removeClass()
  $('#game').addClass('X')
  store.game = data.game
  $('#messages').text('Start by selecting a box!')
}
const newGameFailure = function () {
  $('#messages').text('Must sign in to start a new game.')
}

$(document).on('click', '#newGame', function () {
  if (store.user === undefined) {
    $('#messages').text('Must sign in to start a new game.')
  }
})

const selectionZeroSuccess = function (data) {
//  $('#indexZero').remove()
  store.game = data.game
  // $('#zero').text(store.game.cells[0])
}

const selectionZeroFailure = function () {
//  $('#indexZero').remove()
  $('#message').text('update failure')
  // $('#zero').text(store.game.cells[0])
}

const gameOverXSuccess = function () {
  $('#winnermessages').text('X won!')
  $('#indexZero').attr('disabled', true)
  $('#indexOne').attr('disabled', true)
  $('#indexTwo').attr('disabled', true)
  $('#indexThree').attr('disabled', true)
  $('#indexFour').attr('disabled', true)
  $('#indexFive').attr('disabled', true)
  $('#indexSix').attr('disabled', true)
  $('#indexSeven').attr('disabled', true)
  $('#indexEight').attr('disabled', true)
}

const gameOverOSuccess = function () {
  $('#winnermessages').text('O won!')
  $('#indexZero').attr('disabled', true)
  $('#indexOne').attr('disabled', true)
  $('#indexTwo').attr('disabled', true)
  $('#indexThree').attr('disabled', true)
  $('#indexFour').attr('disabled', true)
  $('#indexFive').attr('disabled', true)
  $('#indexSix').attr('disabled', true)
  $('#indexSeven').attr('disabled', true)
  $('#indexEight').attr('disabled', true)
}

const gameOverTieSuccess = function () {
  $('#winnermessages').text("It's a Tie!")
  $('#indexZero').attr('disabled', true)
  $('#indexOne').attr('disabled', true)
  $('#indexTwo').attr('disabled', true)
  $('#indexThree').attr('disabled', true)
  $('#indexFour').attr('disabled', true)
  $('#indexFive').attr('disabled', true)
  $('#indexSix').attr('disabled', true)
  $('#indexSeven').attr('disabled', true)
  $('#indexEight').attr('disabled', true)
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
