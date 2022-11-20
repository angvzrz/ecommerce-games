import { getGames } from '@service/igdb-api';
import { ProductCardDetails } from './product-card-details';
import { ProductCardImage } from './product-card-image';

interface ProductCardProps {
  imageUrl: string;
  videoGameTitle: string;
  videoGamePrice?: number;
}

function ProductCard({
  imageUrl,
  videoGameTitle,
  videoGamePrice,
}: ProductCardProps) {
  
  return (
    <div>
      <a href="" className="group">
        <ProductCardImage />
        <ProductCardDetails />
      </a>
    </div>
  );
}

export { ProductCard };
