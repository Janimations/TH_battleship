var expect = require('chai').expect;

// check ship position
describe('checkForShip', function() {

  // outline...
  var checkForShip = require('../game_logic/ship_methods').checkForShip;    // "imports" the checkForShip function

  it('should correctly report no ship at a given players coordinate', function() {

      player = {
          ships: [ { locations: [ [0, 0] ] } ]
      };

      expect(checkForShip(player, [9, 9])).to.be.false;
  });


});
