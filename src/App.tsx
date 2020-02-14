import React, { Component } from "react";
import "./App.css";
import * as math from "mathjs";

import { Iproducts, products } from "./constants";

function printFn(value: number) {
  const precision = 14;
  return Number(math.format(value, precision));
}

class App extends Component {
  state = {
    total: 0,
    buyProList: [
      {
        id: 1,
        name: "Plumpy Nut",
        price: 25.76,
        totalNum: 4690,
        buynum: 2
      }
    ]
  };

  componentDidMount() {
    let { buyProList, total } = this.state;
    total = buyProList
      .map(book => printFn(book.price * book.buynum))
      .reduce((prev, cur) => prev + cur);
    this.setState({
      total
    });
  }

  setproList = (it: Iproducts, type: string) => {
    let { buyProList, total } = this.state;
    let exist = false;

    if (type === "add") {
      if (buyProList.length) {
        buyProList.forEach(item => {
          if (item.id === it.id) {
            item.buynum += 1;
            exist = true;

            products.forEach(item => {
              if (item.id === it.id) {
                item.totalNum -= 1;
              }
            });
          }
        });
        this.setState({
          buyProList
        });
      }

      if (!exist) {
        buyProList = buyProList.concat(Object.assign({}, it, { buynum: 1 }));
        this.setState({
          buyProList
        });
        products.forEach(item => {
          if (item.id === it.id) {
            item.totalNum = item.totalNum - 1;
          }
        });
      }
    }

    if (type === "edd") {
      if (buyProList.length) {
        buyProList.forEach(item => {
          if (item.id === it.id && item.buynum > 1) {
            item.buynum -= 1;
          }
        });
        this.setState({
          buyProList
        });
      }
    }

    total = buyProList
      .map(book => printFn(book.price * book.buynum))
      .reduce((prev, cur) => prev + cur, 0);
    this.setState({
      total
    });
  };

  delItem = (it: Iproducts) => {
    let { buyProList, total } = this.state;
    let newlist = buyProList;

    let index = buyProList.findIndex(item => item.id === it.id);
    newlist.splice(index, 1);

    this.setState({
      buyProList: newlist
    });

    total = buyProList
      .map(book => printFn(book.price * book.buynum))
      .reduce((prev, cur) => prev + cur, 0);
    this.setState({
      total
    });
  };

  render() {
    const proList = products.map((item, index) => {
      return (
        <div className="row tc pro-card" key={index}>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">{item.name}</div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            ${item.price}
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            {item.totalNum}
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <button
              type="button"
              onClick={() => this.setproList(item, "add")}
              className="btn btn-warning"
            >
              Add Car
            </button>
          </div>
        </div>
      );
    });

    const buyList = this.state.buyProList.map((item, index) => {
      return (
        <div className="row tc pro-card" key={index}>
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">{item.name}</div>
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
            ${item.price}
          </div>
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <button
              type="button"
              onClick={() => this.setproList(item, "edd")}
              className="btn btn-default btn-sm btn-num"
            >
              -
            </button>
            <span>{item.buynum}</span>
            <button
              type="button"
              onClick={() => this.setproList(item, "add")}
              className="btn btn-default btn-sm btn-num"
            >
              +
            </button>
          </div>
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
            ${printFn(item.buynum * item.price)}
          </div>
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
            <button
              type="button"
              onClick={() => this.delItem(item)}
              className="btn btn-danger"
            >
              Delete Item
            </button>
          </div>
        </div>
      );
    });

    return (
      <div className="App container-fluid">
        <h1>Welcome to the mxu's shop</h1>

        <div className="row">
          <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
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
              <div className="pro-wrap ">{proList}</div>
            </div>
          </div>
          <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
            <h2>Shopping Cart</h2>
            <div className="list-wrap">
              <div className=" title-top tc">
                <div className="row">
                  <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                    Product Name
                  </div>
                  <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                    Product Price
                  </div>
                  <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    Purchase Quantity
                  </div>
                  <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                    Amount of Money
                  </div>
                  <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                    Action
                  </div>
                </div>
              </div>
              <div className="pro-wrap ">{buyList}</div>
            </div>
            <div className="row">
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                total {this.state.buyProList.length} items selected
              </div>
              <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                Total: ${printFn(this.state.total)}
              </div>
              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
              <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
              <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    );
  }
}

export default App;
