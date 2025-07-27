import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav>
            <h1>ShopApp</h1>
            <ul>
                <li>Products</li>
                <li>Cart</li>
                <li>Orders</li>
                <li>Login</li>
            </ul>
        </nav>
    );
};

export default Navbar;
