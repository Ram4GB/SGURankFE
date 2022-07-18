const { describe, it } = require('mocha');
const { expect } = require('chai');

describe('HelloWorld', () => {
  it('should pass when it runs first time', () => {
    expect(true).to.be.equal(true);
  });
});