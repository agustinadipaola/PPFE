import "./App.css";
import Home from "./components/Home";
import Projects from "./components/projects/Projects";
import CV from "./components/CV";
import PlayMusic from "./components/music/PlayMusic";
import Water from "./components/Water";
import Images from "./components/Images";
import Notes from "./components/Notes";
import Manifest from "./components/manifest/Manifest";
import Game from "./components/Game";
import CreateBooks from "./components/books/CreateBooks";
import ContactMe from "./components/ContactMe";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import BookShelf from "./components/books/BookShelf";
import EditBook from "./components/books/EditBook";
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
          <Route element={<Manifest />} path="/manifest" />
          <Route element={<Images />} path="/images" />
          <Route element={<CreateBooks />} path="/book" />
          <Route element={<ContactMe />} path="/contactme" />
          <Route element={<Home />} path="/home" />
          <Route element={<BookShelf />} path="/book/get" />
          <Route element={<EditBook />} path="/book/update/:id" />

        </Routes>
      </Router>
    </header>
  );
}

export default App;
