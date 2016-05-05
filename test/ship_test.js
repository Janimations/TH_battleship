var expect = require('chai').expect;

// Suite for testing Ship Position:
describe('checkForShip', function() {

  // Ship-methods:
  var checkForShip = require('../game_logic/ship_methods').checkForShip;    // "imports" the checkForShip function

  // specs 01:
  it('should correctly report no ship at a given players coordinate', function() {

      player = {                                // we need to supply a dummy-player here for the test to run...
          ships: [ { locations: [ [0, 0] ] } ]
      };

      expect(checkForShip(player, [9, 9])).to.be.false;
  });

  // specs 02:
  it('should correctly report a ship at the given coordinates', function() {

      player = {                                // we need to supply a dummy-player here for the test to run...
          ships: [ { locations: [ [0, 0] ] } ]
      };

      expect(checkForShip(player, [0, ])).to.be.true;
  });








});     // describe close
