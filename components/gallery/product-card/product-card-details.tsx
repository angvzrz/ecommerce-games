interface ProductCardDetailsProps {
  videoGameTitle: string;
}

function ProductCardDetails({videoGameTitle}: ProductCardDetailsProps) {
  return (
    <div className="p-2">
      <div className=""><h2>Price</h2></div>
      <div className=""><h3>{videoGameTitle}</h3></div>
    </div>
  );
}

export { ProductCardDetails };
