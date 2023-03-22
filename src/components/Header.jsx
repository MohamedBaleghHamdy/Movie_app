import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar className="color" expand="lg">
      <Container fluid>
        <Link to="/">
          <img
            style={{ width: 100 }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
            alt=""
          />
        </Link>
        <Navbar.Toggle style={{ background: "white" }} />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link
              to="/movies/popular"
              style={{
                textDecoration: "none",
                marginLeft: 12,
                marginRight: 10,
              }}
            >
              <span>Popular</span>
            </Link>
            <Link
              to="/movies/top_rated"
              style={{ textDecoration: "none", marginRight: 10 }}
            >
              <span>Top Rated</span>
            </Link>
            <Link
              to="/movies/upcoming"
              style={{ textDecoration: "none", marginRight: 10 }}
            >
              <span>Upcoming</span>
            </Link>
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
