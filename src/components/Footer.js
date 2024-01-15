import React from 'react'
import './styles/footer.css'

export default function Footer() {
  return (
    <div className='sm:mt-[8.7rem] xl:absolute w-full bottom-0 mt-8 px-2 py-3 bg-gradient-to-r from-[#893fb9] to-[#ED1E79] '>
      <div className="left text-white">
        &#169; Made and designed by <a href="https://github.com/scienmanas"> <span className='text-[#4ab372] footer-name-font  font-extrabold text-lg'>Manas </span> </a> &#128150;
      </div>
      <div className="right">
      </div>
    </div>
  )
}
