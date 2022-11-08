import React, { useState,useEffect} from 'react'
import "../../css/app.css"
import Navbar from '../../components/Navbar'
import emptyCart from "../../images/empty-cart.png"
import blackCart from "../../images/cart-black.png"
function Cart(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 100 ? 0 :7;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  function restart(){
    localStorage.removeItem('cartItems')
   document.location.reload(true)
  }
    return (
    <>
     <div className="block col-1">
      <div>
      <section class="cart py-16" >
              <div class="order container mx-auto w-1/2 ">
            <div class="flex items-center border-b border-gray-300 pb-4">
              <img src={blackCart} alt=""/>
              <h1 class="font-bold ml-4 text-2xl">Order summary</h1>
            </div> 
                {cartItems.length === 0 && <div class="container mx-auto text-center">
              <h1 class="text-3xl font-bold mb-2">Cart Empty 😕 </h1> 
              <p class="text-gray-500 text-lg mb-12">You probably haven't ordered a pizza yet. <br/>
                        To order a pizza, go to the menu page.</p>
                    <img class="w-2/5 mx-auto" src={emptyCart}alt="empty-cart"/>
            </div>
            }   <div class="pizza-List">
                {cartItems.map((item) => (<div class="flex items-center my-8">
            <img class="w-24" src={item.image} alt=""/>
                <div class="flex-1 ml-4">
                    <h1>{item.name}</h1>
                    <span>{item.size}</span>
                </div>
                <span class="flex-1"><>
                {item.qty} Pcs
                <button  onClick={() => onRemove(item)} className="remove">
                <span style={{marginLeft:30,fontWeight:'bold',fontSize:30,color:'red',backgroundColor:'yellow',paddingLeft:10,paddingRight:10,borderRadius:50}} >-</span>
                </button>
                </></span>

                


                <span class="font-bold text-lg">£{(item.qty*item.price).toFixed(2)}</span>
             


                     
              </div>
                ))}
                <div/>

                {cartItems.length !== 0 && (
                  <>
                    <hr></hr>
                    
                    
                    <div className="row">
                      <div className="col-2">Tax Price</div>
                      <div className="col-1 text-right">£{taxPrice.toFixed(2)}</div>
                    </div>
                    <div className="row">
                      <div className="col-2">Shipping Price</div>
                      <div className="col-1 text-right">
                        £{shippingPrice.toFixed(2)}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-2">
                        <strong>Total Price</strong>
                      </div>
                      <div className="col-1 text-right">
                        <strong>£{totalPrice.toFixed(2)}</strong>
                      </div>
                    </div>
                    <hr />
                
                    
                  </>
                )}
                </div> 
                {cartItems.length>0 && <button class="add-to-cart py-1 px-6 rounded-full flex items-center font-bold" onClick={()=>(cartItems.length>0)&&(window.confirm(`${JSON.parse(localStorage.getItem('food-app-current-user')).username} are u sure to restart cart?`))?restart():console.log("action denied")}>reset cart</button>}

              </div>
              </section>
            </div>
   </div>
    </>
  
    
   

          
     
  //    } 
  //      </div>
      
  //   <hr/>
  //   <div class="text-right py-4">
  //     <div>
  //     <span class="text-lg font-bold">Total Amount:</span>
  //       <span class="amount text-2xl font-bold ml-2">£300</span>
  //     </div>
       
   
  //       <div>
  //         <form action="" class="mt-12">
  //           <input class="border border-gray-400 p-2 w-1/2 mb-4" style={{marginLeft:"70%"}} type="text" placeholder='Phone number' />
  //           <input class="border border-gray-400 p-2 w-1/2" type="text" style={{marginLeft:"70%"}} placeholder='Address' />
  //           <div>

  //             <button class="btn-primary px-6 py-2 rounded-full text-white font-bold mt-6" type='submit'>Order Now</button>
  //             </div>
  //         </form>
  //       </div></div>
  //     </> }
  //     </div>
    
         
        
    
    
  //   <div style={{paddingLeft:"20%"}}>

  //   <button class="add-to-cart py-1 px-6 rounded-full flex items-center font-bold" onClick={()=>(JSON.parse(localStorage.getItem('count'))>0)&&(window.confirm(`${JSON.parse(localStorage.getItem('food-app-current-user')).username} are u sure to restart cart?`))?restart():console.log("action denied")}>reset cart</button>

  //   </div>
  
   
  // )
)}

export default Cart