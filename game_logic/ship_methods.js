

function checkForShip(player, coordinates) {
    var shipPresent, ship;

    for (var i = 0; i < player.ships.length; i++) {
        ship = player.ships[i];             // loops through all ships

        // filter() loops over all points in ship.locations and returns an array if anything matches...
        shipPresent = ship.locations.filter(function(actualCoordinate){                                         // "THIS" is actualCoordinate !!! actualCoordinate takes on whatever array-item gets checked by filter()
            return (actualCoordinate[0] === coordinates[0]) && (actualCoordinate[1] === coordinates[1]);        // if the callback returns true, that item ('this' or actualCoordinate) gets pushed into the shipPresent-array
        });

        if (shipPresent[0]) {    // needs to be index[]-deep otherwise the array-object alone always is true  // now if anything got pushed into the shipPresent-array by the filter() the if-condition will evaluate as true, and checkForShip will return true.
            damageShip(ship, shipPresent[0]);               // pushes the matched coordinate into the ship.damage array
            console.log('###### Hit Ship at: ' + shipPresent);
            return true;                                    // Our ship_test.js file expects checkForShip to return true for a matching coordinate.
        }
    }   // for loop close

    shipPresent = [];
    console.log('****** Splash !');
    return false;                           // if the for loop never returns a true result, none of the ships have been hit...
}


function damageShip(ship, coordinates) {
    ship.damage.push(coordinates);
}

function fireOnShip(player, coordinates){
    checkForShip(player, coordinates);
}







module.exports.checkForShip = checkForShip;
module.exports.damageShip = damageShip;
module.exports.fireOnShip = fireOnShip;
