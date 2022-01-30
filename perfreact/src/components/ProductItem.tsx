import React from 'react';

interface ProductItemProps {
    product: {
        id: number;
        price: number;
        title: string;
    }
}

function ProductItem({ product }: ProductItemProps) {
  return <div>
      {product.title} - <strong>{product.price}</strong>
  </div>;
}

export default ProductItem;
