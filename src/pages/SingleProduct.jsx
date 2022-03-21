import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useRecoilValue, useRecoilState } from "recoil";
import { productState } from "../stores/products/atom";
import { cartState } from "../stores/cart/atom";
import "./singleProduct.css";

function SingleProduct() {
  const [cart, setCart] = useRecoilState(cartState);
  const params = useParams();
  const products = useRecoilValue(productState);
  const product = products.find((product) => product.id === params.id);
  const [itemTot, setItemTot] = useState(product.price);
  const [amount, setAmount] = useState(product.quantity);
  const [stock, setStock] = useState(product.stock);
  const options = [];

  for (let i = 0; i < stock; i++) {
    let value = i + 1;
    options.push(
      <option key={value} value={value} className="options">
        {value}
      </option>
    );
  }

  function handleChange(e) {
    const selectedOption = parseInt(e.target.value);
    setAmount(selectedOption);
    const newItemTot = selectedOption * product.price;
    setItemTot(newItemTot);
  }

  function addToCart(item) {
    const inCart = cart.find((obj) => obj.id === item.id);

    if (inCart) {
      const currentQty = inCart.quantity;
      const currentPrice = inCart.price;
      const currentStock = inCart.stock;
      const newStock = currentStock - amount;
      setStock(newStock);

      setCart(
        cart.map((i) =>
          i.id === item.id
            ? {
                ...inCart,
                quantity: currentQty + amount,
                price: currentPrice + itemTot,
                stock: currentStock - amount,
              }
            : i
        )
      );
    } else {
      const currentStock = item.stock;
      const newStock = currentStock - amount;
      setStock(newStock);
      const newCart = [
        ...cart,
        {
          ...item,
          quantity: amount,
          price: itemTot,
          stock: item.stock - amount,
        },
      ];
      setCart(newCart);
    }
  }

  return (
    <div className="main">
      <Link to="/products">
        <img className="arrow" src="/images/arrow.png" alt="go back"></img>
      </Link>
      <div className="singleProduct">
        <img className="singleProductImg" src={product.img}></img>
        <h1>{product.name}</h1>
        <p>{itemTot + " UNITS"}</p>
        <p>{product.description}</p>
        <select id="amount" className="select" onChange={handleChange}>
          {options}
        </select>
        <button
          className="addToCartButton"
          type="submit"
          onClick={() => {
            addToCart(product);
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default SingleProduct;
