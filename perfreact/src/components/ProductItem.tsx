import React, { memo } from "react";
import { BsBookmarkStar } from 'react-icons/bs'

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    title: string;
  };
  addToWishList: any;
}

function ProductItemComponent({ product, addToWishList }: ProductItemProps) {
  return (
    <div>
      <p>
        {product.title} - <strong>{product.price}</strong>
        <BsBookmarkStar onClick={() => addToWishList(product.id)} style={{
            cursor: 'pointer',
            marginLeft: '10px'
        }} />
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
