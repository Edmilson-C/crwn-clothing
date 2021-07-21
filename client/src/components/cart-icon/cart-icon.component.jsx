import React, { useContext }from "react";
import { connect } from "react-redux";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import CartContext from "../../contexts/cart/cart.context";

// import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import "./cart-icon.styles.scss";

const CartIcon = ({ itemCount }) => {
  const { toggleHidden } = useContext(CartContext)
 
  return(
  <div className="cart-icon" onClick={toggleHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count"> {itemCount} </span>
  </div>
)}

// const mapDispatchToProps = (dispatch) => ({
//   toggleCartHidden: () => dispatch(toggleCartHidden()),
// });

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

export default connect(mapStateToProps)(CartIcon);
