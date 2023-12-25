import React from 'react';
import { about_col, about, sec, custom } from '../constant/constant';
import  { SectionWrapper } from '../hoc';
import { styles } from '../style';

const About = () => {

  return (
    <div>
      <div className={` ${styles.paddingX} flex 2xl:flex-row xl:flex-row gap-7 flex-col max-xs:flex-col lg:flex-row`}>
        <div className={`basis-2/6`}>
          {about_col.map((abt) => (
            <p key={abt.id} className="text-[#707070] text-[1rem] leading-1.85">{abt.all}</p>
          ))
          }
        </div>

        <div className='basis-4/6 flex w-full gap-5 flex-col xl:flex-row 2xl:flex-row md:gap-y-5 lg:flex-row max-w-100 flex-wrap max-lg:flex-row max-md:flex-col'>

          {about.map((abt) => (
            <div className='group shadow-xl hover:bg-gradient-to-r from-orange-400 to-red-700 p-[1.5rem] border-2 rounded shadow-[0 .125rem .25rem rgba(0,0,0,.075)] border-[#dee2e6] gap-3 mx-1 w-full xl:w-80'>
              <img key={abt.id} src={abt.img} className="h-[80px] object-contain" />
              <h5 key={abt.id} className="text-[1.126em] leading-1.35 text-[initial] mb-4 font-semibold group-hover:text-white">{abt.head}</h5>
              <p key={abt.id} className="text-[#707070] text-[1rem] leading-1.85 group-hover:text-white">{abt.body}</p>
            </div>
          ))}




          {custom.map((cus) => (
            <div className=' group shadow-lg hover:bg-gradient-to-r from-orange-400 to-red-700 p-7 hover:text-white gap-3 mx-1 w-full p-[1.5rem] border-2 rounded shadow-[0 .125rem .25rem rgba(0,0,0,.075)] border-[#dee2e6] xl:w-80'>
              <img key={cus.id} src={cus.img} className="h-[80px] object-contain" />
              <h5 key={cus.id} className="text-[1.126em] leading-1.35 text-[initial] mb-4 font-semibold group-hover:text-white">{cus.head}</h5>
              <p key={cus.id} className="text-[#707070] text-[1rem] leading-1.85 group-hover:text-white">{cus.body}</p>
            </div>
          ))}

            {sec.map((lock) => (
              <div className='group shadow-lg hover:bg-gradient-to-r from-orange-400 to-red-700 p-7 hover:text-white gap-3 mx-1 w-full p-[1.5rem] border-2 rounded shadow-[0 .125rem .25rem rgba(0,0,0,.075)] border-[#dee2e6] xl:w-80'>
                <img key={lock.id} src={lock.img} className="h-[80px] object-contain" />
                <h5 key={lock.id} className="text-[1.126em] leading-1.35 text-[initial] mb-4 font-semibold group-hover:text-white">{lock.head}</h5>
                <p key={lock.id} className="text-[#707070] text-[1rem] leading-1.85 group-hover:text-white">{lock.body}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper(About, 'about us')
