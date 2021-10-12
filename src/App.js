import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from  'react-bootstrap/Container';
import Row from  'react-bootstrap/Row';
import Col from  'react-bootstrap/Col';
import Header1 from './components/Header.jsx'; 
import CetTable from "./components/CetTable.jsx";
import TableInput from "./components/TableInput.jsx";


function App() {

  return (
    <>
          <Header1>
          </Header1>
    <Container block> 
    <Row>
<Col>
     <TableInput></TableInput>
     </Col>
     <Col>
     <CetTable></CetTable>
     </Col>
     </Row>
     </Container>
    </> 
  )
}
export default App;

