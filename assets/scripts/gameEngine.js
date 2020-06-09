const store = require('./store')
const api = require('./api')



let xTracker = 0
let oTracker = 0

function compareXO (arr) {
  if (arr === 'X') {
    xTracker = xTracker + 1
  } else if (arr === 'O') {
    oTracker = oTracker + 1
  }
}

//array.forEach(compareXO)

const thePick = function () {
  if (xTracker === oTracker) {
    return ('X')
  } else {
    return ('O')
  }
}

module.exports = {
  thePick
}
