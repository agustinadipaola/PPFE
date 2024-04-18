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

import Carousel from "react-bootstrap/Carousel";

function Projects() {
  return (
    <>
      {" "}
      <div style={{ display: "flex" }}>
        <Card
          className="col-sm-6 col-md-4 col-lg-6 m-1"
          style={{ textAlign: "center" }}
        >
          <Card.Text>
            The primary objective of this software coding project was to
            modernize an existing legacy Java-based application by introducing a
            contemporary tech stack, specifically utilizing Spring for the
            backend, React for the frontend, and other complementary frontend
            technologies.
          </Card.Text>

          <Carousel >
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
          className="col-sm-6 col-md-4 col-lg-6 m-1"
          style={{ textAlign: "center" }}
        >
          <Card.Text>
            The primary objective of this open-source project was to enhance the
            provided open-source code by integrating additional features and
            improvements, aligning with evolving user requirements and industry
            standards
            <br />
            <br />
          </Card.Text>
          <Carousel >
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
          </Carousel>

          <Card.Body></Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Projects;
