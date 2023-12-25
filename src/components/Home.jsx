import React from 'react';
import { Link } from 'react-router-dom';


import { styles } from '../style';
import { hero, heroImg } from '../constant/constant';
import { heroImage } from '../assets';
import { SectionWrapper } from '../hoc';

const Home = () => {
  return (
    <div className='flex relative md:flex-row-reverse lg:flex-row sm:flex-col-reverse xs:flex-col-reverse max-[320px]:flex max-[320px]:flex-col-reverse max-[414px]:flex-col-reverse min-h-screen font-serif sm:mt-12 xs:mt-12 max-[320px]:mt-10 max-[414px]:mt-10'>
      <div className={`${styles.paddingY} basis-2/4`}>
        <h1 className={`${styles.paddingX} ${styles.heroHeadText} mb-5 text-start max-[320px]:text-[.9rem]`}>Welcome To DATAKING</h1>
        {hero.map((words) => (
            <p className={`mb-[1.25em] text-[#fff] font-[1.25rem] max-[320px]:text-[.7rem] max-[414px]:text-[15px] text-start ${styles.paddingX} ${styles.heroSubText}`} key={words.id}>{words.body}</p>
          ))}

          <div className={`${styles.paddingX} text-[#3264f5] flex justify-start items-center gap-3 flex-row-2 md:mb-5`}>
            <Link to={'#login'}><button className='pt-[10px] px-[30px] font-[600] rounded-[30px] bg-white border-white border-2 py-[10px] hover:bg-orange-400 focus:bg-orange-900 sm:py-2 xs:py-0.5 gap-3 active:bg-orange-800 max-[320px]:pt-2 px-4'>Register</button></Link>

            <Link to={'#signup'}><button className='pt-[10px] px-[30px] font-[600] rounded-[30px] bg-white border-white border-2 py-[10px] hover:bg-orange-400 focus:bg-orange-900 sm:py-2 xs:py-0.5 gap-3 active:bg-orange-800 max-[320px]:pt-2 px-4'>Login</button></Link>
          </div>

          <div className={`${styles.paddingX}`}>
            <p className='text-white mb-5 md:mb-12 sm:mb-2 xs:mb-2 '>Trusted by companies like:</p>

            <div className='flex flex-row-4 gap-4'>
              {heroImg.map((img) => (
                <img key={img.id} src={img.img} className="md:w-[4rem] xs:hover:scale-110 transition-transform sm:w-[4.5rem] xs:w-[1.5rem] lg:w-[5rem] max-[320px]:w-[1.5rem] max-[414px]:w-[3rem]"/>
              ))}
            </div>
          </div>
      </div>
      <div className={`${styles.paddingX} ${styles.paddingY} basis-2/4 `}><img src={heroImage} className="xl:py-[13rem] lg:py-[13rem] md:py-[13rem] object-contain md:w-auto  w-full h-100" /></div>
    </div>
  )
}

export default SectionWrapper(Home, 'home')
