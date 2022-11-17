import { InferGetStaticPropsType } from 'next';
import { getGames } from '@service/igdb-api';
import { Game } from '@type/types';
import type { NextPage } from 'next';
import { Gallery } from '@component/gallery/gallery';

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({videoGames}: {videoGames: Game[]}) => { 
  
  return (
    <>
      <Gallery videoGames={videoGames}/>
    </>
  );
};

export async function getStaticProps() {
  const videoGames = await getGames();

  return { props: { videoGames } };
}


export default Home;
