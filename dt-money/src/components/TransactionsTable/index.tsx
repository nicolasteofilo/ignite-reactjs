import React from "react";

import { Container } from "./styles";

export const TransactionsTable: React.FC = () => {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw" >R$1.100</td>
            <td>Casa</td>
            <td>20/01/2021</td>
          </tr>
          <tr>
            <td>Dev website</td>
            <td className="deposit" >R$12.000</td>
            <td>Dev</td>
            <td>20/01/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};
