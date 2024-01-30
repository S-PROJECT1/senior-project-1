// App.js
import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  const [menuView, setMenuView] = useState(false);
  const [view, setView] = useState('Products');
  const [product, setProduct] = useState({});



  const [data, setData] = useState([]);


  const toggleMenu = () => {
    setMenuView(!menuView);
  };

  const switchView = (option) => {
    setView(option);
  };


  const DELETE = (id) => {
    axios
      .delete(`http://localhost:9999/DELETE/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };




  return (
    <div>
      <div className="nav">
        <span className="logo" onClick={() => switchView('Products')}>
          <img className='logoo' src={Logo} alt="Logo" />
        </span>
        {view === 'Products' && <Search onSearch={handleSearch} />}
        {view === 'Cart' && <Search onSearch={handleSearch} />}
        {view === 'OneProduct' && <Search onSearch={handleSearch} />}
        {view === 'Add' && <Search onSearch={handleSearch} />}

        <span className="items" onClick={() => switchView('Cart')}>
          🛒 Your Cart
        </span>
        <span className="items" onClick={() => switchView('Add')}>
          🔻 Add A Book
        </span>
      </div>

      {view === 'Products' && <Products setView={setProduct} switchView={switchView} />}
      {view === 'Add' && <Add />}
      {view === 'OneProduct' && <OneProduct product={product} DELETE={DELETE} addToCart={addToCart} />}
      {view === 'Cart' && <Cart cartItems={cartItems} removeFromCart={removeFromCart} pay={pay} clearCart={clearCart} />}
    </div>
  );
};

export default App;
