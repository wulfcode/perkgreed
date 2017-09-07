const { expect } = require('chai');
const messages = require('./');

describe('Messenger', function() {
  it('should get a 404 message', function() {
    expect(messages.get('notFound')).to.be.a('string');
  });
  it('should interpolate one string and return a message.', function() {
    expect(messages.get('test', 'replacer')).to.be.equal('A replaced string: replacer');
  });
});
