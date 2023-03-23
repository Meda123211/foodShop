import './App.css';
import { useRef } from 'react';
import Navbar from './components/navbar/Navbar';
 import {BrowserRouter as Router,Routes, Route} from "react-router-dom"

import Home from '../src/components/home/Home'

import ScrollUp from'./components/scrollUp/ScrollUp'
import { useState } from 'react';
import Parents from './components/parentsMenu/Parents';
import Contacts from'./components/contacts/Contacts'


const App=()=> {
  const menu=useRef(null)
  const dessert=useRef(null)
  const contact=useRef(null)
  const scrollUp=useRef(null)
  const[scrollingLogic,SetscrollingLogic]=useState(false)



  window.onscroll =  (e)=> {
  if(window.scrollY>800){
    SetscrollingLogic(true)
  }else{
    SetscrollingLogic(false)
  }
  };
  
  const[carts,Setcarts]=useState([])
  const[orders,Setorders]=useState(false)

function handleCarts(items){
  Setcarts([...carts,items])
//render items in Orders component just once
  carts.filter((e=>{

 if(e.id===items.id){Setcarts(carts)}
  })) 
}
 
  return (
    <Router>
    <div className="App">

    <Navbar menu={menu} 
    orders={orders} 
    Setorders={Setorders} 
    dessert={dessert} 
    contact={contact} 
    carts={carts}
    setcarts={Setcarts}
    />
    {scrollingLogic  && <ScrollUp  scrollUp={scrollUp}/>}
    <Home variable={scrollUp} />
    <Parents variable={menu} 
    variableTwo={dessert} 
    handleCarts={handleCarts}/>

    <Contacts variable={contact}/>
    

  </div>

   </Router> 
  );
}

export default App;
