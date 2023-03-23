import React from 'react'
import Menu from '../menu/mainMenu/Menu'
import Dessert from '../dessert/mainDessert/Dessert'
import { useState } from 'react'

function Parents({variable,variableTwo,handleCarts}) {
 

  return (

    
    <div>
      <Menu variable={variable}  handleCarts={handleCarts}/>
      <Dessert variableTwo={variableTwo} handleCarts={handleCarts}/>

    </div>
  )
}

export default Parents
