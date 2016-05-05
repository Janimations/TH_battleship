var expect = require('chai').expect;    // "loads" or requires the expect-method from chai to be used here


// set up Test-Suite:

describe('Mocha', function() {        // string describes the nature of the test.

  // Test spec (unit test)
  it('should run our test using npm', function() {
    expect(true).to.be.ok;                          // ok is a chai-assertion for anything "truthy"
  });
});
