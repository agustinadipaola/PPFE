import Card from "react-bootstrap/Card";
import ProInc1 from "../../images/paistina/Paistina.PNG";
import PCreateItem from "../../images/paistina/PaistinaCreateItem.PNG";
import PCreateAcc from "../../images/paistina/PaistinaCreateAcc.PNG";
import PAddItem from "../../images/paistina/PaistinaAddItem.PNG";
import PAddToCart from "../../images/paistina/PaistinaAddToCart.PNG";
import PCheckOut from "../../images/paistina/PaistinaCheckOut.PNG";
import ProInc2 from "../../images/bcs/BigCartSaver.PNG";
import BCSCreateItem from "../../images/bcs/BCSCreateItem.PNG";
import BCSWelcomeAdmin from "../../images/bcs/BCSWelcomeAdmin.PNG";
import BCSItems from "../../images/bcs/BCSItems.PNG";
import BCSLogIn from "../../images/bcs/BCSLogIn.PNG";
import BCSShopItems from "../../images/bcs/BCSShopItems.PNG";
import BCSCheckOut from "../../images/bcs/BCSItemCheckout.PNG";
import Rose from "../../images/rose/Rose.PNG";
import RoseAdd from "../../images/rose/RoseAdd.PNG";
import RoseBuy from "../../images/rose/RoseBuy.PNG";
import RoseBuyers from "../../images/rose/RoseBuyers.PNG";
import RoseLet from "../../images/rose/RoseLet.PNG";
import { FaHome} from "react-icons/fa";
import { Link } from "react-router-dom";

import Carousel from "react-bootstrap/Carousel";

function Projects() {
  return (
    <>
         <Link className="right-link nav-link" to="/">
        <FaHome size={30} />
      </Link>
      {/* for font style porpuses, I use  &lt; and &gt; that represent >< */}
      <h1
        style={{
          fontFamily: "handwritting",
          textAlign: "center",
          fontSize: "80px",
        }}
      >
        projects
      </h1>{" "}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {" "}
        <Card
          className="col-sm-6 col-md-6 col-lg-6"
          style={{ textAlign: "center", backgroundColor: "beige"
        }}
        >
          <Card.Text>
            The primary objective of this open-source project was to enhance the
            provided open-source code by integrating additional features and
            improvements, aligning with evolving user requirements and industry
            standards
            <br />
            <br />
          </Card.Text>
          <Carousel interval={null}>
            <Carousel.Item>
              <Card.Img variant="bottom" src={ProInc2} sizes={10} />
            </Carousel.Item>
            <Carousel.Item>
              <Card.Img variant="bottom" src={BCSWelcomeAdmin} sizes={10} />
            </Carousel.Item>
            <Carousel.Item>
              <Card.Img variant="bottom" src={BCSCreateItem} sizes={10} />
            </Carousel.Item>
            <Carousel.Item>
              <Card.Img variant="bottom" src={BCSItems} sizes={10} />
            </Carousel.Item>
            <Carousel.Item>
              <Card.Img variant="bottom" src={BCSLogIn} sizes={10} />
            </Carousel.Item>
            <Carousel.Item>
              <Card.Img variant="bottom" src={BCSShopItems} sizes={10} />
            </Carousel.Item>
            <Carousel.Item>
              <Card.Img variant="bottom" src={BCSCheckOut} sizes={10} />
            </Carousel.Item>
          </Carousel>

          <Card.Body></Card.Body>
        </Card>
        <Card
          className="col-sm-6 col-md-6 col-lg-6 "
          style={{ textAlign: "center", backgroundColor: "beige"
        }}
        >
          <Card.Text>
            The primary objective of this software coding project was to
            modernize an existing legacy Java-based application by introducing a
            contemporary tech stack, specifically utilizing Spring for the
            backend, React for the frontend, and other complementary frontend
            technologies.
          </Card.Text>

          <Carousel interval={null}>
            <Carousel.Item>
              <Card.Img variant="bottom" src={ProInc1} sizes={10} />
            </Carousel.Item>
            <Carousel.Item>
              <Card.Img variant="bottom" src={PCreateAcc} sizes={10} />
            </Carousel.Item>
            <Carousel.Item>
              <Card.Img variant="bottom" src={PCreateItem} sizes={10} />
            </Carousel.Item>
            <Carousel.Item>
              <Card.Img variant="bottom" src={PAddItem} sizes={10} />
            </Carousel.Item>
            <Carousel.Item>
              <Card.Img variant="bottom" src={PAddToCart} sizes={10} />
            </Carousel.Item>
            <Carousel.Item>
              <Card.Img variant="bottom" src={PCheckOut} sizes={10} />
            </Carousel.Item>
          </Carousel>

          <Card.Body></Card.Body>
          <br />
        </Card>
        <Card
          className="col-sm-6 col-md-6 col-lg-6"
          style={{ textAlign: "center", backgroundColor: "beige"
        }}
        >
          <Card.Text>
            The primary objective of this software coding project was to
            create a front-end application for a real estate agent, making sure to add, remove and fliter properties and buers.
            This project also included a booking section for properties to let and to sale. 
         
          </Card.Text>

          <Carousel interval={null}>
            <Carousel.Item>
              <Card.Img variant="bottom" src={Rose} sizes={10} />
            </Carousel.Item>
            <Carousel.Item>
              <Card.Img variant="bottom" src={RoseAdd} sizes={10} />
            </Carousel.Item>
            <Carousel.Item>
              <Card.Img variant="bottom" src={RoseBuy} sizes={10} />
            </Carousel.Item>
            <Carousel.Item>
              <Card.Img variant="bottom" src={RoseBuyers} sizes={10} />
            </Carousel.Item>
            <Carousel.Item>
              <Card.Img variant="bottom" src={RoseLet} sizes={10} />
            </Carousel.Item>
          </Carousel>

          <Card.Body></Card.Body>
          <br />
        </Card>
      </div>
    </>
  );
}

export default Projects;
