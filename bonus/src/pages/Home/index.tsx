import Catalog from "../../components/Catalog";
import { Cart } from "../../components/Cart";
import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <Catalog />
      <hr />
      <Cart />
    </Container>
  );
}
