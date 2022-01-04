import { all, takeLatest, select } from 'redux-saga/effects';
import { IState } from '../..';
import { addProductToCart } from './actions';

type CheckProductStockRequest = ReturnType<typeof addProductToCart>

function* checkProductStock({ payload }: CheckProductStockRequest) { 
  const { product } = payload;
  const currentQuantity: number = yield select((state: IState) => {
    // procuro um item que o iid do item é igual ao ID do produto da aciotn
    return state.cart.items.find(item => item.product.id === product.id)?.quantity ?? 0;
  })

  console.log('currentQuantity', currentQuantity);

  console.log('checkProductStock', payload);
}

export default all([
  takeLatest('ADD_PRODUCT_TO_CART', checkProductStock)
])