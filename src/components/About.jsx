import React from 'react';
import { useState } from 'react';
import { about_col, about, sec, custom } from '../constant/constant';
import { styles } from '../style';

const About = () => {

  return (
    <div>
      <div className={` ${styles.paddingX} ${styles.paddingY} flex 2xl:flex-row xl:flex-row gap-7 flex-col max-xs:flex-col mt-20 lg:flex-row`}>
        <div className={` basis-2/5`}>
          {about_col.map((abt) => (
            <p key={abt.id} className="text-[#707070] text-[1rem] leading-1.85">{abt.all}</p>
          ))
          }
        </div>

        <div className=' flex basis-3/5 gap-5 xs-flex-col flex-col xl:flex-row 2xl:flex-row md:gap-y-5 max-lg:flex-row max-md:flex-col'>

          {about.map((abt) => (
            <div className='group second shadow-xl hover:bg-gradient-to-r from-orange-400 to-red-700 p-[1.5rem] border-2 rounded shadow-[0 .125rem .25rem rgba(0,0,0,.075)] border-[#dee2e6] gap-3 mx-3 w-full max-xl:w-fit max-lg:w-auto'>
              <img key={abt.id} src={abt.img} className="h-[80px] object-contain" />
              <h5 key={abt.id} className="text-[1.126em] leading-1.35 text-[initial] mb-4 font-semibold  second-hover:text-white">{abt.head}</h5>
              <p key={abt.id} className="text-[#707070] text-[1rem] leading-1.85 group-hover:text-white">{abt.body}</p>
            </div>
          ))}




          {custom.map((cus) => (
            <div className=' group shadow-lg hover:bg-gradient-to-r from-orange-400 to-red-700 p-7 hover:text-white gap-3 mx-3 w-full p-[1.5rem] border-2 rounded shadow-[0 .125rem .25rem rgba(0,0,0,.075)] border-[#dee2e6]  max-xl:w-fit max-lg:w-auto'>
              <img key={cus.id} src={cus.img} className="h-[80px] object-contain" />
              <h5 key={cus.id} className="text-[1.126em] leading-1.35 text-[initial] mb-4 font-semibold">{cus.head}</h5>
              <p key={cus.id} className="text-[#707070] text-[1rem] leading-1.85 group-hover:text-white">{cus.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={`${styles.paddingX} flex justify-end`}>
      
        <div className='xl:w-1/4 lg:w-[30rem] w-full'>
          {sec.map((lock) => (
            <div className=' group shadow-lg hover:bg-gradient-to-r from-orange-400 to-red-700 border-2 rounded shadow-[0 .125rem .25rem rgba(0,0,0,.075)] border-[#dee2e6] w-full  p-[2rem] border-2 rounded shadow-[0 .125rem .25rem rgba(0,0,0,.075)] border-[#dee2e6]'>
              <img key={lock.id} src={lock.img} className="h-[80px] object-contain" />
              <h5 key={lock.id} className="text-[1.126em] leading-1.35 text-[initial] mb-4 font-semibold">{lock.head}</h5>
              <p key={lock.id} className="text-[#707070] text-[1rem] leading-1.85 group-hover:text-white">{lock.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
