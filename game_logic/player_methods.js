var checkForShip = require('./ship_methods.js').checkForShip;       // this "imports" the checkForShip function from the ship_methods module file
var checkForShip = require('./ship_methods.js').fire;

//***********************************************//
// checks if coordinates occupied by a ship and weather they are valid numbers 0 - 9

function validateLocation (player, coordinates) {
  var x = coordinates[0];
  var y = coordinates[1];

  var spaceAvailable = !checkForShip(player, coordinates);          // if checkForShip finds no "hit" and returns false, this will make spaceAvailable = true

  if ((x <= 9 && x >= 0) && (y <= 9 && y >= 0)) {
    return spaceAvailable; // decides whether this valid space is occupied
  } else {
    return false;
  }
}

//***********************************************//

function validateLocations (player, locations) {            // ??? locations ???

  var validated = locations.map(function (location) {       // validated is an array of boolean values (true if validateLocation() (and checkForShip inside that) can't find a hit)
    return validateLocation(player, location);
  });

  return validated.indexOf(false) === -1;                   // if no "false" is found in validated array, indexOf will return -1 and the comparison evaluates to true.
}


//***********************************************//

function placeShip (player, ship, startingCoordinates, direction) {
    if (!direction) throw Error('You left out the direction!');

  var proposedLocations = [];
  var previousLocation,
    rowNumber,
    columnNumber;

  for (var i = 0; i < ship.size; i++) {                     // this for loop accumulates coordinates in the proposedLocations-array
    previousLocation = proposedLocations[i - 1] || [];      // index []
    rowNumber = previousLocation[0];
    columnNumber = previousLocation[1];

    // (Conditional if-else) Ternary Operator:

    proposedLocations[i] = (i === 0)            // if: i is the first index in proposedLocations-array
      ? startingCoordinates                     // use startingcoordinates as index[0]
      : (direction === 'horizontal')            // else if: direction is 'horizontal'
        ? [rowNumber, ++columnNumber]           // assign this coordinate to the index[i] of proposedLocations (increasing only the column-coordinate)
        : [++rowNumber, columnNumber];          // else assign this coordinate to index[i]...
  }

  if (validateLocations(player, proposedLocations)) {
    ship.locations = proposedLocations;
  } else {
    return false;
  }
}

//***********************************************//
function getRandomCoordinates(range){
    var x = Math.floor(Math.random() * range);
    var y = Math.floor(Math.random() * range);
    return [x, y];

//***********************************************//
function getRandomDirection() {

  return = Math.random() > 0.5           // if Math.random > 0.5, 'horizontal' gets stored in the "direction" variable...
      ? 'horizontal'
      : 'vertical';                               // else "vertical"
}

//***********************************************//
function computerFire (player) {
  var coordinates = getRandomCoordinates(9);
  fire(player, coordinates);
}

//***********************************************//
function computerPlaceShip (player, ship) {

  var startingCoordinates = getRandomCoordinates(9);
  var direction = getRandomDirection();

  placeShip(player, ship, startingCoordinates, direction);  // creates and updates (writes to) coordinates for that player's ship...
}



module.exports = {
  placeShip: placeShip,
  validateLocations: validateLocations,
  validateLocation: validateLocation,
  computerPlaceShip: computerPlaceShip,
  computerFire: computerFire
};
