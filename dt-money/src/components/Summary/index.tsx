import { useContext } from 'react';
import incomeImg from '../../assets/images/income.svg'
import outcomeImg from '../../assets/images/outcome.svg'
import totalImg from '../../assets/images/total.svg'
import { TransactionsContext } from '../../context/TransactionsContext';

import { Container } from './styles'


export default function Summary() {
  const { transactions } = useContext(TransactionsContext);  
  console.log(transactions);

  const summary = transactions.reduce((accumulator, transaction) => {
    if (transaction.type === 'deposit') {
      accumulator.deposit += transaction.amount
      accumulator.total += transaction.amount
    } else {
      accumulator.withdraws += transaction.amount
      accumulator.total -= transaction.amount
    }

    return accumulator;
  }, {
    deposit: 0,
    withdraws: 0,
    total: 0
  });

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="entradas" />
        </header>
        <strong>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(summary.deposit)}</strong>

      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="entradas" />
        </header>
        <strong>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(summary.withdraws)}</strong>
      </div>
      <div className="highlight-backgroud">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="entradas" />
        </header>
        <strong>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(summary.total)}</strong>
      </div>
    </Container>
  )
}
