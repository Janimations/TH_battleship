var expect = require('chai').expect;

/*============================================
     Suite for testing Ship Position:
============================================*/

describe('checkForShip', function() {

  // Ship-methods:
  var checkForShip = require('../game_logic/ship_methods').checkForShip;    // "imports" the checkForShip function

  // ************** spec 01: **************** //
  it('should correctly report no ship at a given players coordinate', function() {

      player = {                                // we need to supply a dummy-player here for the test to run...
          ships: [ { locations: [ [0, 0] ] } ]
      };

      expect(checkForShip(player, [9, 9])).to.be.false;
  });

  // ************** spec 02: **************** //
  it('should correctly report a ship at the given coordinates', function() {

      player = {                                // we need to supply a dummy-player-object here for the test to run...
          ships: [ { locations: [ [0, 0] ] } ]
      };

      expect(checkForShip(player, [0, 0])).to.be.true;
  });

  // ************** spec 03: **************** //
  it('should handle ships located at more than one coordinate', function() {

      player = {                                // we need to supply a dummy-player-object here for the test to run...
          ships: [ { locations: [ [0, 0], [0, 1] ] } ]
      };

      expect(checkForShip(player, [0, 1])).to.be.true;
      expect(checkForShip(player, [0, 0])).to.be.true;
      expect(checkForShip(player, [9, 9])).to.be.false;
  });

  // ************** spec 04: **************** //
  it('should handle checking multiple ships', function() {

      player = {                                // we need to supply a dummy-player-object here for the test to run...
          ships: [
              {
                  locations: [ [0, 0], [0, 1] ]
              },
              {
                  locations: [ [3, 0], [3, 1] ]
              }
          ]
      };

      expect(checkForShip(player, [0, 1])).to.be.true;
      expect(checkForShip(player, [0, 0])).to.be.true;

      expect(checkForShip(player, [3, 0])).to.be.true;
      expect(checkForShip(player, [3, 1])).to.be.true;

      expect(checkForShip(player, [9, 9])).to.be.false;
  });

});     // describe close


/*============================================
     Suite for testing Ship Damage:
============================================*/

describe('damageShip', function(){

    // Ship method:
    var damageShip = require('../game_logic/ship_methods').damageShip;

// ************** spec 01: **************** //
    it('should register damage on a given ship at a given location', function() {

        // ship-object needed to run the test (and to inform how to build ships later!)
        var ship = {
            locations: [[0, 0]],
            damage: []
        };

        // run function to "create" damage:
        damageShip(ship, [0, 0]);           // this will push the coordinates into the damage-array

        expect(ship.damage).not.to.be.empty;

    });

});     // describe close
