import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  deleteButton: (item) => {},
  deletAll: (items) => {},
});

export default CartContext;
