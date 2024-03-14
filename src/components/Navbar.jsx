import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='container d-flex justify-content-evenly'>
        <span className='fs-1 fw-bold'>REDUX STORE</span>
        <div>
        <Link className='nav-links m-5 m-5 text-decoration-none fs-3' to='/' >Home</Link>
        <Link className='nav-links m-5 text-decoration-none fs-3' to='/cart' >Cart</Link>
        <span className='card-count m-5 fs-3'>Cart Count:0</span>
        </div>
    </div>
    </>
  )
}

export default Navbar