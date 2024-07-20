import React from 'react'
import resume from '../../Images/resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={resume} download className='btn'>Download</a>
        <a href='#contact' className='btn btn-primary'>Let's talk</a>
    </div>
  )
}

export default CTA