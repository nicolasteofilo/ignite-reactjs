import { Reducer } from "redux";
import produce from "immer";
import { ICartState } from "./types";

const INITIAL_STATE: ICartState = {
  items: [],
};

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case "ADD_PRODUCT_TO_CART": {
        const { product } = action.payload;

        const productIndex = draft.items.findIndex(
          (item) => item.product.id === product.id
        );

        if (productIndex >= 0) {
          draft.items[productIndex].quantity += 1;
        } else {
          draft.items.push({ product, quantity: 1 });
        }

        break;
      }
      case "REMOVE_PRODUCT_TO_CART": {
        const { index } = action.payload;
        draft.items.splice(index, 1);
        break;
      }
      case "REMOVE_ONE_QUANTITY_IN_ITEM": {
        const { index } = action.payload;
        draft.items[index].quantity -= 1;
        break;
      }
      default: {
        return draft;
      }
    }
  });
};

export default cart;
