import './Contacts.css'
import {Link} from'react-router-dom'


const Contacts = ({variable}) => {
  return (
    <>
    <section ref={variable} className=' contact-section  p-5 container-fluid '>

        <div className='container p-3 container-child w-100 h-100 text-light  d-flex flex-column align-items-center'>
        <h1 className='menu-text text-center  p-4 w-100'>Contact Us</h1>
            
          <section className='input-div border-light h-100  d-flex  justify-content-center align-items-center'>

             <div className=' row-contact row rounded-1 '>
              <div className='col-12 '> <input className=' log-inputs rounded-1  w-100' type='text' placeholder='Username' /></div>
              <div className='col-12'> <input className='log-inputs rounded-1 w-100 ' type='text' placeholder=' Password'  /></div>
              <div className='col-12'>
               <button className=' log-in btn btn-m  rounded-1   w-100'>LogIn</button>
               <div className='mt-1' >  <Link className='text-light sign-in '>Sign In</Link> </div>

               </div>

             </div>
          
           
          </section>

        </div>

    </section>
    </>
  )
}

export default Contacts
