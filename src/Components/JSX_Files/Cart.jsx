import React from "react";

const Cart = ({ value, setValue }) => {
  const items = value;
  const renderItems = () => {
    return items.map((item) => (
      <div key={item.id}>
        <img src={item.imageUrl} alt={item.text} style={{ width: "10%" }} />
        <span>{item.text}</span>
        <span>{item.Price}</span>
      </div>
    ));
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + parseFloat(item.Price), 0);
  };

  return (
    <div>
      <h1>Cart</h1>
      {renderItems()}
      <h3>Total: {calculateTotal()}</h3>
    </div>
  );
};

export default Cart;
