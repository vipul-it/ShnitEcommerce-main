import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, deleteFromCart } from './actions/cartActions';

const ProductDetail = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleDeleteFromCart = (productId) => {
    dispatch(deleteFromCart(productId));
  };

  return (
    <div>
      {/* Product details */}
      <button onClick={handleAddToCart}>Add to Cart</button>

      <div>
        <h3>Cart Items</h3>
        {cartItems.map(item => (
          <div key={item.id}>
            <p>{item.name}</p>
            <button onClick={() => handleDeleteFromCart(item.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;