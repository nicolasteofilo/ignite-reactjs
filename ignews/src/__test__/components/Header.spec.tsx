import { render, screen } from '@testing-library/react';
import { Header } from '../../components/Header';

jest.mock('next/dist/client/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/'
      }
    }
  }
})

jest.mock('next-auth/client', () => {
  return {
    useSession() {
      return [null, false]
    }
  }
})

describe('Header Component', () => {
  // verificar se o meu header tá renderizando da forma correta
  it('renders correctly', () => {
    render(
      <Header />
    )

    // experado -> procurar um texte "Home" que esteja no documento testado
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Posts')).toBeInTheDocument()
  })
})