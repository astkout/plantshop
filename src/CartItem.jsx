import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

const CartItem = () => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Function to increase the quantity of an item
  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  // Function to decrease the quantity of an item
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    }
  };

  // Function to remove an item from the cart
  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  // Calculate the total amount of items in the cart
  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Calculate the total cost of all items in the cart
  const calculateTotalCost = () => {
    return cart.reduce((total, item) => total + (item.cost * item.quantity), 0).toFixed(2);
  };

  return (
    <div className="cart-container">
      <h2>Total Plants in Cart: {calculateTotalAmount()}</h2>
      <h2>Total Cart Cost: ${calculateTotalCost()}</h2>

      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">Price: ${item.cost}</div>
              <div className="cart-item-quantity">
                <button onClick={() => handleDecrement(item)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${(item.cost * item.quantity).toFixed(2)}</div>
              <button onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      <div>
        <button>Continue Shopping</button>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;
