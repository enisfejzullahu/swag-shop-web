import React, { Component } from "react";
import "../wishlist/wishlist.css";
import DataService from "../services/data-service";

import ProductCondensed from "../productCondensed/productCondensed"

class Wishlist extends Component {

  state = {
    wishlist: [
      {
        title: "RMA Hoodie",
        price: 19.99,
        _id: "ajaja123"
      },
      {
        title: "iPhone Case",
        price: 9.99,
        _id: "ajbaa123"
      },
      {
        title: "Baloon",
        price: 0.99,
        _id: "baaja12"
      },
    ]
  }

  createWishList = () => {
    const list = this.state.wishlist.map((product) => (
      <ProductCondensed product={product} key={product._id} />
    ))

    return(list);
  }


  render() {
    return (
      <div className="card wishlist">
        <div className="card-block">
          <h4 className="card-title">Wish List</h4>
          <ul className="list-group">
            {this.createWishList()}
          </ul>
        </div>
      </div>
    );
  }
}

export default Wishlist;
