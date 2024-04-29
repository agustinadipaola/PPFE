import "./App.css";
import Home from "./components/Home";
import Projects from "./components/projects/Projects";
import CV from "./components/CV";
import PlayMusic from "./components/music/PlayMusic";
import Water from "./components/Water";
import Images from "./components/pictures/Images";
import Notes from "./components/Notes";
import Game from "./components/game/Game";
import CreateBooks from "./components/books/CreateBooks";
import ContactMe from "./components/ContactMe"
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import BookShelf from "./components/books/BookShelf";
import EditBook from "./components/books/EditBook";
import HomeMobile from "./components/HomeMobile";
function App() {
  return (
    <header>
      <Router>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Projects />} path="/projects" />
          <Route element={<CV />} path="/cv" />
          <Route element={<PlayMusic />} path="/playmusic" />
          <Route element={<Water />} path="/water" />
          <Route element={<Notes />} path="/notes" />
          <Route element={<Game />} path="/game" />
          <Route element={<Images />} path="/images" />
          <Route element={<CreateBooks />} path="/book" />
          <Route element={<Home />} path="/home" />
          <Route element={<BookShelf />} path="/book/get" />
          <Route element={<EditBook />} path="/book/update/:id" />
          <Route element={<ContactMe />} path="/contactme" />

          {/* trying to use this as mobile home page */}
          <Route element={<HomeMobile />} path="/mobile" />


        </Routes>
      </Router>
    </header>
  );
}

export default App;
