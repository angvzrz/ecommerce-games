import { InferGetStaticPropsType } from "next";

import { Game } from "@type/types";
import type { NextPage } from "next";
import { Gallery } from "@component/gallery/gallery";
import { Header } from "@component/header";
import { getGames } from "../features/services/igdb-api";

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  videoGames,
}: {
  videoGames: Game[];
}) => {
  return (
    <>
      <Header />
      <Gallery videoGames={videoGames} />
    </>
  );
};

export async function getStaticProps() {
  const videoGames: Game[] = await getGames();

  return { props: { videoGames } };
}

export default Home;
