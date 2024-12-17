import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav style={{ padding: 5, background: '#282c34', color: 'white' }}>
      <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
        <h1 style={{textAlign:'center'}}>Projects App</h1>
      </Link>
    </nav>
  );
};

export default Navbar;
