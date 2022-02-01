import { render, screen, fireEvent } from "@testing-library/react";
import { signIn, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { mocked } from "ts-jest/utils";
import { SubscribeButton } from "../../components/SubscribeButton";


jest.mock("next-auth/client")
jest.mock("next/router");

describe("SubscribeButton Component", () => {
  it("renders correctly", () => {
    const useSessionMocked = mocked(useSession)

    useSessionMocked.mockReturnValueOnce([null, false])

    render(<SubscribeButton />);

    expect(screen.getByText("Inscreva-se agora")).toBeInTheDocument();
  });

  it("redirects user to sing in when not authenticated", () => {
    const useSessionMocked = mocked(useSession)

    useSessionMocked.mockReturnValueOnce([null, false])

    // mockando a função de singIn
    const singInMocked = mocked(signIn);

    // render element
    render(<SubscribeButton />);

    // buscando o elemento de button
    const subscribeButton = screen.getByText("Inscreva-se agora");

    // clock no subscribeButton
    fireEvent.click(subscribeButton);

    // tenha sido chamado
    expect(singInMocked).toHaveBeenCalled();
  });

  it("redirects to posts when user aready has a susbscription", () => {
    const useSessionMocked = mocked(useSession)
    const useRouterMocked = mocked(useRouter);

    const pushMock = jest.fn()

    useSessionMocked.mockReturnValueOnce([{
      user: {
        name: 'Jonh Doe',
        email: 'jonhdoe@gmail.com',
        image: 'https://jonhdoe.com/image'
      },
      activeSubscription: 'fake-activeSubscription',
      expires: 'fake-expires'
    }, false])

    useRouterMocked.mockReturnValueOnce({
      push: pushMock
    } as any);

    render(<SubscribeButton />);

    const subscribeButton = screen.getByText("Inscreva-se agora");

    fireEvent.click(subscribeButton);

    //quero garantir que a função pushMock foir chamada
    expect(pushMock).toHaveBeenCalledWith('/posts');
  });
});
