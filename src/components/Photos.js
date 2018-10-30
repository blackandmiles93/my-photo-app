import React, { Component } from "react";
import config from "../config";

class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: "Photo List",
      photos: []
    };
  }

  componentDidMount() {
    fetch(
      `https://api.unsplash.com/search/photos?client_id=${
        process.env.REACT_APP_UAKEY
      }&page=1&query=cars`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data.results);
        let photos = data.results.map(picture => {
          return (
            <div key={picture.id}>
              <img src={picture.urls.thumb} alt="car" />
            </div>
          );
        });
        this.setState({ photos: photos });
        console.log("state", this.state.photos);
      });
  }

  render() {
    const { heading, photos } = this.state;
    return (
      <div>
        <h1>{heading}</h1>
        <ul>
          <li style={{ listStyle: "none" }}>{photos}</li>
        </ul>
      </div>
    );
  }
}

export default Photos;
