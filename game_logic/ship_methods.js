function checkForShip(player, coordinates) {
    var shipPresent, ship;

    for (var i = 0; i < player.ships.length; i++) {
        ship = player.ships[i];             // loops through all ships

        // filter() loops over all points in ship.locations and returns an array if anything matches...
        shipPresent = ship.locations.filter(function(actualCoordinate){                                         // "THIS" is actualCoordinate !!! actualCoordinate takes on whatever array-item gets checked by filter()
            return (actualCoordinate[0] === coordinates[0]) && (actualCoordinate[1] === coordinates[1]);        // if the callback returns true, that item gets pushed into the shipPresent-array
        })[0];                                                                                                  // [0] here specifies only the first index of the item being pushed. (that is enough to serve in the conditional next...)

        if (!shipPresent) {                 // now if anything got pushed into the shipPresent-array by the filter() the if-condition will evaluate as false, and checkForShip will return true.
            return false;                   // Our ship_test expects checkForShip to return false
        } else {
            return true;
        }
    }   // for loop close

}

module.exports.checkForShip = checkForShip;
