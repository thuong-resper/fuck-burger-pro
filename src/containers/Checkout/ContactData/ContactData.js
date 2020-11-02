import { Card, Grid, TextField, Typography } from "@material-ui/core";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.css";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
    loading: false,
  };

  orderHandler = (e) => {
    e.preventDefault();
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Max",
        address: {
          street: "Tests 1",
          zipCode: "5555",
          country: "Germany",
        },
        email: "test@test.com",
      },
      deliveryMethod: "fastest",
    };
    axios
      .post("/orders.json", order)
      .then((res) => {
        console.log("ContactData -> orderHandler -> res", res);
        this.setState({ loading: true });
        this.props.history.push("/");
      })
      .catch((err) => this.setState({ loading: false }));
  };

  render() {
    let form = (
      <form>
        <TextField
          className={classes.TextField}
          type="text"
          name="name"
          placeholder="Your Name"
        />
        <TextField
          className={classes.TextField}
          type="text"
          name="email"
          placeholder="Your Email"
        />
        <TextField
          className={classes.TextField}
          type="text"
          name="street"
          placeholder="Street"
        />
        <TextField
          className={classes.TextField}
          type="text"
          name="postal"
          placeholder="Postal Code"
        />
        <Grid>
          <Button btnType="Success" clicked={this.orderHandler}>
            ORDER
          </Button>
        </Grid>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <Card className={classes.ContactData}>
        <Typography variant="h5" component="h2">
          Enter Your Contact Data
        </Typography>
        {form}
      </Card>
    );
  }
}

export default ContactData;
