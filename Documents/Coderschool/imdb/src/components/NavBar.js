import React from "react";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";
export default function NavBar(props) {
  const handleChange = (e) => {
    e.preventDefault();
  };
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img
          src="/logoImdb.jpeg"
          width="70"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">List Movies</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-light" onChange={handleChange}>
          Search
        </Button>
      </Form>
    </Navbar>
  );
}
