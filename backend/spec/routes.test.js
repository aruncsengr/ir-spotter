const request = require('supertest')
const app = require('../server')

describe('GET trains/search', function() {
  it('responds with status code 400', function(done) {
    request(app)
      .get('/trains/search', {label: 123})
      .expect('Content-Type', /json/)
      .expect(400)
  });

  it('responds with status code 200', function(done) {
    request(app)
      .get('/trains/search')
      .expect('Content-Type', /json/)
      .expect(200)
  });
});
