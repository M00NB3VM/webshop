import react from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { cartState } from "../stores/cart/atom";

function Header() {
  const [cart, setCart] = useRecoilState(cartState);

  return (
    <header className="header">
      <Link to="/">
        <img
          className="logoSmall"
          alt="Sense lab log"
          src={"/images/logo-s.png"}
        />
      </Link>
      <Link to="/">
        <img className="logoBig" alt="Sense lab log" src={"/images/logo.png"} />
      </Link>
      <Link className="productsLink" to="/products">
        PRODUCTS
      </Link>
      <Link to="/cart">
        {cart.length === 0 ? (
          <img className="cart" alt="Cart" src={"/images/cart-empty.png"} />
        ) : (
          <img className="cart" alt="Cart" src={"/images/cart-filled.png"} />
        )}
      </Link>
    </header>
  );
}

export default Header;
