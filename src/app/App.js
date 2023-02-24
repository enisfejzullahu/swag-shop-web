import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import Product from "../product/product";
import Wishlist from "../wishlist/wishlist";

import HttpService from "../services/http-service";

const http = new HttpService();

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await http.getProducts();
      setProducts(data);
    };

    loadData();
  }, []);

  const productList = () => {
    const list = products.map((product) => {
      return (
        <div className="col-sm-4" key={product._id}>
          <Product
            title={product.title}
            price={product.price}
            imgUrl={product.imgUrl}
          />
        </div>
      );
    });

    return list;
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container-fluid App-main">
          <div className="row">
            <div className="col-sm-8">
              <div className="row">{productList()}</div>
            </div>
            <div className="col-sm-4">
              <Wishlist />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
