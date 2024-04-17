import "./App.css";
import Home from "./components/Home";
import Projects from "./components/Projects";
import CV from "./components/CV";
import PlayMusic from "./components/PlayMusic";
import Water from "./components/Water";
import Images from "./components/Images";
import Notes from "./components/Notes";
import Manifest from "./components/Manifest";
import Game from "./components/Game";
import Books from "./components/Books";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <header>
      <Router>
        <a href="https://github.com/agustinadipaola">
          <Button
            variant="light"
            style={{
              position: "absolute",
              bottom: "-3%", // Adjust as needed
              right: "43%", // Adjust as needed
              backgroundColor: "#ffffff00",
              color: "#ffffff00",
              borderColor: "#ffffff00",
            }}
          >
            GITHUB
          </Button>
        </a>
        <Link to="/projects">
          <Button
            variant="light"
            style={{
              position: "absolute",
              bottom: "18%", // Adjust as needed
              right: "30%", // Adjust as needed
              padding: "100px",
              paddingLeft: "160px",
              paddingRight: "160px",
              backgroundColor: "#ffffff00",
              color: "#ffffff00",
              borderColor: "#ffffff00",
            }}
          >
            PROJECTS
          </Button>
        </Link>

        <Link to="/cv">
          <Button
            variant="light"
            style={{
              position: "absolute",
              bottom: "-20%", // Adjust as needed
              right: "75%", // Adjust as needed
              paddingTop: "85px",
              paddingBottom: "85px",
              paddingRight: "60px",
              paddingLeft: "60px",
      
              transform: "rotate(-20deg)",
              backgroundColor: "#ffffff00",
              color: "#ffffff00",
              borderColor: "#ffffff00",
            }}
          >
            CV
          </Button>
        </Link>

        <Link to="/playmusic">
          <Button
            variant="light"
            style={{
              position: "absolute",
              bottom: "40%", // Adjust as needed
              right: "86%", // Adjust as needed
              padding: "20px",
              backgroundColor: "#ffffff00",
              color: "#ffffff00",
              borderColor: "#ffffff00",
            }}
          >
            PLAY MUSIC
          </Button>
        </Link>

        <Link to="/water">
          <Button
            variant="light"
            style={{
              position: "absolute",
              bottom: "-10%", // Adjust as needed
              right: "60%", // Adjust as needed
              padding: "20px",
              transform: "rotate(90deg)",
              backgroundColor: "#ffffff00",
              color: "#ffffff00",
              borderColor: "#ffffff00",
            }}
          >
            WATER{" "}
          </Button>
        </Link>

        <Link to="/game">
          <Button
            variant="light"
            style={{
              position: "absolute",
              bottom: "-25%", // Adjust as needed
              right: "38%", // Adjust as needed
              paddingLeft: "110px",
              paddingRight: "110px",
              paddingTop: "25px",
              paddingBottom: "20px",
              backgroundColor: "#ffffff00",
              color: "#ffffff00",
              borderColor: "#ffffff00",
            }}
          >
            GAME{" "}
          </Button>
        </Link>
        <Link to="/notes">
          <Button
            variant="light"
            style={{
              position: "absolute",
              bottom: "-40%", // Adjust as needed
              right: "15%", // Adjust as needed
              paddingTop: "63px",
              paddingBottom: "63px",
              paddingRight: "60px",
              paddingLeft: "60px",
              transform: "rotate(25deg)",


              backgroundColor: "#ffffff00",
              color: "#ffffff00",
              borderColor: "#ffffff00",
            }}
          >
            NOTES
          </Button>
        </Link>

        <Link to="/images">
          <Button
            variant="light"
            style={{
              position: "absolute",
              bottom: "-3%", // Adjust as needed
              right: "29%", // Adjust as needed
      padding:"13px",


              backgroundColor: "#ffffff00",
              color: "#ffffff00",
              borderColor: "#ffffff00",
            }}
          >
            IMAG
          </Button>
        </Link>

        <Link to="/books">
          <Button
            variant="light"
            style={{
              position: "absolute",
              bottom: "-25px", // Adjust as needed
              right: "20px", // Adjust as needed
               paddingTop: "43px",
              paddingBottom: "43px",
              paddingRight: "100px",
              paddingLeft: "100px",
              transform: "rotate(34deg)",


              backgroundColor: "#ffffff00",
              color: "#ffffff00",
              borderColor: "#ffffff00",
            }}
          >BOOKS
          </Button>
        </Link>
        <Link to="/manifest">
          <Button
            variant="light"
            style={{
              position: "absolute",
              bottom: "300px", // Adjust as needed
              right: "140px", // Adjust as needed
            padding: "35px",


              backgroundColor: "#ffffff00",
              color: "#ffffff00",
              borderColor: "#ffffff00",
            }}
          >manifest
          </Button>
        </Link>

        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Projects />} path="/projects" />
          <Route element={<CV />} path="/cv" />
          <Route element={<PlayMusic />} path="/playmusic" />
          <Route element={<Water />} path="/watertracker" />
          <Route element={<Notes />} path="/notes" />
          <Route element={<Game />} path="/game" />
          <Route element={<Manifest />} path="/manifest" />
          <Route element={<Images />} path="/images" />
          <Route element={<Books />} path="/books" />
        </Routes>
      </Router>
    </header>
  );
}

export default App;
