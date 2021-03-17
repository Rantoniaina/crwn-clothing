import React, { useContext } from "react";
import CustomButton from "../CustomButton/CustomButton";
import "./CartDropdown.styles.scss";
import CartItem from "../CartItem/CartItem";
import { withRouter } from "react-router-dom";
import { CartContext } from "../../providers/cart/Cart.provider";

const CartDropdown = ({ history }) => {
  const { cartItems, toggleHidden } = useContext(CartContext);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          toggleHidden();
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

export default withRouter(CartDropdown);
