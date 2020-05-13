import React from "react";
import { Link } from "react-router-dom";
import {
  orderListSelector,
  pinnedListSelector,
} from "../../Redux/products.selectors";
import { connect } from "react-redux";
import OrderItem from "./OrderItem";
import PinnedItem from "./PinnedItem";

const Buscet = ({ order, pinned }) => {
  if (pinned.length > 1) {
    return (
      <div className="d-flex justify-content-center">
        Sorry, you can't add more then 1 pinned item
      </div>
    );
  }

  return (
    <div className="d-flex flex-column align-items-center">
      <h3>Pinned item:</h3>
      <PinnedItem pinnedList={pinned} />
      <h3>Your buscet</h3>
      <OrderItem order={order} />
      <Link className="btn btn-outline-primary" to="/e-shop">
        Back to Catalog
      </Link>
    </div>
  );
};
const mapState = (state) => {
  return {
    order: orderListSelector(state),
    pinned: pinnedListSelector(state),
  };
};
export default connect(mapState)(Buscet);
