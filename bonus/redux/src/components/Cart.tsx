import { useSelector } from "react-redux";
import { IState } from "../store";
import { ICartItem, IProduct } from "../store/modules/cart/types";

export function Cart() {
  const cart = useSelector<IState, ICartItem[]>((state) => state.cart.items);
  console.log(cart);

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
        {cart.map((item) => (
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
          </tr>
        ))}
      </tbody>
    </table>
  );
}
