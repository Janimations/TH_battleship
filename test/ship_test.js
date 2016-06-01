var expect = require('chai').expect;

/*============================================
     Suite for testing Ship Position:
============================================*/

describe('checkForShip', function() {

  // Ship-methods:
  var checkForShip = require('../game_logic/ship_methods').checkForShip;    // "imports" the checkForShip function
  var player;

  before(function (){
      player = {                                // we need to supply a dummy-player here for the test to run...
          ships: [
              {
                  locations: [ [0, 0], [0, 1] ]
              },
              {
                  locations: [ [3, 0], [3, 1] ]
              }
          ]
      };
  })


  // ************** spec 01: **************** //
  it('should correctly report no ship at a given players coordinate', function() {

      expect(checkForShip(player, [9, 9])).to.be.false;
  });

  // ************** spec 02: **************** //
  it('should correctly report a ship at the given coordinates', function() {

      expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);      // player.ships[0] returns the WHOLE ship, and so does checkForShip if it's a hit.
                                                                                // deep.equal checks over and compares the whole array-object
  });

  // ************** spec 03: **************** //
  it('should handle ships located at more than one coordinate', function() {

      expect(checkForShip(player, [0, 1])).to.deep.equal(player.ships[0]);
      expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
      expect(checkForShip(player, [9, 9])).to.be.false;
  });

  // ************** spec 04: **************** //
  it('should handle checking multiple ships', function() {

      expect(checkForShip(player, [0, 1])).to.deep.equal(player.ships[0]);
      expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);

      expect(checkForShip(player, [3, 0])).to.deep.equal(player.ships[1]);
      expect(checkForShip(player, [3, 1])).to.deep.equal(player.ships[1]);

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


/*============================================
     Suite for testing Fire :
============================================*/

describe('fire', function(){

    // Ship method:
    var fire = require('../game_logic/ship_methods').fire;
    var player;

    beforeEach(function () {
        player1 = {
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
    })

    after(function() {
        console.log('***** All Tests completet *****');
    })

// ************** fire spec 01: **************** //
    it('should register damage on a players ship at a given location', function() {

        // call fire() to "create" damage:
        fire(player1, [0, 0]);

        expect(player1.ships[0].damage[0]).to.deep.equal([0, 0]);

    });

    // ************** fire spec 02: **************** //
        it('should NOT register damage if there is no ship a given location', function() {

            // call fire() to "create" damage:
            fire(player1, [9, 9]);

            expect(player1.ships[0].damage).to.be.empty;

        });

});     // describe close
