import { Game } from '@type/types';
import axios from 'axios';

/**
 * Fetches video games properties from the igdb games endpoint
 * @returns Promise<Game[]>
 */
export async function getGames(): Promise<Game[]> {
  const fetchedGames = await new Promise<Game[]>((resolve, reject) => {
    axios({
      url: process.env.NEXT_PUBLIC_IGDB_API_GAMES as string,
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Client-ID': process.env.NEXT_PUBLIC_CLIENT_ID as string,
        Authorization: 'Bearer eafn5birsjnhnkgoetkml5h6185c12',
      },
      data: 'fields cover.url, first_release_date, genres, name, platforms, rating, status; where cover != null;',
    })
      .then((response) => {
        resolve(response.data as unknown as Game[]);
      })
      .catch((error) => {
        reject(error);
      });
  });

  return fetchedGames;
}


