import React, { memo, useState } from "react";
import { AddProdductWishList } from './AddProdductWishList'
import dynamic from "next/dynamic";
import { BsBookmarkStar } from "react-icons/bs";
// import AddProdductWishList from "./AddProdductWishList";

const AddProdductWishList = dynamic<AddProdductWishList>(() => {
  return import("./AddProdductWishList").then(mod => mod.AddProdductWishList);
}, {
  loading: () => <span>Carregado...</span>
});

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    priceFormatted: string | number;
    title: string;
  };
  addToWishList: (id: number) => void;
}

function ProductItemComponent({ product, addToWishList }: ProductItemProps) {
  const [isAddingToWishList, setIsAddingToWishList] = useState(false);

  return (
    <div>
      <p onClick={() => addToWishList(product.id)}>
        {product.title} - <strong>{product.priceFormatted}</strong>
      </p>
      <button onClick={() => setIsAddingToWishList(true)}>
        Adicionar aos favoritos
      </button>

      {isAddingToWishList && (
        <AddProdductWishList
          onAddProdductWishList={() => addToWishList(product.id)}
          onRequestClose={() => setIsAddingToWishList(false)}
        />
      )}
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
