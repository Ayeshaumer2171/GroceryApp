  import React, { useState } from 'react'
  import Products from '../components/Products'
    import CartButtons from '../components/CartButtons'
    import Header from '../components/Header'
     import { items } from "../Data/ProductsData";
     import { toast } from 'react-toastify';
     import 'react-toastify/dist/ReactToastify.css';
     import { useContext } from 'react';
    import { CartContext } from '../components/CartContext'; 
 import Carousels from '../components/Carousels';
import Footer from '../components/Footer';
 import End from '../components/End';
import CartOffCanvas from '../components/CartOffCanvas'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin from '../components/Admin';
import Checkout from '../components/Checkout' ;
 export default function Menu() {


   const { increment, cartCounter,cartItems,removeFromCart } = useContext(CartContext);


  const [selectedCatId, setSelectedCatid] = useState(null);
  const [products, setProducts] = useState(items);
  

  const onCatSelection = (catId) => {
    setSelectedCatid(catId);
    if (catId === null) {
      setProducts(items);
    } else {
      const filteredItems = items.filter((p) => p.categoryId === catId);
      setProducts(filteredItems);
    }
  };

  const handleIncrement = (item) => {
     increment(item);
    toast.success('Item addes from cart');

  };

  return (
    // <div className='container mb-5'>
    //   <Header cartCounter={cartCounter} />
    //   <Carousels className='mt-4' />
    //   <CartOffCanvas cartItems={cartItems} removeItem={removeFromCart} />
    // <div className="row ">
     
    //     <div className="col-md-3">
    //    <CartButtons selectedCatId={selectedCatId} onCatSelection={onCatSelection} />
    //     </div>
    //     <div className="col-md-9">
    //      <Products increment={handleIncrement} items={products} />
    //     </div>
    //   </div>


    //   <Footer />
    //   <End />
    // </div>

    <div className='container mb-5'>
      <Router>
        <Header cartCounter={cartCounter} />
        <CartOffCanvas cartItems={cartItems} removeItem={removeFromCart} />
        <Routes>
          <Route path='/' element={
            <React.Fragment>
            <Carousels className='mt-4' />

              <div className="row">
                <div className="col-md-3">
                  <CartButtons selectedCatId={selectedCatId} onCatSelection={onCatSelection} />
                </div>
                <div className="col-md-9">
                  <Products increment={handleIncrement} items={products} />
                </div>
              </div>

            </React.Fragment>
          } />
          <Route path="/checkout" element={<Checkout />} />

          <Route path='/admin' element={<Admin />} />
        </Routes>
        <Footer />
        <End />
      </Router>
    </div>

  )
}

