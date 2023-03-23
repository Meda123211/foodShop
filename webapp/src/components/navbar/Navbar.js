  

import './Navbar.css'
import {Link} from "react-router-dom"
import{AiOutlineMenu} from'react-icons/ai'
import {GiShoppingCart} from'react-icons/gi'
import Orders from '../cartsOrders/Orders'


  const Navbar=({menu,dessert,contact,orders,Setorders,carts,setcarts})=>{

    
  //scrolling down function 
  const scrollToSection=(elementRef)=>{
    window.scrollTo({
      top:elementRef.current.offsetTop,
      behavior:'smooth'
    })
  }
// clicking clear all items insinde .item bs
const clearItemsInside=()=>
{
  setcarts(null)
}
const openOrdersCarts=()=>{
  Setorders(!orders)
}
//removing items from cart list
const removeHandlingItems=(item)=>{
const removeItem=carts.filter((e)=>  e.id!==item.id )
setcarts(removeItem)
}


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
              <Link  to='/' aria-current="page" className="me-4 nav-link" >HOME</Link>
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
        <div className='   position-relative'>
        <GiShoppingCart onClick={openOrdersCarts} className=' shop-icon text-light fs-5'/>
        {carts.length==0?null:<span className='position-absolute gishopping-quantity'>{carts.length}</span>}
         
        </div>
           {orders&& <div className='container text-center orders-div w-50  pt-4'> 
      <section className='bg-danger d-flex'>
  
    <button onClick={clearItemsInside} className='  fs-6 text-light bg-primary btn btn-lg h-25'>clear all</button>
    <div>
    <h1>Tolat price</h1>
  <span>100$</span>
</div>
</section>
             {
             carts.map((e=>{

         return(

          
           
          <div key={e.id} className=' border mx-4 mt-4 rounded row mt-3'>
           
         <div className='col-12 h-25  d-flex align-items-center justify-content-between'>
                   <Orders removeItem={()=>removeHandlingItems(e)} img={e.img} price={e.price} name={e.name} carts={carts}/>
         
        </div>
       </div>
         )
        }))
         
           }    </div>

          
        }
     

      </div>

    </nav>
    
      
    )}

  export default Navbar
 


    