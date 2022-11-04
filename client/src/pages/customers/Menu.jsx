import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar';

function Menu(props) {
  const initialState=()=>Number(window.localStorage.getItem('count')||0)
  const [count, setCount] = useState(initialState);
  useEffect(() => {
   window.localStorage.setItem('count', count);
  }, [count]);
  useEffect(() => {
    localStorage.setItem('dataKey', JSON.stringify(count));
  }, [count]);
  return (
    <>
    <Navbar count={count} />
    <section class="menu container mx-auto py-8">
    <h1 class="text-xl font-bold mb-8">All Pizzas</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 col-gap-12 row-gap-16">
        {props.menu.map(pizza =><>

          <div class="w-full md:w-64">
          <img class="h-40 mb-4 mx-auto" src={pizza.image} alt=""/>
                    <div class="text-center">
                        <h2 class="mb-4 text-lg">{pizza.name}</h2>
                        <div>
          
    </div>
                        <span class="size py-1 px-4 rounded-full uppercase text-xs">{pizza.size}</span>
                            <div class="flex items-center justify-around mt-6">
                                <span class="font-bold text-lg">{pizza.price}</span>
                                <button data-pizza="" onClick={()=>{setCount(count+1)
                                localStorage.setItem('cartElements', JSON.stringify(pizza))}}
                                    class="add-to-cart py-1 px-6 rounded-full flex items-center font-bold">
                                    <span>+</span>
                                    <span class="ml-4">Add</span>
                                </button>
                                
                            </div>
                      </div>
      
      </div> 

        </>)
      
      }
          
      
        
     </div> 
</section>

    </>)
  
}

export default Menu
