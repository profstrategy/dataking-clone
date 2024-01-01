import React from 'react';

import { styles } from '../style';
import { MtnNetwork, GloNetwork, AirtelNetwork, MobileNetwork } from '../constant/constant';
import { SectionWrapper } from '../hoc'

const MtnCard = ({ id, netImgmtn, tagsmtn }) => {
  return (
    <>
      <div>
        <img src={netImgmtn} key={id} className="h-[80px]  relative mx-auto z-50 top-[-40px] p-1 bg-white rounded-full" />
        <div>
          {tagsmtn.map((resmtn) => (
            <table className=' w-full bg-[#fff] border-t font-sans mb-[1rem] text-[#212529] border-collapse radius-[5px] relative mt-[-.5rem]'>
              <tbody>
                <tr className='grid grid-cols-3 '>
                  <td key={resmtn.id} className="rows text-center mt-2">{resmtn.mb}</td>
                  <td key={resmtn.id} className="rows text-center mt-2">{resmtn.amt}</td>
                  <td key={resmtn.id} className="rows text-center mt-2">{resmtn.days}</td>
                </tr>
              </tbody>
            </table>
          ))}

          <div className='flex justify-center'>
            <button className='mtnBtn py-2 px-8 mb-8 rounded-full text-white  hover:text-initial font-sans'>Select bundle</button>
          </div>
        </div>
      </div>
    </>
  )
}

const GloCard = ({ id, netImglo, tagsglo }) => {
  return (
    <div>
      <img src={netImglo} key={id} className="h-[80px]  relative mx-auto z-50 top-[-40px] p-1 bg-white rounded-full" />
      <div>
        {tagsglo.map((resglo) => (
          <table className='w-full bg-[#fff] border-t font-sans mb-[1rem] text-[#212529] border-collapse radius-[5px] relative mt-[-.5rem]'>
            <tbody>
              <tr className='grid grid-cols-3 '>
                <td key={resglo.id} className="rows text-center mt-2">{resglo.mb}</td>
                <td key={resglo.id} className="rows text-center mt-2">{resglo.amt}</td>
                <td key={resglo.id} className="rows text-center mt-2">{resglo.days}</td>
              </tr>
            </tbody>
          </table>
        ))}

        <div className='flex justify-center'>
          <button className='GloBtn py-2 px-8 mb-8 rounded-full text-white  hover:text-initial font-sans'>Select bundle</button>
        </div>
      </div>
    </div>
  )
}

const AirtelCard = ({ id, netImgairtel, tagsairtel }) => {
  return (
    <div>
      <img src={netImgairtel} key={id} className="h-[78px] relative mx-auto z-50 top-[-40px] p-1 bg-white rounded-full" />

      <div>
        {tagsairtel.map((resairtel) => (
          <table className='w-full bg-[#fff] border-t font-sans mb-[1rem] text-[#212529] border-collapse radius-[5px] relative mt-[-.5rem]'>
            <tbody>
              <tr className='grid grid-cols-3 '>
                <td key={resairtel.id} className="rows text-center mt-2">{resairtel.mb}</td>
                <td key={resairtel.id} className="rows text-center mt-2">{resairtel.amt}</td>
                <td key={resairtel.id} className="rows text-center mt-2">{resairtel.days}</td>
              </tr>
            </tbody>
          </table>
        ))}

        <div className='flex justify-center'>
          <button className='airtelBtn py-2 px-8 mb-8 rounded-full text-white  hover:text-initial font-sans'>Select bundle</button>
        </div>
      </div>
    </div>
  )
}

const MobileCard = ({ id, netImgmobile, tagsmobile }) => {
  return (
    <div>
      <img src={netImgmobile} key={id} className="h-[78px]  relative mx-auto z-50 top-[-40px] p-1 bg-white rounded-full" />

      
      <div>
        {tagsmobile.map((resmobile) => (
          <table className='w-full bg-[#fff] border-t font-sans mb-[1rem] text-[#212529] border-collapse radius-[5px] relative mt-[-.5rem]'>
            <tbody>
              <tr className='grid grid-cols-3 '>
                <td key={resmobile.id} className="rows text-center mt-2">{resmobile.mb}</td>
                <td key={resmobile.id} className="rows text-center mt-2">{resmobile.amt}</td>
                <td key={resmobile.id} className="rows text-center mt-2">{resmobile.days}</td>
              </tr>
            </tbody>
          </table>
        ))}

        <div className='flex justify-center'>
          <button className='mobileBtn py-2 px-8 mb-8 rounded-full text-white  hover:text-initial font-sans'>Select bundle</button>
        </div>
      </div>
    </div>
  )
}

const Price = () => {
  return (
    <div className={`${styles.paddingX}`}>
      <h6 className='text-[#707070] text-[1rem] text-center font-sans mb-1'>Data Bundles</h6>
      <h2 className='text-initial text-[2.125em] text-center font-sans font-bold mb-8'>Data Price List</h2>

      {/* prices columns */}
      <div className='grid cont-header grid-cols-1 w-full  md:grid-cols-2 xl:grid-cols-4 gap-4 lg:grid-cols-4 sm:grid-cols-2'>

        <div className='pricing-body h-fit'>
          <div className='price-header relative h-[130px] text-center border-b-2 border-b-[#f9fafa] bg-[#f9fafa]'><h3 className='absolute top-[40%] w-[100%] text-[18px] text-white font-bold tracking-[1px] font-sans'>MTN</h3></div>

          {MtnNetwork.map((output, index) => (
            <MtnCard {...output} key={`tab${index}`} index={index} />
          ))}
        </div>

        <div className='pricing-body h-fit'>
          <div className='relative price-header-1 h-[130px] text-center border-b-2 border-b-[#f9fafa] bg-[#f9fafa]'><h3 className='absolute top-[40%] w-[100%] text-[18px] text-white font-bold tracking-[1px] font-sans'>GLO</h3></div>

          {GloNetwork.map((output1, index1) => (
            <GloCard {...output1} key={`tab${index1}`} index={index1} />
          ))}
        </div>

        <div className='pricing-body h-fit'>
          <div className='relative price-header-2 h-[130px] text-center border-b-2 border-b-[#f9fafa] bg-[#f9fafa]'><h3 className='absolute top-[40%] w-[100%] text-[18px] text-white font-bold tracking-[1px] font-sans'>AIRTEL</h3></div>

          {AirtelNetwork.map((output2, index2) => (
            <AirtelCard {...output2} key={`tab${index2}`} index={index2} />
          ))}
        </div>

        <div className='pricing-body h-fit'>
          <div className='relative price-header-3 h-[130px] text-center border-b-2 border-b-[#f9fafa] bg-[#f9fafa]'><h3 className='absolute top-[40%] w-[100%] text-[18px] text-white font-bold tracking-[1px] font-sans'>9MOBILE</h3></div>

          {MobileNetwork.map((output3, index3) => (
            <MobileCard {...output3} key={`tab${index3}`} index={index3} />
          ))}
        </div>

      </div>

    </div>
  )
}

export default SectionWrapper(Price, 'price')
