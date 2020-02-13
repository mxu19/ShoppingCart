import React from "react";
import "./App.css";

import { products } from "./constants";

const App = () => {
  const proList = products.map((item, index) => {
    return (
      <div className="row tc pro-card" key={index}>
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">{item.name}</div>
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">${item.price}</div>
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          {item.totalNum}
        </div>
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <button type="button" className="btn btn-warning">
            Add Car
          </button>
        </div>
      </div>
    );
  });

  return (
    <div className="App container-fluid">
      <h1>Welcome to the mxu's shop</h1>

      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <h2>Products List</h2>

          <div className="list-wrap">
            <div className=" title-top tc">
              <div className="row">
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                  Product Name
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                  Product Price
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                  Products Quantity
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                  Action
                </div>
              </div>
            </div>
            <br />
            <div className="pro-wrap ">{proList}</div>
          </div>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <h2>Shopping Cart</h2>
          <div className="list-wrap">
            <div className=" title-top tc">
              <div className="row">
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                  Product Name
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                  Product Price
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                  Quantity Of Products
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                  Action
                </div>
              </div>
            </div>
            <div className="pro-wrap ">{proList}</div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default App;
