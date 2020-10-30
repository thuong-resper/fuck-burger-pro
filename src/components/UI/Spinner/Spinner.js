import CircularProgress from "@material-ui/core/CircularProgress";
import React from "react";
import classes from "./Spinner.module.css";

const spinner = () => (
  <div className={classes.Spinner}>
    <div className={classes.SpinnerCenter}>
      <CircularProgress className={classes.CircularProgress} />
    </div>
  </div>
);

export default spinner;
