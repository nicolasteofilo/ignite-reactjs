import React from "react";

export interface AddProdductWishList {
  onAddProdductWishList: () => void;
  onRequestClose: () => void;
}

function AddProdductWishList({
  onAddProdductWishList,
  onRequestClose,
}: AddProdductWishList) {
  return (
    <span>
      Desaja adicionar aos favoritos?
      <button onClick={onAddProdductWishList}>Sim</button>
      <button onClick={onRequestClose}>Não</button>
    </span>
  );
}

export { AddProdductWishList };
