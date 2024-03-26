import React, { useState } from 'react';

import { MoveUp } from '../assets';

const Scrollbtn = () => {
  const [movedown, setMovedown] = useState(false);

    //while scrolling
    const ScrollDown = () => {
      if (window.scrollY >= 16) {
        //drop button
        setMovedown(true);
      } else {
        //remove button
        setMovedown(false)
      }
    }
    window.addEventListener('scroll', ScrollDown)

  //Sroll to top when button is clicked
  const scrollinToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    
  };

  return (
    <div className=''>
      <button className={`${movedown ? 'movedown' : 'moveup'} rounded-full moveup transition duration-1000 z-10 ease-in-out fixed right-4 bg-[#3264f5] text-[#ffffff] text-[16px] w-[50px] h-[50px]`}
      onClick={scrollinToTop}
      >
        <div className='flex justify-center'>
          <img src={MoveUp} alt="Move Up" />
        </div>
      </button>

    </div>
  )
}

export default Scrollbtn
