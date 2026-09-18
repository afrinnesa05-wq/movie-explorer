function Navbar({ onNavigate }) {
  return (
    <nav className="navbar">
      <h2>Movie Explorer</h2>

      <div className="nav-links">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onNavigate("home");
          }}
        >
          Home
        </a>

        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onNavigate("movies");
          }}
        >
          Movies
        </a>
      </div>
    </nav>
  );
}

export default Navbar;