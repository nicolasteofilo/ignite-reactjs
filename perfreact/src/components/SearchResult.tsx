import React from 'react';
import ProductItem from './ProductItem';

type Product = {
    id: number;
    price: number;
    title: string;
}

interface SearchResultProps {
    results: Product[];
} 

function SearchResult({ results }: SearchResultProps) {
  return (
      <div>
          {results.map(product => {
              return (
                  <ProductItem product={product} key={product.id} />
              )
          })}
      </div>
  );
}

export { SearchResult };
