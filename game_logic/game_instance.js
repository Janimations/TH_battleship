var fire = require('../game_logic/ship_methods.js').fire;


function checkGameStatus (players) {      // STILL NEEDS TO BE WRITTEN ...
  // .... //
  return false;   // has to return a boolean value
}

function takeTurn (opposingPlayer, guessFunction) {       // guessFuntion has not been written here, but as a "stub" in game_test.js inside the beforeEach-section
  var coordinates = guessFunction();

  fire(opposingPlayer, coordinates);

  var gameOver = checkGameStatus();
  return gameOver;
}




module.exports.checkGameStatus = checkGameStatus;
module.exports.takeTurn = takeTurn;
