import React from 'react';
import './simple.scss'
import plant1 from '../../../assets/plant1.png';

import { BsChevronRight } from "react-icons/bs";

const Simple = () => {
    return (
 <div className='simple' >
        <div className='content'>
        <img src={plant1} alt="plant1"></img>
        <p>Trendy House plant</p>
        <div className='text'>
        <h4>Calathea plant</h4>
        <BsChevronRight className='icon'/>
        </div>
        <button className='borderButton'>Buy Now</button>         
        </div>
    </div>
        
    );
};

export default Simple;
