import { createContext } from "react";

function calculateTotalPrice(cartList) {
  return cartList
    .map((item) => item.price * item.quantity)
    .reduce((a, b) => a + b, 0);
}
export const cartInit = {
  cartList: [],
};
export const cartReducer = (state, action) => {
  // #1 先取得當前購物車的目標品項的索引

  const cartList = [...state.cartList];
  const index = cartList.findIndex((item) => item.id === action.payload.id);
  console.log(index);
  //   console.log(action);
  switch (action.type) {
    case "ADD_TO_CART":
      if (index === -1) {
        // 還未加入到購物車內
        cartList.push(action.payload);
      } else if (cartList[index].quantity + action.payload.quantity >= 20) {
        alert("每個餐點最多只能點 20 份");
        cartList[index].quantity = 20;
      } else {
        // 當前購物車的項目與加入的項目一致
        cartList[index].quantity += action.payload.quantity;
      }

      return {
        ...state,
        cartList,
        total: calculateTotalPrice(cartList),
        qty: action.payload.qty,
      };
    case "CHANGE_CART_QUANTITY":
      cartList[index].quantity = action.payload.quantity;
      return {
        ...state,
        cartList,
        total: calculateTotalPrice(cartList),
        qty: action.payload.qty,
      };
    case "REMOVE_CART_ITEM":
      cartList.splice(index, 1);

      return {
        ...state,
        cartList,
        total: calculateTotalPrice(cartList),
        qty: action.payload.qty,
      };
    case "CHANGE_PRODUCT_QUANTITY":
      return {
        ...state,
        cartList,
        total: calculateTotalPrice(cartList),
        qty: action.payload.qty,
      };
    default:
      return state;
  }
};
export const CartContext = createContext({});
