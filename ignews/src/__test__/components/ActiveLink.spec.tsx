import { render, screen } from '@testing-library/react';
import { ActiveLink } from '../../components/ActiveLink';

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
  it('renders correctly', () => {
    render(
      <ActiveLink
        href="/"
        activeClassName="active"
      >
        <a>Home</a>
      </ActiveLink>
    )
    
      // experado -> procurar um texte "Home" que esteja no documento testado
      expect(screen.getByText('Home')).toBeInTheDocument()
    })
  
  // verificar se o meu active link está recebendo a classe active
  it('adds active class if the link as current active', () => {
    render(
      <ActiveLink
        href="/"
        activeClassName="active"
      >
        <a>Home</a>
      </ActiveLink>
    )
  
    // experado -> eu espero que o texto "Home" tenha a classe "active"
    expect(screen.getByText('Home')).toHaveClass('active')
  })
})
