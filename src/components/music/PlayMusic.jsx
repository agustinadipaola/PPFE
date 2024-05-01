import working from "../../images/workinprogress.png"
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function PlayMusic() {
  return ( <div>
    <Link className="right-link nav-link" to="/">
    <FaHome size={30} /> 
  </Link>
  <h1
        style={{
          fontFamily: "handwritting",
          textAlign: "center",
          fontSize: "80px",
        }}
      >
play music      </h1>
    <img
    
    src={working}
    style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
    className="responsive-image"
  />  
  </div> );
}

export default PlayMusic;