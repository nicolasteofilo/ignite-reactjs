import React, { useMemo } from "react";
import { ProductItem } from "./ProductItem";

type Product = {
  id: number;
  price: number;
  priceFormatted: string | number;
  title: string;
};

interface SearchResultProps {
  results: Product[];
  totalPrice: number;
  addToWishList: (id: number) => void;
}

function SearchResult({
  results,
  totalPrice,
  addToWishList,
}: SearchResultProps) {
  return (
    <div>
      {totalPrice > 0 && <h2>{totalPrice}</h2>}

      {results.map((product) => {
        return (
          <ProductItem
            addToWishList={addToWishList}
            product={product}
            key={product.id}
          />
        );
      })}
    </div>
  );
}

export { SearchResult };
