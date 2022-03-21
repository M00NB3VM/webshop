import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartState } from "../stores/cart/atom";
import { cartStatus } from "../stores/cart/selectors";
import "./cart.css";

function Cart() {
  const [cart, setCart] = useRecoilState(cartState);
  const { totalSum } = useRecoilValue(cartStatus);

  function increaseItem(item) {
    const inCart = cart.find((obj) => obj.id === item.id);
    const currentStock = item.stock;
    const currentQty = item.quantity;
    const currentPrice = item.price;
    const singleProductPrice = currentPrice / currentQty;

    if (currentStock === 0) {
      return;
    } else {
      setCart(
        cart.map((i) =>
          i.id === item.id
            ? {
                ...inCart,
                quantity: currentQty + 1,
                price: currentPrice + singleProductPrice,
                stock: currentStock - 1,
              }
            : i
        )
      );
    }
  }

  function decreaseItem(item) {
    const inCart = cart.find((obj) => obj.id === item.id);
    const currentStock = item.stock;
    const currentQty = item.quantity;
    const currentPrice = item.price;
    const singleProductPrice = currentPrice / currentQty;

    if (item.quantity === 1) {
      return;
    } else {
      setCart(
        cart.map((i) =>
          i.id === item.id
            ? {
                ...inCart,
                quantity: currentQty - 1,
                price: currentPrice - singleProductPrice,
                stock: currentStock + 1,
              }
            : i
        )
      );
    }
  }

  function removeItem(product) {
    const newCart = cart.filter((i) => i.id !== product);
    setCart(newCart);
  }

  return (
    <div className="main">
      {cart.length === 0 ? (
        <h1 className="yourCart">Your cart is empty</h1>
      ) : (
        <h1 className="yourCart">Your cart</h1>
      )}

      {cart.map((product) => (
        <div className="cartItem" key={product.id}>
          <div className="cartItemContent">
            <button
              className="removeButton"
              onClick={() => removeItem(product.id)}
            ></button>
            <div className="cartProductInfo">
              <img className="cartImg" src={product.img} />
              <div className="cartProductDetails">
                <h3>{product.name}</h3>
                <p>{product.price + " UNITS"}</p>
              </div>
            </div>
            <div className="cartQuantity">
              <button
                className="minusButton"
                onClick={() => {
                  decreaseItem(product);
                }}
              ></button>
              <p> {product.quantity} </p>
              <button
                className="plusButton"
                onClick={() => {
                  increaseItem(product);
                }}
              ></button>
            </div>
          </div>
        </div>
      ))}

      <div className="orderInfo">
        <p>Grand total: {totalSum} UNITS</p>
        <button className="checkoutButton">Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
