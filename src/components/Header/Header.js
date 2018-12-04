import {
  AppBar,
  Typography,
  Toolbar,
  IconButton,
  withStyles
} from "@material-ui/core";

import React from "react";

const styles = {
  root: {
    flexGrow: 1
  }
};

function Header(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">Photos</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(Header);
