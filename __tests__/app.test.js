const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
//importing our dummy/API data for our expecteds
const { cats } = require('../data/cats');

describe('cats routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/cats should return a list of cats', async () => {
    //sends a request to our .get (all cats) endpoint and assigns it to "res"
    const res = await request(app).get('/cats');
    //maps through our dummy data which we grab directly rather than going through
    //the endpoint, for a comparison to make sure the controller, etc are working.
    const expected = cats.map((cat) => {
      return { id: cat.id, name: cat.name };
    });
    expect(res.body).toEqual(expected);
  });

  it('/cats/:id should return cat detail', async () => {
    //hits the .get (cat by id) endpoint
    const res = await request(app).get('/cats/1');
    //copy and pasted the cat object with an id of 1, which should be identical to
    //our res(ponse) if everything is working correctly.
    const felix = {
      id: '1',
      name: 'Felix',
      type: 'Tuxedo',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Felix_the_cat.svg/200px-Felix_the_cat.svg.png',
      year: 1892,
      lives: 3,
      isSidekick: false,
    };
    expect(res.body).toEqual(felix);
  });

  afterAll(() => {
    pool.end();
  });
});
