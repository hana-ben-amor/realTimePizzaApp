import React, { useState,useEffect } from 'react';
import Pizza from './pizzaCard'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar';
import Cart from './Cart';
function Menu(props) {
  const {pizza,onAdd,cartItems}=props;

  return (
    <><section class="menu container mx-auto py-8">
    <h1 class="text-xl font-bold mb-8">All Pizzas</h1>
    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 col-gap-12 row-gap-16">
      {pizza.map(pizza =><>
        <Pizza key={pizza.id} pizza={pizza} onAdd={onAdd}/>
      </>)}
    </section>
    </section>

        </>)
  
}

export default Menu
