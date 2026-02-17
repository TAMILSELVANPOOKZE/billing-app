const request = require('supertest');
const app = require('../app');

test('Home page loads', async () => {
  const res = await request(app).get('/');
  expect(res.statusCode).toBe(200);
});

test('Health check works', async () => {
  const res = await request(app).get('/health');
  expect(res.statusCode).toBe(200);
  expect(res.body.status).toBe('ok');
});