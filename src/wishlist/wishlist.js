import React, { Component } from "react";
import "../wishlist/wishlist.css";
import DataService from "../services/data-service";
import NotificationService, {NOTIF_WISHLIST_CHANGED} from "../services/notification-service";

import ProductCondensed from "../productCondensed/productCondensed"
import Product from "../product/product";

let ns = new NotificationService;
class Wishlist extends Component {

  state = {
    wishlist: [
      {
        title: "Real Madrid Ball",
        price: "9.99",
        id: "akakfdkhf"
      },
      {
        title: "Real Madrid T-Shirt",
        price: "9.99",
        id: "akakfhadkhf"
      },
    ]
  }

  componentDidMount() {
    ns.addObserver(NOTIF_WISHLIST_CHANGED, this, this.onWishlistChanged)
  }

  componentWillUnmount() {
    ns.removeObserver(this, NOTIF_WISHLIST_CHANGED);
  }

  onWishlistChanged(newWishList) {
     this.setState({wishList: newWishList})
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
