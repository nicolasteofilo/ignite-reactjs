import { IProduct } from "../../store/modules/cart/types";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addProductToCartRequest } from "../../store/modules/cart/actions";
import { IState } from "../../store";

import { BuyButton, ListItem, Price, Title } from './styles';

interface CatalogItemProps {
  product: IProduct;
}

export function CatalogItem({ product }: CatalogItemProps) {
  const dispatch = useDispatch();

  const hasFailedStockCheck = useSelector<IState, boolean>(state => {
    return state.cart.failedStockCheck.includes(product.id);
  });

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartRequest(product));
  }, [dispatch, product]);

  return (
    <ListItem>
      <Title>{product.title}</Title>
      <Price>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(product.price)}</Price>
      <BuyButton type="button" onClick={handleAddProductToCart}>
        ADICIONAR AO CARRINHO
      </BuyButton>
      {hasFailedStockCheck && (
        <span style={{ color: "red" }}>Falta de estoque</span>
      )}
    </ListItem>
  );
}
