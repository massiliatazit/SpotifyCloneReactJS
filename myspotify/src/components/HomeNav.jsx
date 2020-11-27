import React from "react";
import { Container, ListGroup, Row } from "react-bootstrap";

class HomeNav extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row className="mt-4 align-items-center justify-content-center mb-5">
          <ListGroup horizontal>
            <ListGroup.Item onClick={() => this.props.getGenre("Blues")}>
              Rock
            </ListGroup.Item>
            <ListGroup.Item onClick={() => this.props.getGenre("Disco")}>
              Pop
            </ListGroup.Item>
            <ListGroup.Item onClick={() => this.props.getGenre("Rap")}>
              Rap
            </ListGroup.Item>
            <ListGroup.Item onClick={() => this.props.getGenre("Punk Rock")}>
              Weeb
            </ListGroup.Item>
            <ListGroup.Item onClick={() => this.props.getGenre("Jazz")}>
              Jazz
            </ListGroup.Item>
          </ListGroup>
        </Row>
      </Container>
    );
  }
}

export default HomeNav;
