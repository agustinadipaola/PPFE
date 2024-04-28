import "bootstrap/dist/css/bootstrap.css";
import agus from "../images/agus.png";
import Button from 'react-bootstrap/Button';
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
function Home() {
  return (
    <div>
 

        <img src={agus}
                style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                />
                 <a href="https://github.com/iamagustinadipaola">
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

        <Link to="/book/get">
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
        <Link to="/contactme">
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
          >contactme
          </Button>
        </Link>
       


    </div>
  );
}

export default Home;