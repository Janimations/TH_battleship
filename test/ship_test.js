var expect = require('chai').expect;

/*============================================
     Suite for testing Ship Position:
============================================*/

describe('checkForShip', function() {

  // Ship-methods:
  var checkForShip = require('../game_logic/ship_methods').checkForShip;    // "imports" the checkForShip function

  // ************** spec 01: **************** //
  it('should correctly report no ship at a given players coordinate', function() {

      player1 = {                                // we need to supply a dummy-player1 here for the test to run...
          ships: [
              {
                  locations: [ [0, 0] ],
                  damage: []
              }
          ]
      };

      expect(checkForShip(player1, [9, 9])).to.be.false;
  });

  // ************** spec 02: **************** //
  it('should correctly report a ship at the given coordinates', function() {

      player1 = {                                // we need to supply a dummy-player1-object here for the test to run...
          ships: [ { locations: [ [0, 0] ], damage: []} ]
      };

      expect(checkForShip(player1, [0, 0])).to.be.true;
  });

  // ************** spec 03: **************** //
  it('should handle ships located at more than one coordinate', function() {

      player1 = {                                // we need to supply a dummy-player1-object here for the test to run...
          ships: [ { locations: [ [0, 0], [0, 1] ], damage: []} ]
      };

      expect(checkForShip(player1, [0, 1])).to.be.true;
      expect(checkForShip(player1, [0, 0])).to.be.true;
      expect(checkForShip(player1, [9, 9])).to.be.false;
  });

  // ************** spec 04: **************** //
  it('should handle checking multiple ships', function() {

      player1 = {                                // we need to supply a dummy-player1-object here for the test to run...
          ships: [
              {
                  locations: [ [0, 0], [0, 1] ],
                  damage: []
              },
              {
                  locations: [ [3, 0], [3, 1] ],
                  damage: []
              }
          ]
      };

      expect(checkForShip(player1, [0, 1])).to.be.true;
      expect(checkForShip(player1, [0, 0])).to.be.true;

      expect(checkForShip(player1, [3, 0])).to.be.true;
      expect(checkForShip(player1, [3, 1])).to.be.true;

      expect(checkForShip(player1, [9, 9])).to.be.false;
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
        expect(ship.damage[0]).to.deep.equal([0, 0]);
    });

});     // describe close

/*============================================
     Suite for testing "fire" method:
         (using checkForShip)
          (using damageShip)
============================================*/

describe('fire', function(){

    // Ship methods:
    var fireOnShip = require('../game_logic/ship_methods').fireOnShip;


// ************** fire spec 01: **************** //
    it('should check if a set of coordinates causes any damage to a players ships', function() {

        // 2 player1-objects needed to simulate/test the fire-method:
        player1 = {
            ships: [
                {
                    locations: [ [0, 0], [0, 1] ],
                    damage: []
                },
                {
                    locations: [ [2, 0], [2, 1] ],
                    damage: []
                }
            ]
        };

        player2 = {
            ships: [
                {
                    locations: [ [3, 0], [3, 1] ],
                    damage: []
                },
                {
                    locations: [ [4, 0], [4, 1] ],
                    damage: []
                }
            ]
        };

        // call fire() to "create" damage:
        fireOnShip(player1, [0, 0]);
        fireOnShip(player2, [4, 1]);

        expect(player1.ships[0].damage).not.to.be.empty;
        expect(player2.ships[1].damage).not.to.be.empty;

    });


    // ************** fire spec 02: **************** //
    it('should check if a ship can record multiple hits', function() {

        // 2 player1-objects needed to simulate/test the fire-method:
        player1 = {
            ships: [
                {
                    locations: [ [0, 0], [0, 1] ],
                    damage: []
                },
                {
                    locations: [ [2, 0], [2, 1] ],
                    damage: []
                }
            ]
        };

        player2 = {
            ships: [
                {
                    locations: [ [3, 0], [3, 1] ],
                    damage: []
                },
                {
                    locations: [ [4, 0], [4, 1], [4, 2] ],
                    damage: []
                }
            ]
        };

        // call fire() to "create" damage:
        fireOnShip(player2, [4, 2]);
        fireOnShip(player2, [4, 1]);

        // ecpectation:
        expect(player2.ships[1].damage.length).to.be.equal(2);

    });

});     // describe close
