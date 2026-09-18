function Home({onNavigation}) {
  return (
    <section className="hero">
      <h1>Discover Your Next Favorite Movie</h1>

      <p>
        Explore movies and TV shows, check ratings, and find something
        interesting to watch.
      </p>

      <button onClick={()=>onNavigation("movies")}>
        Explore Movies
        </button>
    </section>
  );
}

export default Home;
