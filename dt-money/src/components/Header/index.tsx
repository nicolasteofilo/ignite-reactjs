import React from "react";

import logoImg from "../../assets/images/logo.svg";
import { Container, Content } from "./style";

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button">Nova transação</button>
      </Content>
    </Container>
  );
}
