function DetailsModal({ movie, onClose }) {
  if (!movie) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-button" onClick={onClose}>
          ✕
        </button>

        <img
          src={
            movie.image?.original ||
            movie.image?.medium
          }
          alt={movie.name}
        />

        <h2>{movie.name}</h2>

        <p>
          Rating: {movie.rating?.average || "N/A"}
        </p>

        <p>
          Release:{" "}
          {movie.premiered
            ? movie.premiered.slice(0, 4)
            : "N/A"}
        </p>

        <p>
          Genre:{" "}
          {movie.genres?.length
            ? movie.genres.join(", ")
            : "N/A"}
        </p>

        <h3>Overview</h3>

        <div
          dangerouslySetInnerHTML={{
            __html:
              movie.summary ||
              "No summary available.",
          }}
        />

        <button
          className="close-bottom"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default DetailsModal;