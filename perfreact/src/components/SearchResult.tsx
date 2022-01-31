import React, { useMemo } from "react";
import { ProductItem } from "./ProductItem";

type Product = {
  id: number;
  price: number;
  title: string;
};

interface SearchResultProps {
  results: Product[];
  addToWishList: any;
}

function SearchResult({ results, addToWishList }: SearchResultProps) {
  const totalPrices = useMemo(() => {
    return results.reduce((acc, product) => {
      return acc + product.price;
    }, 0);
  }, [results]);

  return (
    <div>
      <h2>
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(totalPrices)}
      </h2>

      {results.map((product) => {
        return <ProductItem addToWishList={addToWishList} product={product} key={product.id} />;
      })}
    </div>
  );
}

export { SearchResult };
