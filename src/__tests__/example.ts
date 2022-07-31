import request from 'supertest';
import app from '../app';

describe('Test GET example route /', () => {
  it('It should be response with status 200', async () => {
    const { body } = await request(app)
      .get('/example')
      .expect('Content-type', /json/)
      .expect(200);

    expect(body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: expect.any(String),
        }),
      ]),
    );
  });
});
