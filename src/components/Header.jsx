import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import React from 'react';

export default function Header1() {
    return(
      <div>
        <Card
        bg="success"
        style={{ width: "100%" }}
        text="white"
        className="mb-1"
      >

        <Card.Body>
          <Card.Title><center>Calculadora De Custo Efetivo Total</center></Card.Title>

          <Card.Text>
          <center> Feito de um Agente para Outro </center>
          </Card.Text>
        </Card.Body>
      </Card>

      </div>
    )
}