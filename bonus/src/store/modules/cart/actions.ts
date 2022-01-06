import { ICartItem, IProduct } from "./types";

// Actions
export function addProductToCartRequest(product: IProduct) {
  return {
    type: "ADD_PRODUCT_TO_CART_REQUEST",
    payload: { product },
  };
}

export function addProductToCartSuccess(product: IProduct) {
  return {
    type: "ADD_PRODUCT_TO_CART_SUCCESS",
    payload: { product },
  };
}

export function addProductToCartFailure(productId: number) {
  return {
    type: "ADD_PRODUCT_TO_CART_FAILURE",
    payload: { productId },
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
