import React,{useEffect} from 'react'
import "../css/app.css"
import logo2 from "../assets/Fast Feast.gif"
import cart from "../images/cart.png"
import axios from "axios";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logout from '../pages/auth/Logout';
function Navbar(props) {

  return (
    <div>
         <nav class="container mx-auto flex items-center justify-between py-4" style={{paddingLeft:50}}>
    <div>
        <a href="/"><img src={logo2} alt="logo" style={{width:"15%"}}/></a>
    </div>
    <div>
        <ul class="flex items-center">
            <Logout/>
            <li class="ml-6"><a  href="/Orders" class="inline-block px-4 py-2 rounded-full flex items-center">Orders</a></li>
            <li class="ml-6"><a  href="/menu" class="inline-block px-4 py-2 rounded-full flex items-center">Menu</a></li>
            <li class="ml-6"><a href="/cart/:id" class="inline-block px-4 py-2 rounded-full flex items-center" style={{marginRight:50,paddingRight:30}}>
                    <span 
                        class="text-white font-bold pr-2">{props.count}</span>
                    <img src={cart} alt=""/>
    
                </a></li>
        </ul>
    </div>
</nav>
</div>
  )
}

export default Navbar

   
 