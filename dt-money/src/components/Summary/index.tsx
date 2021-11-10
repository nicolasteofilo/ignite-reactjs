import incomeImg from '../../assets/images/income.svg'
import outcomeImg from '../../assets/images/outcome.svg'
import totalImg from '../../assets/images/total.svg'

import { Container } from './styles'


export default function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="entradas" />
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="entradas" />
        </header>
        <strong>- R$500,00</strong>
      </div>
      <div className="highlight-backgroud">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="entradas" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  )
}
