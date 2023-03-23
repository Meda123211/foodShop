import { Carousel } from "react-bootstrap";

import '../mainDessert/Dessert.css'
import DessertCards from '../dessertCards/DessertCards'
import dessertObject from '../DessertObject'

const Dessert=({variableTwo,handleCarts})=>{


 

    return(
        <>
        <section ref={variableTwo} className=' menu-container container-fluid w-100 pt-5  '>
            <div className='container '>
                <h1 className='menu-text text-center  m-4 p-4 '>Dessert</h1>
        <div className='row '>
    
          

            {dessertObject.map(e=>{
       
              return(
              <div  key={e.id} className='col-md-6 col-lg-4 p-4 d-flex  justify-content-around'> 
                
              <DessertCards handleCarts={()=>handleCarts(e)} name={e.name} image={e.img} text={e.infos} price={e.price} />



              </div>
              )
                  
            })}
 
        
           



       

        
        </div>
    
            </div>
        </section>
       
        </>    )
}
export default Dessert
