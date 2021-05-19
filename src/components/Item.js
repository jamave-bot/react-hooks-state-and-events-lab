import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState('');

  function handleAddToCart(){
    setInCart(()=> 'in-cart')
  }

  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCart}>Add to Cart</button>
    </li>
  );
}

export default Item;
