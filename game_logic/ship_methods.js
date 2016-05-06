

function checkForShip(player, coordinates) {
    var shipPresent, ship;

    for (var i = 0; i < player.ships.length; i++) {
        ship = player.ships[i];             // loops through all ships

        // filter() loops over all points in ship.locations and returns an array if anything matches...
        shipPresent = ship.locations.filter(function(actualCoordinate){                                         // "THIS" is actualCoordinate !!! actualCoordinate takes on whatever array-item gets checked by filter()
            return (actualCoordinate[0] === coordinates[0]) && (actualCoordinate[1] === coordinates[1]);        // if the callback returns true, that item gets pushed into the shipPresent-array
        })[0];                                                                                                  // [0] here specifies only the first index of the item being pushed. (that is enough to serve in the conditional next...)

        if (shipPresent) {                 // now if anything got pushed into the shipPresent-array by the filter() the if-condition will evaluate as true, and checkForShip will return true.
            return ship;                   // Our ship_test.js file expects checkForShip to return true for a matching coordinate.
        }
    }   // for loop close

    return false;                           // if the for loop never returns a true result, none of the ships have been hit...
}


function damageShip(ship, coordinates) {
    ship.damage.push(coordinates);
}

function fire(player, coordinates) {
    var ship = checkForShip(player, coordinates);

    if (ship) {
        damageShip(ship, coordinates);
    }
}








module.exports.checkForShip = checkForShip;
module.exports.damageShip = damageShip;
module.exports.fire = fire;
