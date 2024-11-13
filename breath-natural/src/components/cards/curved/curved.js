import React from 'react';
import './curved.scss'
import rating from '../../../assets/rating1.jpg';
import { FaStar,FaStarHalf  } from "react-icons/fa6";


const Curved = (type) => {
    return (
        <div className={type === 'curved' ? 'curved1': 'simple1'} >
            <div className='content1'>
            <div className='text'>
            
            <img src={rating} alt="rating"></img>

            <div style={{display:"grid"}}>
            <p style={{margin: "0px"}}>Alina Roe</p>
         <div>
        <FaStar style={{display:"inline-flex"}} className='icon' />
            <FaStar style={{display:"inline-flex"}} className='icon' />
            <FaStar style={{display:"inline-flex"}} className='icon' />
            <FaStar  style={{display:"inline-flex"}}className='icon' />
            <FaStarHalf  style={{display:"inline-flex"}}className='icon' />
        </div>
            
            </div>
            </div>
            <p className='review'>Lorem ipsun dolor sit amet. Lorem ipsum dolor sit amet...</p>
            {/* <button className='borderButton'>Buy Now</button>          */}
            </div>
        </div>
    );
};

export default Curved;