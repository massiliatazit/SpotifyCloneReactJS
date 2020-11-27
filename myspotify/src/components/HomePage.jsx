import React from "react";
import HomeNav from "./HomeNav";
import HomeBody from "./HomeBody";
import { Container } from "react-bootstrap";

class HomePage extends React.Component {
  state = {
    genre: "rock",
  };
  fetchGenre = (selectedGenre) => {
    this.setState({ genre: selectedGenre });
  };
  render() {
    return (
      <Container fluid id="mainBody">
        <HomeNav getGenre={this.fetchGenre} />
        <HomeBody genre={this.state.genre} />
      </Container>
    );
  }
}

export default HomePage;
