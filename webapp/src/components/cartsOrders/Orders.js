import React from 'react'
import './Orders.css'
import { useState,useEffect } from 'react'


function Orders({carts,name,price,img ,removeItem}) {

  const[quantity,setQuantity]=useState(1)
  const [itemsCartsPrices,setItemCartsPrices]=useState(1)
 

  function calcQuantityPrice(){
  const res=price*quantity
setItemCartsPrices(res)


}

  //increasing quantity of order
const inreaseQuantity=()=>{

  setQuantity(quantity+1)

}
  //decreasing quantity of order

const decreaseQuantity=()=>{
  if(quantity>1){
    setQuantity(quantity-1)

  }
}

useEffect(()=>{
  calcQuantityPrice()
})


  return (
   

   <>
        <img className=' img-order ' src={img} alt="" />
         <h1 className='w-25 order-list-name'>{name}</h1>
         <section   className='d-flex justify-content-evenly w-50' >
          <div className=' d-flex justify-content-evenly align-items-center handle-prices  w-50'>   
            <button onClick={decreaseQuantity} className='fs-5 btn btn-sm text-light '>-</button>
           <span className='span-num'>{quantity}</span>
           <button onClick={inreaseQuantity} className='  fs-5  btn btn-sm text-light '>+</button> 
           </div>
         <div className=' w-25  d-flex  align-items-center justify-content-center'>
         <span className='   span-num'>{itemsCartsPrices}$</span>    

         </div>
 </section>
 <span onClick={removeItem} className='close-span-order'>X</span>     

 </>
   
  )
}

export default Orders
