import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Footer from "./components/Footer";
import DetailsModal from "./components/DetailsModal";

function App() {
  const [page, setPage] = useState("home");
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div className="app">
      <Navbar onNavigate={setPage} />

      {page === "home" && <Home onNavigation={setPage} />}

      {page === "movies" && (
        <Movies onDetails={setSelectedMovie} />
      )}

      {selectedMovie && (
        <DetailsModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;