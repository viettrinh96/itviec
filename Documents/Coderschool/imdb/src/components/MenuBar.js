import React from "react";
import { ListGroup, Button } from "react-bootstrap";
export default function MenuBar(props) {
  console.log(props.itemList);
  return (
    <div className="change-menu-bar mt-2">
      <ListGroup>
        <ListGroup.Item>Most Popular</ListGroup.Item>
        <ListGroup.Item>New</ListGroup.Item>
        <ListGroup.Item>Highest Grossing</ListGroup.Item>
        <ListGroup.Item>Actor</ListGroup.Item>
        <ListGroup.Item>Genres</ListGroup.Item>
      </ListGroup>
      <div className="mt-4">
        {" "}
        {/* <h2>Total: {props.itemList.results.length}</h2> */}
      </div>
      {/* <div className="change-group-button">
        <Button variant="outline-light" className="mr-2 mb-2 change-button">
          Left
        </Button>
        <Button variant="outline-light" className="mr-2 mb-2 change-button">
          Left
        </Button>
        <Button variant="outline-light" className="mr-2 mb-2 change-button">
          Left
        </Button>
        <Button variant="outline-light" className="mr-2 mb-2 change-button">
          Left
        </Button>
        <Button variant="outline-light" className="mr-2 mb-2 change-button">
          Left
        </Button>
        <Button variant="outline-light" className="mr-2 mb-2 change-button">
          Left
        </Button>
        <Button variant="outline-light" className="mr-2 mb-2 change-button">
          Left
        </Button>
        <Button variant="outline-light" className="mr-2 mb-2 change-button">
          Left
        </Button>
      </div> */}
    </div>
  );
}
