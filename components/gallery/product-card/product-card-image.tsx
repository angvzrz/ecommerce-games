import Image from 'next/image';
import { useState } from 'react';

const joinClassNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};

interface ProductCardImageProps {
  imageUrl: string;
}

function ProductCardImage({imageUrl}: ProductCardImageProps) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
      <Image
        alt=""
        src={isLoading ? "https://bit.ly/placeholder-img" : "https:" + imageUrl}
        layout="fill"
        objectFit="cover"
        className={joinClassNames(
          'group-hover:opacity-75 duration-700 ease-out h-64 ml-auto mr-auto',
          isLoading
            ? 'grayscale blur-2xl scale-110'
            : 'grayscale-0 blur-0 scale-100'
        )}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
}

export { ProductCardImage };
