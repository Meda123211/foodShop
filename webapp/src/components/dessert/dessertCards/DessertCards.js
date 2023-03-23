





import './DessertCards.css'
import {GiShoppingCart} from 'react-icons/gi'

const DessertCards=({name,image,text,handleCarts})=>{
  // const styleCardDessert=["card-body dessert-text-active ",'card-body dessert-text']

    return(
        <>

 <div  className=" pizza-card card  text-center  text-light" style={{width:'18rem'}}>
<div className='handel-img'>
<img src={image}className="img-hover card-img-top img-fluid" alt="..."/>

</div>
  <div className='card-body dessert-text-active'>
    <h3 className="card-title fw-bolder fs-5 py-2">{name}</h3>
    <p className=" lead card-text fs-6 py-2">{text}</p>
    <a onClick={handleCarts} className=" btn-card border-0 btn btn w-100 d-flex justify-content-center ">Add to Carts  <GiShoppingCart className='float-left fs-6 p-0 '/> </a>

  </div>







</div> 



  
  




        </>
        )
    }
     export default DessertCards