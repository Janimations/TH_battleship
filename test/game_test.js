var expect = require('chai').expect;

describe('GAME INSTANCE FUNCTIONS', function() {

    describe ('check Game Status', function () {
        it('should tell me when the game is over', function(){     // this is a 'pending' test, so no 'function()' added yet...

        var players = [
        {
					ships: [
						{
							locations: [[0, 0]],
							damage: [[0, 0]]
						}
					]
        }
      ];

      var actual = checkGameStatus(players);
      expect(actual).to.be.false;
      });

    });


});
