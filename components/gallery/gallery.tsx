import { getGames } from '@service/igdb-api';
import { ProductCard } from './product-card/product-card';

function Gallery() {

  return (
    <div>
      <div>
        <ProductCard image='' videoGameTitle='' videoGamePrice={0} />
      </div>
    </div>
  );
}

export { Gallery };
