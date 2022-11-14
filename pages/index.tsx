import { InferGetStaticPropsType } from 'next';
import { ProductCard } from '@component/gallery';
import { getGames } from '@service/igdb-api';
import { Game } from '@type/types';
import type { NextPage } from 'next';

interface HomeProps {
  videoGames: Game[];
}

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  videoGames,
}) => {
  return (
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div>
        {/* {videoGames} */}
        <ul>
          {/* {videoGames.map(videoGame => <li key={videoGame.id}>{videoGame.name}</li>)} */}
        </ul>
        {/* <ProductCard image="" videoGameTitle="" videoGamePrice={0} /> */}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const videoGames = await getGames();

  console.log(videoGames);

  return { props: { videoGames } };
}

export default Home;
