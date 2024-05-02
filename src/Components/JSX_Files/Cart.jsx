import React from "react";
import "../CSS_Files/Cart.css"

const Cart = ({ value, setValue }) => {
  const items = value;
  const renderItems = () => {
    return items.map((item) => (
      <div className="cartproduct" key={item.id}>
        
        <img src={item.imageUrl} alt={item.text} style={{ width: "10%" }} />
        <div className="cartitemname"><h2>{item.text}</h2></div>
        <div className="cartitemprice"><span>{item.Price}</span></div>

      </div>
    ));
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + parseFloat(item.Price), 0);
  };

  return (
    <div className="cart">
      <h1>Cart</h1>
      {renderItems()}
      <h3>Total: {calculateTotal()}</h3>
    </div>
  );
};
export default Cart;
