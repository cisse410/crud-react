import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";


import ListProduct from "./compnents/product/list.component";
import CreateProduct from "./compnents/product/create.component";


function App() {
  return (
    <Router>
      <Navbar bg="primary">
        <Container>
          <Link className="navbar-brand text-white">
            Application CRUD de gestion de produits
          </Link>
        </Container>
      </Navbar>
      <Container className="mt-5">
        <Row>
          <Col md={12}>
            <Routes>
              <Route exact path="/" element={<ListProduct/>}/>
              <Route path="product/create" element={<CreateProduct/>}/>
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
