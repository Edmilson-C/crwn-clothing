import React, { useContext } from "react";
// import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import { CartContext } from "../../providers/cart/cart.provider";

// import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors";

import "./checkout.styles.scss";

const CheckoutPage = () => {
  const { cartItems, cartTotal } = useContext(CartContext)

  return (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span> Product </span>
      </div>
      <div className="header-block">
        <span> Description </span>
      </div>
      <div className="header-block">
        <span> Quantity </span>
      </div>
      <div className="header-block">
        <span> Price </span>
      </div>
      <div className="header-block">
        <span> Remove </span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total"> Total: ${cartTotal} </div>
    <StripeCheckoutButton price={cartTotal} />
  </div>
)}

export default CheckoutPage

// const mapStateToProps = createStructuredSelector({
//   cartItems: selectCartItems,
//   total: selectCartTotal,
// });

// export default connect(mapStateToProps)(CheckoutPage);