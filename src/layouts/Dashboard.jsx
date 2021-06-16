import React from "react";
import { Route } from "react-router";
import { ToastContainer } from "react-toastify";
import { Grid } from "semantic-ui-react";
import CartDetail from "../pages/CartDetail";
import ProductDetail from "../pages/ProductDetail";
import ProductList from "../pages/ProductList";
import Categories from "./Categories";

export default function Dashboard() {
  return (
    <div>
        <ToastContainer position = "bottom-right"/>
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
                <Categories/>
            </Grid.Column>
            <Grid.Column width={12}>
                <Route exact path="/" component={ProductList} />
                <Route exact path="/products" component={ProductList} />
                <Route exact path="/products/:name" component={ProductDetail} />
                <Route path="/cart" component={CartDetail} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
    </div>
  );
}
