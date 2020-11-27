import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./AlbumPage.css";

class AlbumPage extends React.Component {
  state = {
    tracklist: [],
    album: {},
  };

  componentDidMount = () => {
    this.fetchTracklist();
    console.log("hi");
  };

  fetchTracklist = async () => {
    try {
      let response = await fetch(
        `https://deezerdevs-deezer.p.rapidapi.com/album/${this.props.match.params.id}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "d938424d19msh26a8bb5ffd76d0cp140c40jsn8f1265a474bc",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          },
        }
      );
      let parsedResponse = await response.json();
      console.log(parsedResponse);
      this.setState({ tracklist: parsedResponse.tracks.data });
      this.setState({ album: parsedResponse });
      console.log(this.state.tracklist);
      console.log(this.state.album);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    if (this.state.album) {
      return (
        <Container fluid className="d-flex">
          <Row>
            <Col xs={12} lg={4}>
              <Container className="d-flex flex-column mt-5">
                <Row className="mx-auto">
                  <img
                    className="img-fluid"
                    src={this.state.album.cover_xl}
                    alt="album cover"
                  />
                </Row>
                <Row className="text-center d-flex justify-content-center">
                  <h1 className="generalHeading">{this.state.album.title}</h1>
                </Row>
                <Row className="text-center d-flex justify-content-center">
                  <span className="text-muted artist">
                    {this.state.album.title}
                  </span>
                </Row>
                <Row className="d-flex justify-content-center mt-3">
                  <button id="playbtn" className="btn-play">
                    PLAY
                  </button>
                </Row>
                <Row className="d-flex text-center justify-content-center mt-2 albumLength">
                  <span class="text-muted">
                    {this.state.album.release_date} •{" "}
                    {this.state.album.nb_tracks} SONGS
                  </span>
                </Row>
              </Container>
            </Col>
            <Col xs={12} lg={8} id="songList">
              <Container className="d-flex flex-column mt-5 here">
                <Row className="d-flex justify-content-between">
                  {this.state.tracklist.map((song) => (
                    <Row
                      className="copy"
                      onClick={() =>
                        this.props.selectedSong(song, this.state.album.cover_xl)
                      }
                    >
                      <Col className="d-flex flex-column">
                        <h5>{song.title}</h5>
                        <h6>{song.artist.name}</h6>
                      </Col>
                      <div className="songLength">{song.duration}</div>
                    </Row>
                  ))}
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      );
    }
  }
}

export default AlbumPage;
