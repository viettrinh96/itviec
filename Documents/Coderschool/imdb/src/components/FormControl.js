import React from "react";
import { Form } from "react-bootstrap";

export default function DropdownBar(props) {
  const handleClick = (e) => {
    if (e.target.value === "Most Popular") {
      props.setSortBy(true);
    } else if (e.target.value === "Least Popular") {
      props.setSortBy(false);
    }
  };
  return (
    <Form.Control as="select" defaultValue="Most Popular" onClick={handleClick}>
      <option>Most Popular</option>
      <option>Least Popular</option>
    </Form.Control>
  );
}
