import React, { memo } from "react";
import { BsBookmarkStar } from "react-icons/bs";

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    priceFormatted: string | number;
    title: string;
  };
  addToWishList: (id: number) => void;
}

function ProductItemComponent({ product, addToWishList}: ProductItemProps) {
  return (
    <div>
      <p onClick={() => addToWishList(product.id)}>
        {product.title} - <strong>{product.priceFormatted}</strong>
      </p>
    </div>
  );
}

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    // Object.is vai comparar o objeto anteriro com o proximo
    // se tiver  informações diverentes ele renderiza novamente o componente
    return Object.is(prevProps.product, nextProps.product);
  }
);

/* 
    useMemo
*/
