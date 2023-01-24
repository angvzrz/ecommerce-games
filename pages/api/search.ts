import { Game } from "@type/types";
import { getGames } from "features/services/igdb-api";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Game[]>
) {
  const { search } = req.body;
  const games = await getGames(search);

  res.status(200).json(games);
}
