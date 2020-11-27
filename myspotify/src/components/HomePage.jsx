import React from "react";

import HomeBody from "./HomeBody";
import { Container } from "react-bootstrap";

class HomePage extends React.Component {
  state = {
    genre: "jazz",
  };
  fetchGenre = (selectedGenre) => {
    this.setState({ genre: selectedGenre });
  };
  render() {
    return (
      <Container fluid id="mainBody">
        <HomeBody genre={this.state.genre} />
      </Container>
    );
  }
}

export default HomePage;
