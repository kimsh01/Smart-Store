import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from './common/Cart/Cart';
import Header from './common/header/Header';
import Pages from '../src/pages/Pages';
import Footer from './common/footer/Footer';
import Data from '../src/components/flashDeals/Data';

function App() {
  const {productItem} = Data

  const [CartItem, setCartItem] = useState([])


  return (
    <>
      <Header CartItem={CartItem} />
      <Routes>
        <Route path='/' element={<Pages productItem = {productItem} />} exact/>
        <Route path='/cart' element={ <Cart CartItem={CartItem} /> } exact />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
