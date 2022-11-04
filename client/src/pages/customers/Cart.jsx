import React, { useState,useEffect} from 'react'
import "../../css/app.css"
import Navbar from '../../components/Navbar'
import emptyCart from "../../images/empty-cart.png"
import pizza from "../../images/pizza.png"
import blackCart from "../../images/cart-black.png"
import { ScrollRestoration } from 'react-router-dom'
function Cart({pizza}) {
  const[cart,setCart]=useState([])
   function restart(){
  (document.location.reload(true))
  (localStorage.setItem('count',0))
  }
    return (
    <>
     <Navbar count={Number(window.localStorage.getItem('count'))}/>
    <section class="cart py-16">
      <div class="order container mx-auto w-1/2 ">
    <div class="flex items-center border-b border-gray-300 pb-4">
      <img src={blackCart} alt=""/>
      <h1 class="font-bold ml-4 text-2xl">Order summary</h1>
    </div> 
    <div class="pizza-List">
     {cart.map(elm=>{<>
     
      <div class="flex items-center my-8">
            <img class="w-24" src={pizza} alt=""/>
                <div class="flex-1 ml-4">
                    <h1>Marinera</h1>
                    <span>MEDIUM</span>
                </div>
                <span class="flex-1">1pcs</span>
                <span class="font-bold text-lg">£300</span>
              </div>
     </>
            
     })} 
       </div>
      
    <hr/>
    <div class="text-right py-4">
      <div>
      <span class="text-lg font-bold">Total Amount:</span>
        <span class="amount text-2xl font-bold ml-2">£300</span>
      </div>
       
   
        <div>
          <form action="" class="mt-12">
            <input class="border border-gray-400 p-2 w-1/2 mb-4" style={{marginLeft:"70%"}} type="text" placeholder='Phone number' />
            <input class="border border-gray-400 p-2 w-1/2" type="text" style={{marginLeft:"70%"}} placeholder='Address' />
            <div>

              <button class="btn-primary px-6 py-2 rounded-full text-white font-bold mt-6" type='submit'>Order Now</button>
              </div>
          </form>
        </div>
         
        </div>
      </div> 
    
    {/* <div class="empty-cart py-16">
    <div class="container mx-auto text-center">
       <h1 class="text-3xl font-bold mb-2">Cart Empty 😕 </h1> 
       <p class="text-gray-500 text-lg mb-12">You probably haven't ordered a pizza yet. <br/>
                To order a pizza, go to the menu page.</p>
            <img class="w-2/5 mx-auto" src={emptyCart}alt="empty-cart"/>
    </div>
    </div>*/}
    <div style={{paddingLeft:"20%"}}>

    <button class="add-to-cart py-1 px-6 rounded-full flex items-center font-bold" onClick={()=>(JSON.parse(localStorage.getItem('count'))>0)&&(window.confirm(`${JSON.parse(localStorage.getItem('food-app-current-user')).username} are u sure to restart cart?`))?restart():console.log("action denied")}>reset cart</button>

    </div>
    </section>
    </>
   
  )
}

export default Cart