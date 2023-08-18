import { useContext } from "react";

import CartIcon from "./Cart/CartIcon";
import CartContext from "../store/Cart-Context";
import classes from "./HeaderCart.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberCartItems = items.reduce((curnum, item) => {
    return curnum + item.amount;
  }, 0);

  console.log(numberCartItems);
  console.log(items);
  return (
    <button onClick={props.onClick}>
      <span className="relative ">
        <CartIcon />
      </span>
      <span className={classes["header-cart-button"]}>{numberCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
