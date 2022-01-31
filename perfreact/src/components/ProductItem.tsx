import React, { memo } from 'react';

interface ProductItemProps {
    product: {
        id: number;
        price: number;
        title: string;
    }
}

function ProductItemComponent({ product }: ProductItemProps) {
  return <div>
      {product.title} - <strong>{product.price}</strong>
  </div>;
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
    // Object.is vai comparar o objeto anteriro com o proximo
    // se tiver  informações diverentes ele renderiza novamente o componente
    return Object.is(prevProps.product, nextProps.product)
});

/* 
    useMemo
*/