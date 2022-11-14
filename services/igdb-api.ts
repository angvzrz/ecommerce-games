import { Game } from '@type/types';
import axios from 'axios';

export async function getGames(): Promise<Game[]> {
  const fetchedGames = await new Promise<Game[]>((resolve, reject) => {
    axios({
      url: process.env.NEXT_PUBLIC_IGDB_API_GAMES as string,
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Client-ID': process.env.NEXT_PUBLIC_CLIENT_ID as string,
        Authorization: 'Bearer azq2ht7fwl6czb0nyyvimk1n0hsye1',
        // 'Access-Control-Allow-Origin': 'https://api.igdb.com/v4',
        'Access-Control-Allow-Origin': 'http://localhost:3000',
      },
      data: 'fields cover, first_release_date, genres, name, platforms, rating, status;',
    })
      .then((response) => {
        // console.log('success');
        resolve(response as unknown as Game[]);
        // console.log(response);
      })
      .catch((error) => {
        // console.error(error);
        reject(error);
      });
  });
  // console.log(fetchedGames);
  return fetchedGames;
}
