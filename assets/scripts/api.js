// require in the api configuration
const config = require('./config')
const store = require('./store')

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

module.exports = {
  signUp,
  signIn,
  changePWD,
  signOut
}
