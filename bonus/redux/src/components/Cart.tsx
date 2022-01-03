import { useDispatch, useSelector } from "react-redux";
import { IState } from "../store";
import { ICartItem } from "../store/modules/cart/types";

import { CgRemove } from "react-icons/cg";
import { removeProductToCart } from "../store/modules/cart/actions";
import { useCallback } from "react";

export function Cart() {
  const cart = useSelector<IState, ICartItem[]>((state) => state.cart.items);
  const dispatch = useDispatch();

  const style = {
    border: "none",
    fontSize: "1.2rem",
    cursor: "pointer",
  };

  const handleRemoveProductToCart = useCallback(
    (item, index) => {
      dispatch(removeProductToCart(item, index));
    },
    [dispatch]
  );

  return (
    <table>
      <thead>
        <tr>
          <th>Prduto</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((item, index) => (
          <tr key={item.product.id}>
            <td>{item.product.title}</td>
            <td>{new Intl.NumberFormat().format(item.product.price)}</td>
            <td>{item.quantity}</td>
            <td>
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(item.product.price * item.quantity)}
            </td>
            <td>
              <button
                onClick={() => handleRemoveProductToCart(item, index)}
                style={style}
                type="button"
              >
                <CgRemove size={20} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
