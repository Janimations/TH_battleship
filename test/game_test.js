var expect = require('chai').expect;

describe('GAME INSTANCE FUNCTIONS', function() {


    describe ('check Game Status', function () {
      var checkGameStatus = require ('../game_logic/game_instance.js').checkGameStatus;
        it('should tell me when the game is over', function(){

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


    describe('takeTurn', function () {
      var takeTurn = require('../game_logic/game_instance.js').takeTurn;
      var guess, player;

      beforeEach(function () {

          guess = function () { return [0, 0]; };     // guess is passed into takeTurn as a second parameter

          player = {
            ships: [
              {
                locations: [[0, 0]],
                damage: []
              }
            ]
          }
      });

      it('should return false if the game ends', function() {
        var actual = takeTurn(player, guess);
        expect(actual).to.be.false;
      });

    });



    function saveGame (callback) {        // callback is a function that is passed through to setTmeout(), to be called after 1000ms
      setTimeout(function () {            // setTimeout simulates an asynchronous call ...
        callback();
      }, 1000);
    }


    describe('saveGame', function () {

      it('should update save status', function (done) {     // "done" as an argument signals mocha to wait checking expectations until "done" as a funciton is called in the code
        var status = 'game not saved...';

        saveGame(function() {
          status = 'game saved!';   // this is the code that is called after setTimeout has waited 1000ms

          expect(status).to.equal('game saved!');   // moved inside the callback and below the previous line, so that the expectation passes
          done();
        });

      });  // it close
    });   // describe close


});   // suite close
