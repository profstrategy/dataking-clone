import React from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../style';
import { services } from '../constant/constant';
import check from '../assets/serviceImg/check.svg'


const Services = () => {
  return (
    <div className={`p-100`}>
      <div className={`${styles.paddingX} flex flex-col gap-7 sm:flex-col
      md:flex-row lg:flex-row xl:flex-row xs-flex-col `}>

        <div className='basis-2/4'>
          {services.map((imgserv) => (
            <img key={imgserv.id} src={imgserv.img} className='w-full object-contain' />
          ))}
        </div>

        <div className='basis-2/4 mb-8'>
          {services.map((servbody) => (
            <h2 key={servbody.id} className='text-center text-[initial] text-[2em] md:text-[1.5em] lg:text-[2.2em] sm:text-[1.9em] font-bold leading-[1.35] mb-[1rem] font-sans max-iphonesm:text-[1.2rem] max-iphonemd:text-[1.5em]'>{servbody.head}</h2>
          ))}

          {services.map((bdy) => (
            <p key={bdy.id} className={`text-[#707070] font-sans font-normal text[1rem] leading-[1.85] mb-5`}>{bdy.body}</p>
          ))}

          <div className='flex flex-row gap-3'>

            <div className=' flex flex-col gap-3'>

              <img src={check} alt='check.svg' className='bg-[#a40606] text-center py-[.25em] px-[.4em] rounded' />

              <img src={check} alt='check.svg' className='bg-[#a40606] text-center py-[.25em] px-[.4em] rounded' />
            </div>

            <div className='flex flex-col'>
              {services.map((data) => (<p key={data.id} className='text-[#707070] font-sans font-[1rem]'>{data.content}</p>))}

              {services.filter(cable => (cable.id === 'bulk')).map(res => (<p key={res.id} className='text-[#707070] font-sans font-[1rem] mb-10'>
                {res.cable}
              </p>))}
            </div>
          </div>

          <Link to={'#login'}><button className='pt-[10px] px-[30px] font-[600] rounded-[30px] bg-[#a40606] text-white border-[#a40606] border-2 py-[10px] px-[30px] hover:bg-white hover:text-[#007bff] focus:bg-white focus:text-[#007bff] font-sans'>Login</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Services
