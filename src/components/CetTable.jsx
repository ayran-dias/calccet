import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default function CetTable() {
  return (
    <div>
      <Container>
      <Col>
      <Card
        bg="success"
        style={{ width: "100%" }}
        text="white"
        className="mb-1"
      >
        
        <Card.Header>
        <center>  <h4>  CET FINAL </h4></center>
        </Card.Header>

        <Card.Body className="bgwhite">
          <Table striped bordered hover size="sm" bg="white">
            <tread>
              <tr></tr>
            </tread>

            <tbody>
              <tr>
                <td >
                  <b>Antecipação</b>
                </td>
                <td> 666 % </td>
              </tr>

              <tr>
                <td>
                  <b>Débito</b>
                </td>
                <td> 666 % </td>
              </tr>
              <tr>
                <td>
                  <b>Crédito</b>
                </td>
                <td> 666 % </td>
              </tr>
              <tr>
                <td>
                  <b>2x</b>
                </td>
                <td> 666 % </td>
              </tr>
              <tr>
                <td>
                  <b>3x</b>
                </td>
                <td>666 %</td>
              </tr>
              <tr>
                <td>
                  <b>4x</b>
                </td>
                <td>666 %</td>
              </tr>
              <tr>
                <td>
                  <b>5x</b>
                </td>
                <td>666 %</td>
              </tr>
              <tr>
                <td>
                  <b>6x</b>
                </td>
                <td>666 %</td>
              </tr>
              <tr>
                <td>
                  <b>7x</b>
                </td>
                <td> 666 % </td>
              </tr>
              <tr>
                <td>
                  <b>8x</b>
                </td>
                <td>666 %</td>
              </tr>
              <tr>
                <td>
                  <b>9x</b>
                </td>
                <td>666 %</td>
              </tr>
              <tr>
                <td>
                  <b>10x</b>
                </td>
                <td>666 %</td>
              </tr>
              <tr>
                <td>
                  <b>11x</b>
                </td>
                <td>666 %</td>
              </tr>
              <tr>
                <td>
                  <b>12x</b>
                </td>
                <td>666 %</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
      </Col>
      </Container>
    </div>
  );
}
