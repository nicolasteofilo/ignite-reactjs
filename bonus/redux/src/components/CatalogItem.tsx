import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../store/modules/cart/actions";
import { IProduct } from "../store/modules/cart/types";

type ICatalogItemProps = {
  product: IProduct;
}

export function CatalogItem({ product }: ICatalogItemProps) {
  const dispatch = useDispatch();

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCart(product))
  }, [dispatch, product]);

  return (
    <article onClick={() => console.log(product)}>
      <strong>{product.title}</strong> {" - "}
      <span>{product.price}</span>
      {" - "}
      <button type="button" onClick={handleAddProductToCart}>
        Comprar
      </button>
    </article>
  );
}
