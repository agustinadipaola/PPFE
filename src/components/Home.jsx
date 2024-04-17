import "bootstrap/dist/css/bootstrap.css";
import agus from "../images/agus.jpg";
import Button from 'react-bootstrap/Button';

function Home() {
  return (
    <div>

        <img src={agus}
                style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                />


    </div>
  );
}

export default Home;