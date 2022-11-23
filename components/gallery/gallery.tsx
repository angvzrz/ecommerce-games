import { Game } from '@type/types';
import { ProductCard } from './product-card/product-card';

interface GalleryProps {
  videoGames: Game[];
}

export function Gallery({ videoGames }: GalleryProps) {
  console.log(videoGames);
  
  return (
    <div className="mx-auto py-16 px-8 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {videoGames?.map((videoGame) => {
          return (
            <ProductCard
              key={videoGame.id}
              imageUrl={videoGame.cover.url}
              videoGameTitle={videoGame.name}
            />
          );
        })}
      </div>
    </div>
  );
}
