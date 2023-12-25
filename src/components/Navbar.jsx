import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import { navLinks } from '../constant/constant';
import { styles } from '../style';
import { crown, close, menu } from '../assets';

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const [active, setActive] = useState('')
  const [navbar, setNavbar] = useState(false)


  const changeNavbackground = (() => {
    if (window.scrollY >= 16) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  })

  window.addEventListener('scroll', changeNavbackground);

  return (
    <>
    <nav className={`${styles.paddingX} w-full z-50 fixed top-0 py-4 flex items-center bg-gradient-to-r from-orange-400 to-red-700 315deg ${navbar ? ' bg-gradient-to-r from-orange-600 to-red-1000' : 'bg-gradient-to-r from-orange-400 to-red-700'}`}>
      <div className='w-full flex items-center relative justify-between mx-auto'>
        <Link
          to={''}
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          < h1 className='relative text-4xl xs:text-3xl text-[#fff] md:text-4xl text-white max-[320px]:text-3xl '>Datak<span><img src={crown} className='w-6 md:w-8 absolute left-[40px] bottom-1 md:left-[94px] xs:left-[80px] max-[320px]:left-[78px] max-[414px]:left-[95px]' />&nbsp;&nbsp;&nbsp;ng</span></h1>
        </Link>

        <ul className=' hidden cursor-pointer lg:flex flex-row gap-10 items-center text-[10px] text-white max-[768px]:text-[8px] max-[768px]:gap-3'>
          {navLinks.map((nav) => (
            <li key={nav.id}
              className={`${active === nav.title ? "text-slate-400"
                : "text-slate-100"} hover:text-slate-700 md:text-[12px] font-normal`
              }
              onClick={(() => {
                setActive(nav.title)
              })}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className='lg:hidden flex justify-end flex-1 items-center'>
          <img className='w-[23px] h-[23px] object-contain cursor-pointer'
            src={toggle ? close : menu}
            onClick={(() => {
              setToggle(!toggle)
            })}
          />

          <div className={`${!toggle ? 'hidden' : 'flex'} top-12 w-full px-10 py-5 absolute items-center justify-start
         bg-gradient-to-r from-orange-400 to-red-700 315deg text-slate-100`}>
            <ul className=' cursor-pointer list-none text-[12px] flex justify-end items-start flex-1 flex-col gap-2'>
              {navLinks.map((item) => (
                <li key={item.id}
                  className={`${active === item.title ? 'text-slate-400' : 'text-slate-100'}
                hover:ease-in-out duration-300 hover:border-0 hover:bg-sky-500 w-full py-1.5 px-1.5 
                `}
                  onClick={(() => {
                    setActive(item.title)
                    setToggle(!toggle)
                  })}
                >
                  <a key={item.id} href={`#${item.id}`}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav >
    </>
  )
}

export default Navbar
