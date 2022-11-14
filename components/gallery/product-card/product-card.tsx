import { getGames } from '@service/igdb-api';
import { ProductCardDetails } from './product-card-details';
import { ProductCardImage } from './product-card-image';

interface ProductCardProps {
  image: string;
  videoGameTitle: string;
  videoGamePrice: number;
}

function ProductCard({
  image,
  videoGameTitle,
  videoGamePrice,
}: ProductCardProps) {
  getGames().then(data => console.log(data));
  
  return (
    <div className="max-w-sm md:h-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2 ">
      <a href="" className="group">
        <ProductCardImage />
        <ProductCardDetails />
      </a>
    </div>
  );
}

export { ProductCard };
