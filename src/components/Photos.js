import React, { Component } from "react";
import config from "../config";
import { Card, Typography, Paper, CardMedia } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    display: "flex",
    flexDirection: "row",
    flewGrow: 1
  },
  card: {
    maxWidth: 215
  },
  media: {
    height: 260
  }
};

class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      photos: [],
      styles: this.props.styles
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
        // let photos = data.results.map(picture => {
        //   return (
        //     <li key={picture.id}>
        //       <img src={picture.urls.thumb} alt="car" />
        //     </div>
        //   );
        // });
        this.setState({ photos: data.results });
        console.log("state", this.state.photos);
      })
      .catch(error => {
        this.setState({
          isLoaded: false,
          error
        });
      });
  }

  render() {
    const { error, photos, isLoaded } = this.state;
    const { classes } = this.props;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <React.Fragment>
          {photos.map(photo => (
            <Card style={{ margin: "auto", padding: "5px" }} key={photo.id}>
              <img src={photo.urls.small} alt="cars" />
            </Card>
          ))}
        </React.Fragment>
      );
    }
  }
}

export default Photos;
