import agusmobile from "../images/mobile/wall.png";
import playmusic from "../images/mobile/playmusic.png";
import books from "../images/mobile/books.png";
import contactme from "../images/mobile/contactme.png";
import cv from "../images/mobile/cv.png";
import games from "../images/mobile/game.png";
import images from "../images/mobile/images.png";
import notes from "../images/mobile/notes.png";
import projects from "../images/mobile/projects.png";
import water from "../images/mobile/water.png";
import github from "../images/mobile/github.png";

function HomeMobile() {
  return (
    <div className="page-background">
      <div className="image-container">
        <a href="/projects">
          <img
            src={projects}
            style={{
              maxWidth: "50%",
              maxHeight: "50%",
              objectFit: "contain",
              borderRadius: "20px", // Adjust the radius as needed
              padding: "10px",
            }}
          />
        </a>
        <a href="/contactme">
          <img
            src={contactme}
            style={{
              maxWidth: "30%",
              maxHeight: "30%",
              objectFit: "contain",
              borderRadius: "20px", // Adjust the radius as needed
              padding: "10px",
            }}
          />
        <a href="/images">
          <img
            src={images}
            style={{
              maxWidth: "30%",
              maxHeight: "30%",
              objectFit: "contain",
              borderRadius: "20px", // Adjust the radius as needed
              padding: "10px",
            }}
          />{" "}
        </a>
        
        </a>
        <a href="/book">
          <img
            src={books}
            style={{
              maxWidth: "25%",
              maxHeight: "25%",
              objectFit: "contain",
              borderRadius: "20px", // Adjust the radius as needed
              padding: "10px",
            }}
          />
        </a>
        
        <a href="/water">
          <img
            src={water}
            style={{
              maxWidth: "20%",
              maxHeight: "20%",
              objectFit: "contain",
              borderRadius: "20px", // Adjust the radius as needed
              padding: "10px",
            }}
          />{" "}
        </a>
        <a href="/playmusic">
          <img
            src={playmusic}
            style={{
              maxWidth: "30%",
              maxHeight: "30%",
              objectFit: "contain",
              borderRadius: "20px", // Adjust the radius as needed
              padding: "10px",
            }}
          />
        </a>
        <a href="/cv">
          <img
            src={cv}
            style={{
              maxWidth: "30%",
              maxHeight: "30%",
              objectFit: "contain",
              borderRadius: "20px", // Adjust the radius as needed
              padding: "10px",
            }}
          />
        </a>
       
        <a href="https://github.com/iamagustinadipaola">
          {" "}
          <img
            src={github}
            style={{
              maxWidth: "30%",
              maxHeight: "30%",
              objectFit: "contain",
              borderRadius: "20px", // Adjust the radius as needed
              padding: "10px",
            }}
          />
        </a>
        <a href="/notes">
          <img
            src={notes}
            style={{
              maxWidth: "30%",
              maxHeight: "30%",
              objectFit: "contain",
              borderRadius: "20px", // Adjust the radius as needed
              padding: "10px",
            }}
          />
          
        </a>
        <a href="/game">
          <img
            src={games}
            style={{
              maxWidth: "30%",
              maxHeight: "30%",
              objectFit: "contain",
              borderRadius: "20px", // Adjust the radius as needed
              padding: "10px",
            }}
          />
        </a>
        

      </div>
    </div>
  );
}

export default HomeMobile;
