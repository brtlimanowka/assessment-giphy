import { queryBuilder } from '../utils/utils';

describe('queryBuilder', () => {
  test('returns null if no query text is passed', () => {
    const builtQuery = queryBuilder();
    expect(builtQuery).toBe(null);
  });

  test('returns a valid query with default offset', () => {
    const builtQuery = queryBuilder('kittens');
    expect(builtQuery).toBe(
      'https://api.giphy.com/v1/gifs/search?z3TCxWMXI3poet0DNQBeC8RfYrprX7U1,&q=kittens&offset=0&limit=5&rating=G&lang=en'
    );
  });

  test('returns a valid query with custom offset', () => {
    const builtQuery = queryBuilder('kittens', 1);
    expect(builtQuery).toBe(
      'https://api.giphy.com/v1/gifs/search?z3TCxWMXI3poet0DNQBeC8RfYrprX7U1,&q=kittens&offset=1&limit=5&rating=G&lang=en'
    );
  });
});
