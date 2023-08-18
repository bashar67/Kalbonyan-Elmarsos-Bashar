import { useReducer, useEffect } from "react";

import CartContext from "./Cart-Context";

const getLocalStorageData = () => {
  let newCarData = localStorage.getItem("cart");
  if (newCarData === null) {
    return [];
  } else {
    return JSON.parse(newCarData);
  }
};

const getLocalStorageTotal = () => {
  let newCarTotal = +localStorage.getItem("total");
  if (newCarTotal === null) {
    return 0;
  } else {
    return +JSON.parse(newCarTotal);
  }
};

const defaultCartState = {
  // items: [],
  items: getLocalStorageData(),
  // totalAmount: 0,
  totalAmount: getLocalStorageTotal(),
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "DELET_BUTTON_CLICKED") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount =
      state.totalAmount - existingItem.price * existingItem.amount;
    let updatedItems;

    updatedItems = state.items.filter((item) => item.id !== action.id);

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "DELET_ALL") {
    let updatedItems;

    updatedItems = [];

    return {
      items: updatedItems,
      totalAmount: 0,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", id: id });
  };

  const DeleteButtonHandler = (id) => {
    dispatchCartAction({ type: "DELET_BUTTON_CLICKED", id: id });
  };
  const DeleteAllHandler = (id) => {
    dispatchCartAction({ type: "DELET_ALL", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    deleteButton: DeleteButtonHandler,
    deletAll: DeleteAllHandler,
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartState.items));
    localStorage.setItem("total", JSON.stringify(cartState.totalAmount));
  }, [cartState.items, cartState.totalAmount]);

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
