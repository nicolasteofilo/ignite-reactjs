import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../store";
import { ICartItem } from "../../store/modules/cart/types";

import { addProductToCartRequest, removeProductToCart, removeOneQuantityInItem } from "../../store/modules/cart/actions";
import { useCallback } from "react";
import { Container, ProductTable, Total } from "./styles";

import { MdDelete, MdRemoveCircleOutline, MdAddCircleOutline } from "react-icons/md";

export function Cart() {
  const cart = useSelector<IState, ICartItem[]>((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleAddProductToCart = useCallback((product) => {
    dispatch(addProductToCartRequest(product))
  }, [dispatch]);

  const handleRemoveProductToCart = useCallback(
    (item, index) => {
      dispatch(removeProductToCart(item, index));
    },
    [dispatch]
  );

  const handleRemoveOneQuanyityToCart = useCallback(
    (item, index) => {
      dispatch(removeOneQuantityInItem(item, index));
    },
    [dispatch]
  );

  return (
    <>
      <Container>
        <ProductTable>
          <thead>
            <tr>
              <th>PRODUTO</th>
              <th>QTD</th>
              <th>SUBTOTAL</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item.product.id}>
                <td>
                  <strong>{item.product.title}</strong>
                  <span>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(item.product.price)}</span>
                </td>
                <td>
                  <div>
                    <button
                      type="button"
                      data-testid="decrement-product"
                      onClick={() => handleRemoveOneQuanyityToCart(item, index)}
                      disabled={item.quantity === 1}
                    >
                      <MdRemoveCircleOutline size={20} />
                    </button>
                    <input
                      type="text"
                      data-testid="product-amount"
                      readOnly
                      value={item.quantity}
                    />
                    <button
                      type="button"
                      data-testid="increment-product"
                      onClick={() => handleAddProductToCart(item.product)}
                    >
                      <MdAddCircleOutline size={20} />
                    </button>
                  </div>
                </td>
                <td>
                  <button
                    type="button"
                    data-testid="remove-product"
                    onClick={() => handleRemoveProductToCart(item, index)}
                  >
                    <MdDelete size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </ProductTable>

        <footer>
          <button type="button">Finalizar pedido</button>
          <Total>
            <span>TOTAL</span>
            <strong>R$10,00</strong>
          </Total>
        </footer>
      </Container>
    </>
  );
}
