import React, { useState } from "react";
import InputMask from "react-input-mask";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default function TableInput() {
  const [debVisa, setdebVisa] = useState(0);
  const [credVisa, setcredVisa] = useState(0);
  const [c2a6visa, setc2a6visa] = useState(0);
  const [antecipa, setantecipa] = useState(0);
  const [c7a12visa, setc7a12visa] = useState(0);

  return (
    
    <div>
      <Container>
        <Col>
          <Row>
            <Card
              bg="success"
              style={{ width: "100%" }}
              text="white"
              className="mb-1"
            >
              <Card.Header>
                <center>
                  <h4> INSIRA AS TAXAS </h4>
                </center>
              </Card.Header>

              <Card.Body className="bgwhite">
                <InputMask
                  className="Input22"
                  mask="09,99"
                  placeholder="Débito"
                  onChange={(e) => parseInt(setdebVisa(e.target.value))}
                />

                <InputMask
                  className="Input22"
                  mask="09,99"
                  placeholder="Crédito"
                  onChange={(e) => parseInt(setcredVisa(e.target.value))}
                />

                <InputMask
                  className="Input22"
                  mask="09,99"
                  placeholder="2x a 6x"
                  onChange={(e) => parseInt(setc2a6visa(e.target.value))}
                />

                <InputMask
                  className="Input22"
                  mask="09,99"
                  placeholder="7x a 12x"
                  onChange={(e) => parseInt(setc7a12visa(e.target.value))}
                />

                <InputMask
                  className="Input22"
                  mask="09,99"
                  placeholder="Antecipação"
                  onChange={(e) => parseInt(setantecipa(e.target.value))}
                />
              </Card.Body>
            </Card>
          </Row>
        </Col>
      </Container>
    </div>
  );
}
