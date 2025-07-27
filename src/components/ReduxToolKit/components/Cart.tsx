import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store/Store';
import { clearCart, removeFromCart } from '../slices/CartSlice';
const Cart: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { items, total } = useSelector((state: RootState) => state.cart);

  return (
    <div>
      <h1>Your Cart</h1>
      {items.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => dispatch(removeFromCart({ id: item.id }))}>
            Remove
          </button>
        </div>
      ))}
      <h2>Total: ${total}</h2>
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
    </div>
  );
};

export default Cart;
