function MovieCard({ movie, onDetails }) {
  return (
    <div className="movie-card">
      <img src={movie.image?.medium} alt={movie.name} />

      <h2>{movie.name}</h2>

      <p>⭐ {movie.rating?.average || "N/A"}</p>

      <p>
        📅 {movie.premiered ? movie.premiered.slice(0, 4) : "N/A"}
      </p>

      <button onClick={() => onDetails(movie)}>
        See Details
      </button>
    </div>
  );
}

export default MovieCard;