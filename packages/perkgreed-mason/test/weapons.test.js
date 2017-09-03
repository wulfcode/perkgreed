const { expect } = require('chai');
const supertest = require('supertest');
const api = supertest('http://mason.localhost:3101/v1');

describe('Weapons endpoint', function() {
  it('should return all weapons', function(done) {
    api.get('/weapons')
    .set('Accept', 'application/json')
    .expect(200)
    .end((err, res) => {
      expect(res.body).to.have.property('weapons');
      // expect(res.body.weapons).to.be.an('array').with.lengthOf.above(0);
      done();
    });
  });
});
