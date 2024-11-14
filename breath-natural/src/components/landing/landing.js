import React from 'react';
import './landing.scss';
import Simple from '../cards/simple/simple';
import Curved from '../cards/curved/curved';
import Horizontal from '../cards/curved/horizontal/horizontal';
import plant2 from '../../assets/plant2.png';
import plant3 from '../../assets/plant3.png';

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
                <br/>
            <Curved></Curved>

            </div>
            <Simple></Simple>
        </div>
        <br/>
        <h4 className='heading2'>&nbsp;&nbsp;Our Trendy Plants&nbsp;&nbsp;</h4>
        <Horizontal imgPosition={'left'} plantsrc={plant2}/>
        <br/>
        <br/>
        <Horizontal imgPosition={'right'} plantsrc={plant3}/>
        <br/>
        <br/>
        <br/>
        </>
    );
};

export default Landing;