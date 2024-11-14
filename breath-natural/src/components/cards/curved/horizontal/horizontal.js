import React from 'react';
import './horizontal.scss';

const Horizontal = ({imgPosition, plantsrc}) => {
    return (
        <div className={ imgPosition==='left' ? 'horizontal horizontalleft': 'horizontal horizontalright'}>
            {imgPosition === 'left' ? 
             <img src={plantsrc} alt="plant1"></img>
            : <></>}
             <div className='cntnt'>
             <p className='title'>For Small Desk Ai Plant</p>
             <p className='subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
             <p className='price'>Rs. 599/-</p>
             <button className='borderBtn'>Buy Now</button> 
             </div>
             {imgPosition === 'right' ? 
             <img src={plantsrc} alt="plant1"></img>
            : <></>}        
             </div>
    );
};

export default Horizontal;