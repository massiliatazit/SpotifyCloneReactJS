import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import ArtistPage from "./components/ArtistPage";
import AlbumPage from "./components/AlbumPage";

class App extends React.Component {
  state = {
    song: {},
    image: "",
  };
  selectedSong = (selected, image) => {
    this.setState({ song: selected });
    this.setState({ image: image });
  };
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Route path="/" exact component={HomePage} />
        <Route
          path="/artist/:id"
          render={(props) => <ArtistPage {...props} />}
        />
        <Route
          path="/album/:id"
          render={(props) => (
            <AlbumPage selectedSong={this.selectedSong} {...props} />
          )}
        />
        <Footer song={this.state.song} image={this.state.image} />
      </BrowserRouter>
    );
  }
}

export default App;