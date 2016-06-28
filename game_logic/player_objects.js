/****************************************************
           PLAYER OBJECT CONSTRUCTOR
****************************************************/

// Normally you would play with 4 singles (submarines), 3 doubles (frigates), 2 triplets (destroyers) and one quad (the aircraft carrier)
// so a Player would be created with: new Player(4, 3, 2, 1);
// However you could also play a submarine war style game by creating players with: new Player(8, 0, 0, 0);

// this needs to be designed into the interface of the game still...

function Player (submarines, frigates, destroyers, carrier) {
      this.ships = [];

      var ship = {
            size: 1,
            locations: [],
            damage: []
          };

      for (var i=0; i<submarines; i++) {
        this.ships.push(ship);
      };

      for (var i=0; i<frigates; i++) {
        ship.size = 2;
        this.ships.push(ship);
      };

      for (var i=0; i<destroyers; i++) {
        ship.size = 3;
        this.ships.push(ship);
      };

      for (var i=0; i<carrier; i++) {
        ship.size = 4;
        this.ships.push(ship);
      };
};
