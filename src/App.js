import React, { Component } from "react";

import "./commonResources/css/styles.css";
import "./commonResources/css/bootstrap.css";
// import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Body from "./components/Body";

class App extends Component {
  render() {
    return (
      <div>
        {/* Header Section */}
        <Header />
        {/* Body Section */}
        <Body />
        {/* Footer Section */}
        <Footer />
      </div>
    );
  }
}

export default App;
