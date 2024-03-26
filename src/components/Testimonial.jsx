import React from 'react';

import { styles } from '../style'
import { SectionWrapper } from '../hoc';

const Testimonial = () => {
  return (
    <div className={`${styles.paddingX} grid grid-cols-2`}>
      <h2>dfhjdf</h2>
      
      <div className='grid grid-rows-2 gap-3'></div>
    </div>
  )
}

export default SectionWrapper(Testimonial, 'testimonial')
