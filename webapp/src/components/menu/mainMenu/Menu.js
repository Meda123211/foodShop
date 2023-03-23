import Cards from'../cardsMenu/Cards'
 import'../mainMenu/Menu.css'
 import PizzaObject from '../PizzaObject'



const Menu=({variable, handleCarts})=>{


return(
    <>
    <section ref={variable}className=' menu-container container-fluid w-100 pt-5  '>
        <div className='container '>


            <h1 className='menu-text text-center  m-4 p-4 '>Menu</h1>
    <div className='row '>
        {PizzaObject.map(e=>{
          return(
          <div  key={e.id} className='col-md-6 col-lg-4 p-4 d-flex  justify-content-around'> 
          <Cards handleCarts={()=>handleCarts(e)} name={e.name} image={e.img} text={e.infos} price={e.price} />
          </div>
          )
              
        })}
    

    
    </div>

        </div>
    </section>

    </>
    )
}
 export default Menu