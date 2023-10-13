import React, { useState, useEffect } from "react";
import "../styles.css";
import Base from "./Base";
import Card from "./Card";
import { loadCart } from "./helper/cartHelper";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    let data = loadCart();
    if(data) {
      setProducts(data);
    }
  }, [reload]);

  const LoadAllProducts = () => {
    return (
      products.length ?
      <div>
        {products.map((product, index) => (
          <Card
            key={index}
            product={product}
            removeFromCart={true}
            addtoCart={false}
            setReload={setReload}
            reload={reload}
          />
        ))}
      </div> : 
      <h3 className="ml-auto mr-auto">Your cart is empty</h3>
    );
  };

  return (
    <Base title="Your cart" description="Ready to checkout, please proceed..">
      <div className="text-center">
          <LoadAllProducts />
      </div>
    </Base>
  );
};

export default Cart;
