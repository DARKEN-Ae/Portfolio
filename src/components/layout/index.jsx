import React, { Component, Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";

export class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Outlet />
        <Footer />
      </Fragment>
    );
  }
}

export default Layout;
