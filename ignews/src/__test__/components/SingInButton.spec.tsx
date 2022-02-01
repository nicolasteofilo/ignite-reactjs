import { render, screen } from '@testing-library/react';
import { mocked } from 'ts-jest/utils';

import { useSession } from 'next-auth/client'
import { SingInButton } from '../../components/SingInButton';

jest.mock('next-auth/client')

describe('SingInButton Component', () => {
  // verificar se o meu header tá renderizando da forma correta
  it('renders correctly when user is not authenticated', () => {
    const useSessionMocked = mocked(useSession);

    // ele vai mockar somente o próximo retorno com o "mockReturnValueOnce", então somente dentro deste deste ele vai deixar o user como deslogado
    useSessionMocked.mockReturnValueOnce([null, false])

    render(
      <SingInButton />
    )
  
    // experado -> procurar um texte "Login com GitHub" que esteja no documento testado
    expect(screen.getByText('Login com GitHub')).toBeInTheDocument()
  })

  it('renders correctly when user is authenticated', () => {
    const useSessionMocked = mocked(useSession);

    useSessionMocked.mockReturnValueOnce([{
      user: {
        name: 'Jonh Doe',
        email: 'jonhdoe@gmail.com',
        image: 'https://jonhdoe.com/image'
      },
      expires: 'fake-expires'
    }, false])

    render(
      <SingInButton />
    )
  
    // experado -> procurar um texte "Login com GitHub" que esteja no documento testado
    expect(screen.getByText('Jonh Doe')).toBeInTheDocument()
  })
})