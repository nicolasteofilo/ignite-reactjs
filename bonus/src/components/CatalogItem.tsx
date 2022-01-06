import { useCallback } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../store";
import { addProductToCartRequest } from "../store/modules/cart/actions";
import { IProduct } from "../store/modules/cart/types";

type ICatalogItemProps = {
  product: IProduct;
}

export function CatalogItem({ product }: ICatalogItemProps) {
  const dispatch = useDispatch();

  const hasFalidedStockCheck = useSelector<IState, boolean>(state => {
    return state.cart.falideStockCheck.includes(product.id);
  })

  const handleAddProductToCart = useCallback((product) => {
    dispatch(addProductToCartRequest(product))
  }, [dispatch, product]);

  return (
      <li key={product.id} >
          <strong>{product.title}</strong>
          <span>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(product.price)}</span>
          <button
            type="button"
            data-testid="add-product-button"
            onClick={() => handleAddProductToCart(product)}
          >
            <div data-testid="cart-product-quantity">
              <MdAddShoppingCart size={16} color="#FFF" />
            </div>
  
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
  );
}
