import { render, screen } from "@testing-library/react";
import { MovieCard } from "../../components/MovieCard";

describe("Movie Card Component", () => {
  it("render correctly", () => {
    render(
      <MovieCard
        title="Teste Filme"
        runtime="100 minutes"
        rating="8/10"
        poster="http://posts.img"
      />
    );

    const titleFilm = screen.getByText("Teste Filme");
    const runtimeFilm = screen.getByText("100 minutes");
    const ratingFilm = screen.getByText("8/10");

    expect(titleFilm).toBeInTheDocument();
    expect(runtimeFilm).toBeInTheDocument();
    expect(ratingFilm).toBeInTheDocument();
  });
});
