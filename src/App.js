import React, { Component,Fragment } from "react";


import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Provider } from "./Context/Context";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Laptops from "./Components/Laptops";
import About from "./Components/About";
import LaptopCart from "./Components/LaptopCart";
import LaptopDetails from "./Components/LaptopDetails";

function App() {
  return (
    <Provider>
      <div className="App">
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Fragment>
                <Header />
                <Laptops />
              </Fragment>
            )}
          />
          <Route path="/about" component={About} />
          <Route path="/cart" component={LaptopCart} />
          <Route path="/laptop/details/:_id" component={LaptopDetails} />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
