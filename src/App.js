import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './pages/Menu';
// import Admin from './pages/Admin';
import { CartProvider } from './components/CartContext'; // Change the import path

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

  function App() {
  return (
    <CartProvider>
      <div>

        <Menu />

        <ToastContainer position="bottom-right" />
      </div>
    </CartProvider>
  );
}

export default App;
