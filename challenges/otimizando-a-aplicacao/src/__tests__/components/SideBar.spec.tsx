import { render, screen, fireEvent } from "@testing-library/react";
import { SideBar } from "../../components/SideBar";

const genres = [
  {
    id: 1,
    name: "action",
    title: "Ação",
  },
  {
    id: 2,
    name: "comedy",
    title: "Comédia",
  },
];

describe("SideBar Component", () => {
  const onClick = (id: number) => {};
  it("render correctly", () => {
    render(
      <SideBar
        genres={genres as any}
        selectedGenreId={1}
        buttonClickCallback={() => onClick(1)}
      />
    );

    const sideBarElement = screen.getByLabelText("button-genres");

    expect(screen.getByRole("navigation"));
    expect(screen.getByText("Ação")).toBeInTheDocument();
    expect(screen.getByText("Comédia")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /ação/i })).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: /comédia/i,
      })
    ).toBeInTheDocument();
  });
});
