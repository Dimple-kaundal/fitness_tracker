import React from 'react';
import '../CSS_Files/PlaceOrder.css';

const PlaceOrder = () => {
  const handleConfirmOrder = () => {
    alert('Order confirmed!');

  };

  return (
    <>

      <div className="addressDetails">

        <div className="place-order-container">

          <div className="address-section">
            <h2>Add Address Manually</h2>
            <form>
              <div className="personDetail">

                <div className="personFirstName">
                  <label htmlFor="FirstName">First Name:</label>
                  <input type="text" id="FirstName" name="FirstName" required />
                </div>
                <div className="personLastName">
                  <label htmlFor="LastName">Last Name:</label>
                  <input type="text" id="LastName" name="LastName" required />
                </div>

              </div>

              <label htmlFor="PhoneNumber">Phone Number:</label>
              <input type="text" id="PhoneNumber" name="PhoneNumber" required />

              <div className="personLocation">

                <div className="locationPincode">
                  <label htmlFor="pincode">Pincode:</label>
                  <input type="text" id="pincode" name="pincode" required />
                </div>
                <div className="locationState">
                  <label htmlFor="state">State:</label>
                  <input type="text" id="state" name="state" required />
                </div>
                <div className="locationCity">
                  <label htmlFor="city">City:</label>
                  <input type="text" id="city" name="city" required />
                </div>

              </div>

              <label htmlFor="address">Address:</label>
              <input type="text" id="address" name="address" required />
              <label htmlFor="landmark">Landmark:</label>
              <input type="text" id="landmark" name="landmark" required />

            </form>
          </div>

          <div className="payment-section">
            <h2>Select Payment Options</h2>
            <select>
              <option value="credit-card">Credit Card</option>
              <option value="debit-card">Debit Card</option>
              <option value="paypal">PayPal</option>
              <option value="cash">Cash on Delivery</option>
            </select>
          </div>

          <button className="confirm-order-button" onClick={handleConfirmOrder}>
            Confirm Order
          </button>

        </div>

      </div>

    </>
  );
};

export default PlaceOrder;
