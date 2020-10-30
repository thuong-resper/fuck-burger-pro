import { Grid } from "@material-ui/core";
import React, { Component } from "react";
import Aux from "../../../hoc/Auxiliary/Auxiliary";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  componentWillUpdate() {
    console.log("ds");
  }

  render() {
    let ingredientsSummary = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: "capitalize" }}>{igKey} : </span>
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );
    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients: </p>
        <ul>{ingredientsSummary}</ul>
        <p>
          <strong>Total Price: {this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Grid container direction="row" justify="flex-end" alignItems="center">
          <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
            CANCEL
          </Button>
          <Button btnType="Success" clicked={this.props.purchaseContinued}>
            CONTINUE
          </Button>
        </Grid>
      </Aux>
    );
  }
}

export default OrderSummary;
