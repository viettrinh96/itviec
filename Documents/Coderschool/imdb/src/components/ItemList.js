import React from "react";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import Moment from "react-moment";
export default function ItemList(props) {
  const img_src = `https://image.tmdb.org/t/p/original`;
  console.log(props.itemList.results);
  return (
    <div className="change-items ml-4">
      {props.sortBy ? (
        <Row>
          {typeof props.itemList.results === typeof [] ? (
            props.itemList.results.map((item) => (
              <Col xs={4} className="mb-4">
                {" "}
                <Card style={({ width: "18rem" }, { height: "42rem" })}>
                  <Card.Img
                    variant="top"
                    src={img_src.concat(item.backdrop_path)}
                  />
                  <Card.Body>
                    <Card.Title>{item.original_title}</Card.Title>

                    {item.overview.length <= 250 ? (
                      <Card.Text>{item.overview}</Card.Text>
                    ) : (
                      <Card.Text>
                        {item.overview.slice(0, 199).concat("...")}
                      </Card.Text>
                    )}
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>
                      Ratings: {item.vote_average} from {item.vote_count} votes
                    </ListGroupItem>
                    <ListGroupItem>Popularity: {item.popularity}</ListGroupItem>
                    <ListGroupItem>Release Date: March 18, 2021</ListGroupItem>
                    <ListGroupItem>
                      Created: {""}
                      <Moment fromNow>{item.release_date}</Moment>
                    </ListGroupItem>
                  </ListGroup>
                  <Card.Body className="d-flex justify-content-center">
                    <Button variant="outline-info">
                      View Detail
                      {/* <Card.Link href="#"></Card.Link> */}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <div></div>
          )}
        </Row>
      ) : (
        <Row>
          {typeof props.itemList.results === typeof [] ? (
            [...props.itemList.results].reverse().map((item) => (
              <Col xs={4} className="mb-4">
                {" "}
                <Card style={({ width: "18rem" }, { height: "42rem" })}>
                  <Card.Img
                    variant="top"
                    src={img_src.concat(item.backdrop_path)}
                  />
                  <Card.Body>
                    <Card.Title>{item.original_title}</Card.Title>

                    {item.overview.length <= 250 ? (
                      <Card.Text>{item.overview}</Card.Text>
                    ) : (
                      <Card.Text>
                        {item.overview.slice(0, 199).concat("...")}
                      </Card.Text>
                    )}
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>
                      Ratings: {item.vote_average} from {item.vote_count} votes
                    </ListGroupItem>
                    <ListGroupItem>Popularity: {item.popularity}</ListGroupItem>
                    <ListGroupItem>Release Date: March 18, 2021</ListGroupItem>
                    <ListGroupItem>
                      Created: {""}
                      <Moment fromNow>{item.release_date}</Moment>
                    </ListGroupItem>
                  </ListGroup>
                  <Card.Body className="d-flex justify-content-center">
                    <Button variant="outline-info">
                      View Detail
                      {/* <Card.Link href="#"></Card.Link> */}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <div></div>
          )}
        </Row>
      )}
    </div>
  );
}
