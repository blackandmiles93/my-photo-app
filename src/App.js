import React, { Component } from "react";
import Photos from "./components/Photos";
import Header from "./components/Header/Header";
import "./App.css";
import { Card, Grid, Paper, GridList } from "@material-ui/core";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Grid
          style={{
            display: "flex",
            flexDirection: "row",
            flexGrow: 1,
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden"
          }}
          container
          spacing={20}
        >
          <Grid item xs={12} style={{ marginTop: "2em" }}>
            <GridList cellHeight={20}>
              <Photos />
            </GridList>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default App;
