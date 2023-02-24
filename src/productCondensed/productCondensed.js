import React, { Component } from "react";
import "../productCondensed/product-condensed.css";

class ProductCondensed extends Component {
  render() {
    return (
      <li className="list-group-item pc-condensed">
        <p>
          {this.props.product.title} | <b>${this.props.product.price}</b>
        </p>
        <a className="btn btn-outline-danger">Remove from Wishlist</a>
      </li>
    );
  }
}

export default ProductCondensed;
