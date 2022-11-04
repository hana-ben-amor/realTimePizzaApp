import React from 'react'
import heroPizza from "../assets/pizza-loader.gif"
import pizza from "../images/pizza.png"
import styled from "styled-components";
import Logout from './auth/Logout'
import Navbar from '../components/Navbar';
 export default function Home() {
  return (<>
 <Navbar count={Number(window.localStorage.getItem('count'))}/> 
    <section className="hero py-16">
            <div className="container mx-auto flex items-center justify-between" style={{padding:40}}>
                <div className="w-1/3" style={{marginLeft:"10%"}}>
                <h6 className="text-lg"><em>Are you hungry?</em></h6>
                <h1 className="text-3xl md:text-6xl font-bold">Don't wait !</h1>
                <button className="px-6 py-2 rounded-full text-white font-bold mt-4 btn-primary"><a href="/menu">Order Now</a></button>
                </div>
            
                <div className="w-1/2">
                    <img src={heroPizza} alt="" style={{marginLeft:"10%",width:"190%"}}/>
                </div>
            </div>
        </section>

        </> 

  );
}

