import React, { useState,useEffect} from "react";
import "../src/css/app.css"
import data from './data'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Cart from "./pages/customers/Cart";
import Menu from "./pages/customers/Menu.jsx"
import Footer from './components/Footer/footer';
export default function App() {
 
 
  const {pizzas} = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (pizza) => {
    const exist = cartItems.find((x) => x.id === pizza.id);
    if (exist) {
      
      const newCartItems=cartItems.map((x) =>
          x.id ===pizza.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      ;
      setCartItems(newCartItems);
      localStorage.setItem('cartItems', JSON.stringify(newCartItems))
    } else {
      const newCartItems =[...cartItems,{...pizza,qty:1}]
      setCartItems([...cartItems, { ...pizza, qty: 1 }]);
      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    }
  };
  const onRemove = (pizza) => {
    const exist = cartItems.find((x) => x.id === pizza.id);
    if (exist.qty === 1) {
      const newCartItems = cartItems.filter((x)=>x.id!==pizza.id);
      setCartItems(newCartItems);
      localStorage.setItem('cartItems', JSON.stringify(newCartItems));

    } else {
      const newCartItems=cartItems.map((x) =>
          x.id === pizza.id ? { ...exist, qty: exist.qty - 1 } : x
        );
      setCartItems(newCartItems)
      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    }
  };
  useEffect(()=>{
    setCartItems(localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[]);
  },[])
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<><Navbar countCartItems={cartItems.length}/><Home/></>} />
        <Route path="/register" element={<><Register /></>} />
        <Route path="/cart" element={<><Navbar countCartItems={cartItems.length}/><Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/></>} />
        <Route path="/login" element={<Login><Navbar/></Login>}/>
        <Route path="/menu"  element={
         <><Navbar countCartItems={cartItems.length}/><Menu pizza={pizzas} cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/></>}/>
      
        
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

    