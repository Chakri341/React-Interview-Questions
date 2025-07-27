import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  fetchProducts, setSearchQuery, setCategory } from '../slices/ProductSlice';
import { RootState, AppDispatch } from '../store/Store';
const ProductList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { items, status, error, searchQuery, category } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  const filteredItems = items.filter((product) => {
    return (
      (category === 'all' || product.category === category) &&
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        />
        <select
          value={category}
          onChange={(e) => dispatch(setCategory(e.target.value))}
        >
          <option value="all">All</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
      </div>
      <div>
        {filteredItems.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt={product.title} style={{ width: '100px' }} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
