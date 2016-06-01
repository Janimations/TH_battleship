

function checkForShip(player, coordinates) {
    var shipPresent, ship;

    for (var i = 0; i < player.ships.length; i++) {
        ship = player.ships[i];             // loops through all ships

        // filter() loops over all points in ship.locations and returns an array into shipPresent if anything matches...
        shipPresent = ship.locations.filter( function(actualCoordinate) {                                       // filter() checks for a matching value and returns an array of all matching items. So shipPresent becomes an array.
                                                                                                                //the variable "actualCoordinate" takes on each item in the ship.location-array (works the same as "this")
            return (actualCoordinate[0] === coordinates[0]) && (actualCoordinate[1] === coordinates[1]);        // if the callback returns true, that item gets stored in the shipPresent-variable
        })[0];                                                                                                  // [0] here specifies only the first index of the item being pushed by filter() into shipPresent. (that is enough to serve in the conditional next...)

        if (shipPresent) {                 // now if anything got pushed into the shipPresent-array by the filter-function, the if-condition will evaluate as true, and checkForShip will return ship.
            return ship;                   // Our ship_test.js file expects checkForShip to return true (or ship, which is an array-object and thus true) for a matching coordinate.
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


/*========================================
        Player format
==========================================

player = {
    ships: [
        {
            locations: [ [0, 0], [0, 1] ]
        },
        {
            locations: [ [3, 0], [3, 1] ]
        }
    ]
};

Notation Example:

player.ships[0].locations[1][1] = 1

*/
