const expect = require('chai').expect;
const supertest = require('supertest');
const api = supertest('http://mason.localhost:3101');

describe('Mason', function() {
  it('should respond with a friendly help greeting at the base url.', function(done) {
    api.get('/')
    .set('Accept', 'application/json')
    .expect(200)
    .end((err, res) => {
      expect(res.body).to.have.property('info');
      expect(res.body.info).to.be.a('string');
      done();
    });
  });
  it('should respond with the version at the version url.', function(done) {
    api.get('/v1')
    .set('Accept', 'application/json')
    .expect(200)
    .end((err, res) => {
      expect(res.body).to.have.property('current_version');
      expect(res.body.current_version).to.be.a('string');
      done();
    });
  });
});
