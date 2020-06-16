'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const events = require('./events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#signUp').on('submit', events.onSignUp)
  $('#signIn').on('submit', events.onSignIn)
  $('#changePWD').on('submit', events.onChangePWD)
  $('#signOut').on('click', events.onSignOut)
  $('#newGame').on('click', events.onNewGame)
  $('#gameStats').on('click', events.onGameStats)
  $(document).on('click', '#indexZero', events.onSelection)
  $(document).on('click', '#indexOne', events.onSelection)
  $(document).on('click', '#indexTwo', events.onSelection)
  $(document).on('click', '#indexThree', events.onSelection)
  $(document).on('click', '#indexFour', events.onSelection)
  $(document).on('click', '#indexFive', events.onSelection)
  $(document).on('click', '#indexSix', events.onSelection)
  $(document).on('click', '#indexSeven', events.onSelection)
  $(document).on('click', '#indexEight', events.onSelection)

  $('#tosignin').click(function () {
    $('.hide-sign-up').show()
    $('#tosignup').show()
    $('.sign-up-hide').hide()
    $('#tosignin').hide()
    $('#messages').empty()
  })

  $('#signOut').click(function () {
    $('#tosignin').show()
    $('#tosignup').show()
  })
  $('#tosignup').click(function () {
    $('.sign-up-hide').show()
    $('#tosignin').show()
    $('.hide-sign-up').hide()
    $('#tosignup').hide()
    $('#messages').empty()
  })
  $('.hide-pw-button').click(function () {
    $('.hide-pw').toggle()
    $('#messages').empty()
    $('#winnermessages').empty()
  })
})
