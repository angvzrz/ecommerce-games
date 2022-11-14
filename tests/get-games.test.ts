import { getGames } from "@service/igdb-api"

describe('get games from api function', () => {
  test('return something', async () => await getGames().then(data => expect(data).toBe(true)));
});