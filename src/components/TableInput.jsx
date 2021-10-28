import InputMask from "react-input-mask";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import React, { Component } from "react";
import Table from "react-bootstrap/Table";

class TableInput extends Component {
  constructor() {
    super();
    this.state = {
      debVisa: [],
      credVisa: [],
      c2a6visa: [],
      c7a12visa: [],
      antecipa: [],
    };
  }

  get_debVisa = (e) => {
    const debVisa = e.target.value;
    parseFloat(this.setState({ debVisa })).toFixed(2);
  };

  get_credVisa = (e) => {
    const credVisa = e.target.value;
    parseFloat(this.setState({ credVisa })).toFixed(2);
  };

  get_c2a6visa = (e) => {
    const c2a6visa = e.target.value;
    parseFloat(this.setState({ c2a6visa })).toFixed(2);
  };

  get_c7a12visa = (e) => {
    const c7a12visa = e.target.value;
    parseFloat(this.setState({ c7a12visa })).toFixed(2);
  };

  get_antecipa = (e) => {
    const antecipa = e.target.value;
    parseFloat(this.setState({ antecipa })).toFixed(2);
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
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
                  <div className="center">
                    <center>
                      <InputMask
                        className="Input22"
                        mask="09.99"
                        placeholder="Débito"
                        onChange={this.get_debVisa}
                      />

                      <InputMask
                        className="Input22"
                        mask="09.99"
                        placeholder="Crédito"
                        onChange={this.get_credVisa}
                      />

                      <InputMask
                        className="Input22"
                        mask="09.99"
                        placeholder="2x a 6x"
                        onChange={this.get_c2a6visa}
                      />

                      <InputMask
                        className="Input22"
                        mask="09.99"
                        placeholder="7x a 12x"
                        onChange={this.get_c7a12visa}
                      />

                      <InputMask
                        className="Input22"
                        mask="09.99"
                        placeholder="Antecipação"
                        onChange={this.get_antecipa}
                      />
                    </center>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card
                bg="success"
                style={{ width: "100%" }}
                text="white"
                className="mb-1"
              >
                <Card.Header>
                  <center>
                    {" "}
                    <h4> CET FINAL </h4>
                  </center>
                </Card.Header>

                <Card.Body className="bgwhite">
                  <Table striped bordered hover size="sm" bg="white">
                    <tread>
                      <tr></tr>
                    </tread>

                    <tbody>
                      <tr>
                        <td>
                          <b>Débito</b>
                        </td>
                        <td>{((this.state.debVisa)*1).toFixed(2)} % </td>
                      </tr>

                      <tr>
                        <td>
                          <b>Crédito</b>
                        </td>
                        <td>
                          {(
                          1 -
                            (
                              (1 - (this.state.credVisa)) * //mdr
                              (1 - (this.state.antecipa) * 
                              ((1 + 1) 
                              / 2)
                              )
                              )
                           ).toFixed(2) }
                          %
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <b>2x</b>
                        </td>
                        <td>
                        {(
                          1 -
                            ((1 - (this.state.c2a6visa)) *
                              (1 - (this.state.antecipa) * 
                              ((1 + 2) 
                              / 2)))
                           ).toFixed(2) }
                          %
                          </td>
                      </tr>
                      <tr>
                        <td>
                          <b>3x</b>
                        </td>
                        <td>
                        {(
                          1 -
                            ((1 - (this.state.c2a6visa)) *
                              (1 - (this.state.antecipa) * 
                              ((1 + 3) 
                              / 2)))
                           ).toFixed(2) }
                          %
                          </td>
                      </tr>
                      <tr>
                        <td>
                          <b>4x</b>
                        </td>
                        <td>
                        {(
                          1 -
                            ((1 - (this.state.c2a6visa)) *
                              (1 - (this.state.antecipa) * 
                              ((1 + 4) 
                              / 2)))
                           ).toFixed(2) }
                          %
                          </td>
                      </tr>
                      <tr>
                        <td>
                          <b>5x</b>
                        </td>
                        <td>
                        {(
                          1 -
                            ((1 - (this.state.c2a6visa)) *
                              (1 - (this.state.antecipa) * 
                              ((1 + 5) 
                              / 2)))
                           ).toFixed(2) }
                          %
                          </td>
                      </tr>
                      <tr>
                        <td>
                          <b>6x</b>
                        </td>
                        <td>
                        {(
                          1 -
                            ((1 - (this.state.c2a6visa)) *
                              (1 - (this.state.antecipa) * 
                              ((1 + 6) 
                              / 2)))
                           ).toFixed(2) }
                          %
                          </td>
                      </tr>
                      <tr>
                        <td>
                          <b>7x</b>
                        </td>
                        <td>
                        {(
                          1 -
                            ((1 - (this.state.c7a12visa)) *
                              (1 - (this.state.antecipa) * 
                              ((1 + 7) 
                              / 2)))
                           ).toFixed(2) }
                          %
                          </td>
                      </tr>
                      <tr>
                        <td>
                          <b>8x</b>
                        </td>
                        <td>
                        {(
                          1 -
                            ((1 - (this.state.c7a12visa)) *
                              (1 - (this.state.antecipa) * 
                              ((1 + 8) 
                              / 2)))
                           ).toFixed(2) }
                          %
                          </td>
                      </tr>
                      <tr>
                        <td>
                          <b>9x</b>
                        </td>
                        <td>
                        {(
                          1 -
                            ((1 - (this.state.c7a12visa)) *
                              (1 - (this.state.antecipa) * 
                              ((1 + 9) 
                              / 2)))
                           ).toFixed(2) }
                          %
                          </td>
                      </tr>
                      <tr>
                        <td>
                          <b>10x</b>
                        </td>
                        <td>
                        {(
                          1 -
                            ((1 - (this.state.c7a12visa)) *
                              (1 - (this.state.antecipa) * 
                              ((1 + 10) 
                              / 2)))
                           ).toFixed(2) }
                          %
                          </td>
                      </tr>
                      <tr>
                        <td>
                          <b>11x</b>
                        </td>
                        <td>
                        {(
                          1 -
                            ((1 - (this.state.c7a12visa)) *
                              (1 - (this.state.antecipa) * 
                              ((1 + 11) 
                              / 2)))
                           ).toFixed(2) }
                          %
                          </td>
                      </tr>
                      <tr>
                        <td>
                          <b>12x</b>
                        </td>
                        <td>
                        {(
                          1 -
                            ((1 - (this.state.c7a12visa)) *
                              (1 - (this.state.antecipa) * 
                              ((1 + 12) 
                              / 2)))
                           ).toFixed(2) }
                          %
                          </td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default TableInput;
