import React from "react";
import { Form, FormControl, Button } from "react-bootstrap";

export default function SearchBar() {
  return (
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  );
}
