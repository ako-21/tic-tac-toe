// require in the api configuration
const config = require('./config')
const store = require('./store')
const events = require('./events')
const gameEngine = require('./gameEngine')


const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: {
      credentials: {
        email: data.credentials.email,
        password: data.credentials.password,
        password_confirmation: data.credentials.password_confirmation
      }
    }
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: {
      credentials: {
        email: data.credentials.email,
        password: data.credentials.password
      }
    }
  })
}

const changePWD = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      passwords: {
        old: data.passwords.old,
        new: data.passwords.new
      }
    }
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const newGame = function () {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showGame = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games/' + store.game._id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const selection = function (data) {
  return $.ajax({
    method: 'Patch',
    url: config.apiUrl + '/games/' + store.game._id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: document.querySelector('#indexZero').value,
          value: 'X'
        },
        over: false
      }
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePWD,
  signOut,
  newGame,
  showGame,
  selection
}