import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../services/api";
import { addProductToCartRequest } from "../store/modules/cart/actions";
import { IProduct } from "../store/modules/cart/types";
import { MdAddShoppingCart } from "react-icons/md";

import { ProductList } from "./styles";
import { IState } from "../store";

const Catalog: React.FC = () => {
  const [catalog, setCatalog] = useState<IProduct[]>([]);
  const [idProduct, setTdProduct] = useState<number>(0);

  useEffect(() => {
    api
      .get("products")
      .then((response) => {
        setCatalog(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const dispatch = useDispatch();

  const handleAddProductToCart = useCallback(
    (product) => {
      dispatch(addProductToCartRequest(product));
    },
    [dispatch]
  );

    console.log('id', idProduct)

  function onClickAddToCart(product: IProduct) {
    handleAddProductToCart(product);
    setTdProduct(product.id);
  }

  const hasFalidedStockCheck = useSelector<IState, boolean>(state => {
    return state.cart.falideStockCheck.includes(idProduct);
  })

  return (
    <>
      <ProductList>
        {catalog.map((product) => (
          <li key={product.id}>
            <strong>{product.title}</strong>
            <span>
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(product.price)}
            </span>
            <button
              type="button"
              data-testid="add-product-button"
              onClick={() => onClickAddToCart(product)}
            >
              <div data-testid="cart-product-quantity">
                <MdAddShoppingCart size={16} color="#FFF" />
              </div>

              <span>ADICIONAR AO CARRINHO</span>
            </button>
            { hasFalidedStockCheck && <span style={{color: 'red'}} >Falta de Estoque</span> }
          </li>
        ))}
      </ProductList>
    </>
  );
};

export default Catalog;
