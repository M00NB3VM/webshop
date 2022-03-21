import React from "react";
import { useRecoilValue } from "recoil";
import { productState } from "../stores/products/atom";
import { Link } from "react-router-dom";
import "./products.css";

function Products() {
  const products = useRecoilValue(productState);

  const productGrid = products.map((product) => {
    return (
      <Link to={`/products/${product.id}`} className="product" key={product.id}>
        <img className="productImg" src={product.img}></img>
        <h2 className="name">{product.name}</h2>
        <p className="price">{product.price + " UNITS"} </p>
      </Link>
    );
  });

  return (
    <div className="main">
      <h1 className="productsTitle">Products</h1>
      <div className="productGrid">{productGrid}</div>
    </div>
  );
}

export default Products;
