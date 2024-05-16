import React, { useState } from "react";
import "../CSS_Files/Cart.css"
import { Link } from 'react-router-dom';

const Cart = ({ value, setValue }) => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const items = value;
  const renderItems = () => {
    return items.map((item) => (
      <>
        <div className="cartproduct" key={item.id}>

          <img src={item.imageUrl} alt={item.text} style={{ width: "10%" }} />
          <div className="cartitemname"><h2>{item.text}</h2></div>
          <div className="cartitemprice"><span>{item.Price}</span></div>
          <div>
            <button>+</button>
            <button>-</button>
          </div>
        </div>
      </>
    ));
  };

  const calculateSubTotal = () => {
    return items.reduce((total, item) => total + parseFloat(item.Price), 0);
  };

  const deliveryCharges = () => {
    if (calculateSubTotal() == 0) {
      return (
        0
      )
    } else {
      return (
        40
      )
    }
  }

  const calculateTotal = () => {
    if (calculateSubTotal() == 0) {
      return (
        calculateSubTotal()
      )
    } else {
      return (
        calculateSubTotal() + 40
      )
    }

  }


  return (
    <div className="cart">
      <h1>Cart</h1>

      <div className="cartdetails">

        <div className="shoppinglist">
          {renderItems()}
        </div>

        {items.length > 0 && <div className="cartbill">
          <table>
            <tr>
              <td>Subtotal:</td>
              <td>Rs. {calculateSubTotal()} /-</td>
            </tr>
            <tr>
              <td>Delivery Charges:</td>
              <td>Rs. {deliveryCharges()} /-</td>
            </tr>
            <tr>
              <td><h2>Total:</h2></td>
              <td><h2>Rs. {calculateTotal()} /-</h2></td>
            </tr>
          </table>

          <Link to="/PlaceOrder" onClick={handleScrollToTop}><button>Proceed To Checkout</button></Link>
        </div>}

      </div>

    </div>
  );
};
export default Cart;
