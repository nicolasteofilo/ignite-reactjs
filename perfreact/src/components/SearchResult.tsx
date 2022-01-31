import React, { useMemo } from "react";
import { List, ListRowRenderer } from "react-virtualized";
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
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem addToWishList={addToWishList} product={results[index]} />
      </div>
    );
  };

  return (
    <div>
      {totalPrice > 0 && <h2>{totalPrice}</h2>}

      <List
        height={300}
        rowHeight={30}
        width={900}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRenderer}
      />

      {/* {results.map((product) => {
        return (
          <ProductItem
            addToWishList={addToWishList}
            product={product}
            key={product.id}
          />
        );
      })} */}
    </div>
  );
}

export { SearchResult };
