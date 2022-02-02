import { screen, render } from "@testing-library/react";
import { Button } from "../../components/Button";

describe("Button Component", () => {
  it("render correctly", () => {
    render(<Button title="Comédia" iconName="comedy" selected={true} />);

    const textButton = screen.getByText("Comédia");

    expect(textButton).toBeInTheDocument();
  });
});
