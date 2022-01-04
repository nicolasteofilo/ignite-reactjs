import { ICartItem, IProduct } from "./types";

// Actions
export function addProductToCart(product: IProduct) {
  return {
    type: "ADD_PRODUCT_TO_CART",
    payload: { product },
  };
}

export function removeProductToCart(item: ICartItem, index: number) {
  const payload = { item, index };
  return {
    type: "REMOVE_PRODUCT_TO_CART",
    payload,
  };
}

export function removeOneQuantityInItem(item: ICartItem, index: number) {
  const payload = { item, index };
  return {
    type: "REMOVE_ONE_QUANTITY_IN_ITEM",
    payload,
  };
}

