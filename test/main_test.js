var expect = require('chai').expect;    // "loads" or requires the expect-method from chai to be used here


// set up Test-Suite:
// this one is just to test that our testing-environment is working correctly:

describe('Testing that Mocha works', function() {        // the strings in 'describe' and 'it' get printed to the terminal when the tests get run.

  // Test spec (unit test)
  it('should run our test using npm', function() {
    expect(true).to.be.ok;                          // ok is a chai-assertion for anything "truthy"
  });
});
