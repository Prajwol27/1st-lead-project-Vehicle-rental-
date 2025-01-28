import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Cars.css'

const Cars = () => {
  const navigate = useNavigate();

  const handleBooking =()=>{
    navigate('/booking');
  }
  return (
    <div className='car-rental'>
      <h1>Available Cars</h1>
      <div className='car-list'>
        <div className='car-item'>Car-1</div>
        <div className='car-item'>Car-2</div>
        <div className='car-item'>Car-3</div>
      </div>
      <div className='book-options'></div>
      <button className='book-btn' onClick={{handleBooking}}>Book Now</button>
      <button className='book-btn' onClick={{handleBooking}}>Book Now</button>
      <button className='book-btn' onClick={{handleBooking}}>Book Now</button>
    </div>
  )
}

export default Cars