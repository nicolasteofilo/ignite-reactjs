import { render, screen } from "@testing-library/react";
import { mocked } from "ts-jest/utils";
import Home, { getStaticProps } from "../../pages/index";
import { stripe } from "../../services/stripe";

jest.mock("next/router");
jest.mock("next-auth/client", () => {
  return {
    useSession: () => [null, false],
  };
});
jest.mock("../../services/stripe");

describe("Home Page", () => {
  it("renders correctly", () => {
    render(
      <Home
        product={{
          productId: "fake-productId",
          amount: "R$10,00",
        }}
      />
    );

    expect(screen.getByText("por R$10,00 mensal")).toBeInTheDocument();
  });

  it("loads initial data", async () => {
    const retriveStripeMocked = mocked(stripe.prices.retrieve);

    // como a função é assincrona é tenho que usar mockResolvedValue
    retriveStripeMocked.mockResolvedValue({
      id: "fake-price-id",
      unit_amount: 1000,
    } as any);

    const response = await getStaticProps({});

    expect(response).toEqual(
      // um objeto contento
      expect.objectContaining({
        props: { product: { amount: "R$\xa010,00", id: "fake-price-id" } },
      })
    );
  });
});
