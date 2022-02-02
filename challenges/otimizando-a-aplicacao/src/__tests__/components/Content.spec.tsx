import { render, screen } from "@testing-library/react";
import { Content } from "../../components/Content";

const movies = [
  {
    Genre_id: 1,
    Title: "Underdog",
    Year: "2007",
    Rated: "PG",
    Released: "03 Aug 2007",
    Runtime: "84 min",
    Genre: "Action, Adventure, Comedy, Family, Fantasy, Sci-Fi",
    Director: "Frederik Du Chau",
    Writer:
      "Adam Rifkin (screenplay), Joe Piscatella (screenplay), Craig A. Williams (screenplay), Joe Piscatella (story), Craig A. Williams (story), Adam Rifkin (story), W. Watts Biggers (television series)",
    Actors: "Jason Lee, Peter Dinklage, Jim Belushi, Patrick Warburton",
    Plot: "A Beagle must use his newly-bestowed superpowers to defend Capitol City from mad scientist Simon Barsinister.",
    Language: "English",
    Country: "USA",
    Awards: "3 nominations.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTk5NjkyNzEwOV5BMl5BanBnXkFtZTcwODc5NDI1MQ@@._V1_SX300.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "10/10",
      },
      {
        Source: "Rotten Tomatoes",
        Value: "16%",
      },
      {
        Source: "Metacritic",
        Value: "37/100",
      },
    ],
    Metascore: "37",
    imdbRating: "4.7",
    imdbVotes: "19,729",
    imdbID: "tt0467110",
    Type: "movie",
    DVD: "08 Jul 2016",
    BoxOffice: "$43,760,605",
    Production: "Spyglass Entertainment",
    Website: "N/A",
    Response: "True",
  },
];

describe("Content Component", () => {
  it("render correctly", () => {
    render(
      <Content
        movies={movies}
        selectedGenre={{
          id: 1,
          name: "action",
          title: "Ação",
        }}
      />
    );
    screen.logTestingPlaygroundURL();
    expect(screen.getByText("Ação")).toBeInTheDocument();
  });
});
