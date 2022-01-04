import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import api from "../services/api";
import { addProductToCart } from "../store/modules/cart/actions";
import { IProduct } from "../store/modules/cart/types";
import { MdAddShoppingCart } from "react-icons/md";

import { ProductList } from "./styles";

const Catalog: React.FC = () => {
  const [catalog, setCatalog] = useState<IProduct[]>([]);

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
      dispatch(addProductToCart(product));
    },
    [dispatch]
  );

  return (
    <>
      <ProductList>
      {catalog.map(product => (
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
      ))}
    </ProductList>
    </>
  );
};

export default Catalog;
