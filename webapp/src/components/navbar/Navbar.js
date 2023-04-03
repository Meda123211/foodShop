  

import './Navbar.css'
import {Link} from "react-router-dom"
import{AiOutlineMenu} from'react-icons/ai'
import {GiShoppingCart} from'react-icons/gi'
import Orders from '../cartsOrders/Orders'
  const Navbar=({menu,dessert,contact,orders,Setorders,carts,setcarts,home})=>{

  //scrolling down function 
  const scrollToSection=(elementRef)=>{
    window.scrollTo({
      top:elementRef.current.offsetTop,
      behavior:'smooth'
    })
  }
  ///closing the div if the div is empty
const closeITemContainer=()=>{
  if (carts.length<=0){
Setorders(false)
}
}
closeITemContainer()

// clicking clear all items insinde .item bs

const clearItemsInside=()=>
{
  setcarts([])
  Setorders(false)
}
//open the cart list shop container
const openOrdersCarts=()=>{
  if(carts.length>0){
    Setorders(!orders)
  }else{
    Setorders(false)
  }
}
//removing items from cart list
const removeHandlingItems=(item)=>{
const removeItem=carts.filter((e)=>  e.id!==item.id )
setcarts(removeItem)
}



///////////////////////////////jsx//////////////

    return(
   
      
      <nav className="  w-100 navbar navbar-expand-lg bg-body-tertiary navbar-dark">
      <div className="container">
        <a className="navbar-brand  " href="/"><span className='fisrt-span-logo'>HOT</span> <span className='logo-span'>PIZZA</span></a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <AiOutlineMenu className='"navbar-toggler-icon"'/>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
            <li className="  nav-item">
              <Link onClick={()=>{scrollToSection(home)}}  to='/' aria-current="page" className="me-4 nav-link" >HOME</Link>
            </li>
            <li className="nav-item">
              <Link onClick={()=>{scrollToSection(menu)}} to='/menu' className="me-4 nav-link" >MENU</Link>
            </li>
            <li className="nav-item">
              <Link onClick={()=>{scrollToSection(dessert)}} to='/dessert' className="me-4 nav-link" >DESSERT</Link>
            </li>
          
            <li className="nav-item">
              <Link onClick={()=>{scrollToSection(contact)}} to='/contact' className="me-4 nav-link" >CONTACT US</Link>
            </li>
          
            
          </ul>
          
        </div>
        <div className=' shop-container  position-relative'>
        <GiShoppingCart onClick={openOrdersCarts} className=' shop-icon text-light fs-5'/>
        {carts.length==0?null:<span className='position-absolute gishopping-quantity'>{carts.length}</span>}
         
        </div>
            <div className={orders?'container-md text-center orders-div w-100  pt-4':'container-md text-center orders-div-active w-100  pt-4'}> 
      <section className='container d-flex justify-content-center'>
  
    <button onClick={clearItemsInside} className=' fs-6  text-dark btn w-100 btn-warning h-25'>clear all</button>

</section>
             {
             carts.map((e=>{
         return(

          <div key={e.id}className='container-md'>
            <div className='row'>
              <div className='col-12 '>
              <div  className=' border mx-4 mt-4 rounded row mt-3'>

<div className='col-12 h-25  d-flex align-items-center justify-content-between'>                 

          <Orders 
          removeItem={()=>removeHandlingItems(e)} 
          img={e.img} 
          price={e.price} 
          name={e.name} 

        carts={carts}
        
/>
</div>
</div>
              </div>
            </div>
          </div>
           
          
         )
        }))
         
           }    

           </div>

          
        
     

      </div>

    </nav>
    
      
    )}

  export default Navbar
 


    