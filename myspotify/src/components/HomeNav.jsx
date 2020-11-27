import React from "react";
import { Container, ListGroup, Row } from "react-bootstrap";

class HomeNav extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row className="mt-4 align-items-center justify-content-center mb-5">
          <ListGroup horizontal>
            <ListGroup.Item onClick={() => this.props.getGenre("Rock")}>
              Rock
            </ListGroup.Item>
            <ListGroup.Item onClick={() => this.props.getGenre("Pop")}>
              Pop
            </ListGroup.Item>
            <ListGroup.Item onClick={() => this.props.getGenre("Rap")}>
              Rap
            </ListGroup.Item>
            <ListGroup.Item onClick={() => this.props.getGenre("Weeb")}>
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
