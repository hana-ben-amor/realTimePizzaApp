import React, { useState,useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';
import { useId } from "react";
import "../src/css/app.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";
import pizzaImg from "./images/pizza.png"
import Navbar from "./components/Navbar";
import Cart from "./pages/customers/Cart";
import Menu from "./pages/customers/Menu.jsx"
import Footer from './components/Footer/footer';
export default function App() {
 
  const [filter,setFilter]=useState("");
  const [value, setValue] = useState(0);
  const [pizzas,setPizzas]=useState([{
    id:uuidv4(),
    name: "Margherita",
    image:pizzaImg,
    price:250,
    size: "small"
  },{
    id:uuidv4(),
    name: "Marinara",
    image:pizzaImg,
    price: 300,
    size: "medium"
  },{
    id:uuidv4(),
    name: "Marinara",
    image:pizzaImg,
    price: 300,
    size: "medium"
  },{
    id:uuidv4(),
    name: "Marinara",
    image:pizzaImg,
    price: 300,
    size: "medium"
  },{
    id:uuidv4(),
    name: "Marinara",
    image:pizzaImg,
    price: 300,
    size: "medium"
  },{
    id:uuidv4(),
    name: "Marinara",
    image:pizzaImg,
    price: 300,
    size: "medium"
  },{
    id:uuidv4(),
    name: "Carbonara",
    image:pizzaImg,
    price:200,
    size: "small"
  },{
    id:uuidv4(),
    name: "Carbonara",
    image:pizzaImg,
    price:200,
    size: "small"
  }]
    
  )
 
  useEffect(()=>{
    JSON.parse(localStorage.getItem('my-app'));
  }
 )
  useEffect(()=>{
    localStorage.setItem('my-app',JSON.stringify(pizzas))
  })
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<><Home/><Footer/></>} />
        <Route path="/register" element={<><Register /><Footer/></>} />
        <Route path="/cart/:id" element={<><Cart /><Footer/></>} />
        <Route path="/login" element={<>
          <Login>
          <Navbar count={Number(window.localStorage.getItem('count'))} />
        </Login>
          <Footer/>
        </>
      }  />
        <Route path="/menu"  element={<>
          <Menu menu={pizzas}/>
          <Footer/>
        </>} />
      
        
      </Routes>
    </BrowserRouter>
  );
}

    