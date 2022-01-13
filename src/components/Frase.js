import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import personaje from "../img/personaje.png";

const Frase = () => {
  return (
    <div>
      <Card className="my-5 ">
        <Row className="p-5">
          <Col md={3}>
            <Card.Img src={personaje} className=" w-100" />
          </Col>
          <Col md={9}>
            <Card.Text className="text-center">
              <h5>Jeff</h5>
              <p>
              Increíble poder deductivo, no deberías desperdiciarlo aquí con tantos crímenes sin resolver allá fuera: ¡ve, ve por el bien de la ciudad! 
              </p>
            </Card.Text>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Frase;
