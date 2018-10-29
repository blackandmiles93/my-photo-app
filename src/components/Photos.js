import React, { Component } from "react";
import config from "../config";

class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: "Photo List",
      photos: []
    };
    console.log(config);
  }

  componentDidMount() {
    fetch(
      `https://api.unsplash.com/search/photos?client_id=${
        process.env.REACT_APP_UAKEY
      }&page=1&query=cars`
    )
      .then(res => res.json())
      .then(data => {
        let photos = data.results.map(picture => {
          return (
            <div key={picture.id}>
              <img src={picture.urls.small} alt="car" />
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
          <li>{photos}</li>
        </ul>
      </div>
    );
  }
}

export default Photos;
