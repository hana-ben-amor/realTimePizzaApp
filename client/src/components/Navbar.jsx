import React from 'react'
import "../css/app.css"
import logo2 from "../assets/Fast Feast.gif"
import cart from "../images/cart.png"
import "react-toastify/dist/ReactToastify.css";
import Logout from '../pages/auth/Logout';
function Navbar(props) {
const {countCartItems}=props;
  return (
    <div>
         <nav class="container mx-auto flex items-center justify-between py-4" style={{paddingLeft:50}}>
    <div>
        <a href="/"><img src={logo2} alt="logo" style={{width:"15%"}}/></a>
    </div>
    <div>
        <ul class="flex items-center">
            <Logout/>
            <li class="ml-6"><a href="/menu" class="inline-block px-4 py-2 rounded-full flex items-center">Menu</a></li>
            <li class="ml-6"><a href="/cart" class="inline-block px-4 py-2 rounded-full flex items-center" style={{marginRight:50,paddingRight:30}}>
            
            <img src={cart} alt=""/>

            {countCartItems?(
            <span 
            class="text-white font-bold pr-2" style={{marginLeft:"30%",paddingRight:20}}>{countCartItems}</span>
          ) : (
            <span class="text-white font-bold pr-2" style={{marginLeft:"30%",paddingRight:20}}>  0</span>
          )}
           </a></li>
        </ul>
    </div>
</nav>
</div>
  )
}

export default Navbar

   
 