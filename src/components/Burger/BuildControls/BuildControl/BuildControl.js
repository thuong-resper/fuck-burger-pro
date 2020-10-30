import { Grid, Typography, withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import React, { Component } from "react";
import { styles } from "./styles";

class BuildControl extends Component {
  render() {
    const { classes, removed, disabled, label, added } = this.props;
    return (
      <Grid
        container
        direction="row"
        alignItems="center"
        className={classes.buildControl}
      >
        <Grid item xs={4} className={classes.paper}>
          <Typography variant="body1" className={classes.label}>
            {label}
          </Typography>
        </Grid>
        <Grid item xs={8} className={classes.buttonGroup}>
          <Button
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={<RemoveIcon />}
            onClick={removed}
            disabled={disabled}
          >
            Less
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<AddIcon />}
            onClick={added}
          >
            More
          </Button>
        </Grid>
      </Grid>

      // <div className={classes.BuildControl}>
      //     <div className={classes.Label}>{label}</div>

      // </div>
    );
  }
}

export default withStyles(styles)(BuildControl);
