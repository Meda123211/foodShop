import React from 'react'
import{AiOutlineArrowUp} from'react-icons/ai'
import './ScrollUp.css'
import { Link } from 'react-router-dom'


const ScrollUp =({scrollUp}) => {

  const scrollToSectionOne=(elementRef)=>{
    window.scrollTo({
      top:elementRef.current.offsetTop,
      behavior:'smooth'
    })

  }

    
  return (
    <Link onClick={()=>{scrollToSectionOne(scrollUp)}} className='scroll-up-btn text-center float-end' >
        <div><AiOutlineArrowUp className=' icon-up text-white fs-4' /></div>
    </Link>
  )
}

export default ScrollUp
