import React, { PureComponent } from "react";
import "./RouterWeb.scss";
import { Switch, Route } from "react-router-dom";
import PageLoader from "../../_GENERAL_SUB_COMPONENTS/PageLoader/PageLoader";
import HomePage from "../Homepage/HomePage";
import Navbar from "../../_GENERAL_SUB_COMPONENTS/Navbar/Navbar";
import CategoryPage from "../CategoryPage/CategoryPage";

export default class RouterWeb extends PureComponent {
  state = {
    cartIndicator: [],
  };

  buyBook = (asin) => {
    this.setState({ cartIndicator: [...this.state.cartIndicator, asin] });
  };

  render() {
    return (
      <>
        <Navbar cartIndicator={this.state.cartIndicator.length} />
        <Switch>
          <Route path="/" exact render={(props) => <HomePage {...props} />} />
          <Route
            path="/loader"
            exact
            render={(props) => <PageLoader {...props} />}
          />
          <Route
            path="/category/:category"
            exact
            render={(props) => <CategoryPage {...props} />}
          />
        </Switch>
      </>
    );
  }
}
