
// require in getFormFields
const getFormFields = require('../../lib/get-form-fields.js')
// require in api file and ui file
const api = require('./api')
const ui = require('./ui')

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

module.exports = {
  onSignUp,
  onSignIn,
  onChangePWD,
  onSignOut
}
