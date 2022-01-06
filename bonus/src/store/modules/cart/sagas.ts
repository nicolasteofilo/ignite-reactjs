import { AxiosResponse } from "axios";
import { all, takeLatest, select, call, put } from "redux-saga/effects";
import { IState } from "../..";
import api from "../../../services/api";
import { addProductToCartFailure, addProductToCartRequest, addProductToCartSuccess } from "./actions";

type CheckProductStockRequest = ReturnType<typeof addProductToCartRequest>;

interface IStockResponse {
  id: number;
  quantity: number;
}

function* checkProductStock({ payload }: CheckProductStockRequest) {
  const { product } = payload;
  const currentQuantity: number = yield select((state: IState) => {
    // procuro um item que o iid do item é igual ao ID do produto da aciotn
    return (
      state.cart.items.find((item) => item.product.id === product.id)
        ?.quantity ?? 0
    );
  });

  console.log('currentQuantity', currentQuantity);
  

  // @ts-ignore
  const availabelStockResponse: AxiosResponse<IStockResponse> = yield call(api.get, `stock/${product.id}`);

  if (availabelStockResponse.data.quantity > currentQuantity) {
    console.log('addProductToCartSuccess');
    yield put(addProductToCartSuccess(product));
  } else {
    console.log('addProductToCartFailure');
    yield put(addProductToCartFailure(product.id));
  }
}

export default all([
  takeLatest("ADD_PRODUCT_TO_CART_REQUEST", checkProductStock),
]);
