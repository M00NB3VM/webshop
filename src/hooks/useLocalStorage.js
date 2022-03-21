import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { cartState } from "../stores/cart/atom";

export function useLocalStorage() {
  const [cart, setCart] = useRecoilState(cartState);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart !== null) {
      setCart(cart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  return { saveCart };
}
