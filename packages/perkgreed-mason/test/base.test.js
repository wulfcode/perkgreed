const expect = require('chai').expect;
const supertest = require('supertest');
const api = supertest('http://mason.localhost:3101');

describe('Mason base', function() {
  it('should be a friendly help greeting.', function(done) {
    api.get('/')
    .set('Accept', 'application/json')
    .expect(200)
    .end((err, res) => {
      expect(res.body).to.have.property('info');
      done();
    });
  });
});
