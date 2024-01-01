import React from 'react';

import { styles } from '../style';
import { serviceCard } from '../constant/constant';
import { SectionWrapper } from '../hoc';

const BestCard = ({ img, head, body }) => {
    return (
        <div className='flex justify-center'>
            <div className='w-full flex flex-col justify-center group hover:bg-gradient-to-r from-orange-400 to-red-700 bg-[#f7f7f7] p-[2.5rem] shadow-[0.125rem .25rem rgba(0,0,0,.075)] rounded ease-in-out duration-300 xl:w-80 lg:w-[17rem] md:w-[20rem] sm:w-full'>
                <img src={img} className="object-contain h-[80px] mb-3" />
                <h5 className='text-[1.126em] mb-2 font-sans leading-1.35 font-bold text-[initial] text-center group-hover:text-white'>{head}</h5>
                <p className='text-center text-[#707070] text-[1rem] font-sans group-hover:text-white'>{body}</p>
            </div>
        </div>
    )
}

const MainServices = () => {
    return (
        <div className={`px-6 xl:px-10 lg:px-10 ${styles.padding}`}>
            <h2 className={` text-[2.125em] font-sans text-[initial] text-center font-bold leading-[1.35] mb-16 sm:text-md max-iphonesm:text-[1.3em] max-iphonemd:text-[1.5em]
       max-iphonelg:text-[1.7em]`}>We Provide Best Services</h2>

            <div className='flex flex-col gap-6 flex-wrap xl:flex-row lg:flex-row md:flex-row sm:flex-row justify-center xl:justify-start lg:justify-start md:flex-row sm:justify-center w-full'>
                {serviceCard.map((content, index) => (
                    <div className='xl:w-2/6 lg:basis-3 w-full lg:w-2/6 md:w-2/6 sm:w-2/6 '>
                    <BestCard {...content} index={index} key={`number-${index}`} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SectionWrapper(MainServices, 'services')
