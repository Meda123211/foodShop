

import'./Home.css'



const Home=({variable})=>{
    return(
       <>
      
       <section ref={variable} className="container-fluid header-section py-5 ">
       
         <div className='container text-white my-5 py-5 text-center text-md-start '>
         <div className='  row  text-sm-center text-md-start'>
            <div className='col-12   '>
               <h1 className='the-best-meal  fw-bold'>The Best Meal Ever</h1>
         </div>
  
            <div className='col-12 '>
            <p className=' home-pg lead  fs-6 py-2 opacity-50" '>never sit around and wait for someone unless they’re delivering a pizza.
            </p>         </div>
  
           
          <div className='col-12 col-md-4 col-lg-2 '>
        <button className=' order-btn btn-primary w-100 btn-lg  my-4   '>ORDER NOW!</button>
        </div>
         </div>
         </div>
      
     
       </section>

       </>
    )
}
export default Home