import { render } from '@testing-library/react';
import { ActiveLink } from '.';

jest.mock('next/dist/client/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/'
      }
    }
  }
})

describe('ActiveLink Component', () => {
  // verificar se o meu active link tá renderizando da forma correta
  test('renders correctly', () => {
    const { getByText } = render(
      <ActiveLink
        href="/"
        activeClassName="active"
      >
        <a>Home</a>
      </ActiveLink>
    )
  
    // experado -> procurar um texte "Home" que esteja no documento testado
    expect(getByText('Home')).toBeInTheDocument()
  })
  
  // verificar se o meu active link está recebendo a classe active
  test('adds active class if the link as current active', () => {
    const { getByText } = render(
      <ActiveLink
        href="/"
        activeClassName="active"
      >
        <a>Home</a>
      </ActiveLink>
    )
  
    // experado -> eu espero que o texto "Home" tenha a classe "active"
    expect(getByText('Home')).toHaveClass('active')
  })
})
