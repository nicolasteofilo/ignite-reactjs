import React, { useEffect } from "react";

import { Container } from "./styles";

export const TransactionsTable: React.FC = () => {
  useEffect(() => {
    fetch('http://localhost:3000/api/transactions')
      .then(response => response.json())
      .then(data => console.log(data))
  }, []);

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
