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
  const hdUrl = imageUrl.replace('thumb', '1080p');

  return (
    <div>
      <a href="" className="group">
        <ProductCardImage imageUrl={hdUrl} />
        <ProductCardDetails videoGameTitle={videoGameTitle} />
      </a>
    </div>
  );
}

export { ProductCard };
