import React from 'react';
import './landing.scss';
import Simple from '../cards/simple/simple';
import Curved from '../cards/curved/curved';

const Landing = () => {
    return (
        <>
        <div className='Landing'>
            <div className='block1'>
                <h1 className='heading'>
                Breathe Natural
                </h1>
                <div className='block'>
                    <p> Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet. </p>
                    <button className='borderButton'>Explore</button>
                </div> 
                <br/>
            <Curved type="simple"></Curved>

            </div>
            <Simple type="simple"></Simple>
        </div>
        <br/>
        <h4 className='heading2'>Our Trendy Plants</h4>
        
        </>
    );
};

export default Landing;