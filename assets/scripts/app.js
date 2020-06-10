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
  $('#indexZero').on('click', events.onSelection)
  $('#indexOne').on('click', events.onSelection)
  $('#indexTwo').on('click', events.onSelection)
  $('#indexThree').on('click', events.onSelection)
  $('#indexFour').on('click', events.onSelection)
  $('#indexFive').on('click', events.onSelection)
  $('#indexSix').on('click', events.onSelection)
  $('#indexSeven').on('click', events.onSelection)
  $('#indexEight').on('click', events.onSelection)
})
