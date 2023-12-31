import React, { Component } from "react";
import "../product/product.css";
import DataService from "../services/data-service";

let ds = new DataService();
class Product extends Component {
  onButtonClicked = () => {
    ds.addWishlistItem(this.props.product);
  };

  render() {
    return (
      <div className="card product">
        <img
          className="card-img-top"
          src={this.props.product.imgUrl}
          alt="Product"
        ></img>
        <div className="card-block">
          <h4 className="card-title">{this.props.product.title}</h4>
          <p className="card-text">Price: ${this.props.product.price}</p>
          <a
            href="#"
            onClick={() => this.onButtonClicked()}
            className="btn btn-primary"
          >
            Add to Wishlist
          </a>
        </div>
      </div>
    );
  }
}

export default Product;
