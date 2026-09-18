import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

function Movies({ onDetails }) {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search.trim() === "") {
      fetch("https://api.tvmaze.com/shows")
        .then((res) => res.json())
        .then((data) => setMovies(data));

      return;
    }

    fetch(`https://api.tvmaze.com/search/shows?q=${search}`)
      .then((res) => res.json())
      .then((data) => {
        const shows = data.map((item) => item.show);
        setMovies(shows);
      });
  }, [search]);

  return (
    <section className="movies-page">
      <h1 className="title">Movies & TV Shows</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onDetails={onDetails}
          />
        ))}
      </div>
    </section>
  );
}

export default Movies;