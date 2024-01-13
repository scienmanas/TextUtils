import React from 'react'
import { FiGithub } from "react-icons/fi";
import { FaInstagram, FaLink, FaQuora, FaLinkedin, FaTwitterSquare } from "react-icons/fa";;

export default function Author(props) {
  document.title = props.title
  return (
    <div className={`mt-20 p-4 ${props.mode === "dark" ? 'text-white' : 'text-black'}`}>
      This website is developed and designed my <span className='font-extrabold hover:underline text-[#c473b7]'>Manas</span>.
      <p>Email : <a href="mailto:iamscienstistmanas@gmail.com" className='hover:underline decoration-purple-400 text-transparent bg-clip-text bg-gradient-to-r font-extrabold from-[#009245] to-[#a59b0a] '>iamscientistmanas@gmail.com</a></p>
      <div className="social-links text-xl mt-2 flex flex-wrap gap-3 w-fit h-fit">
        <div className="portfolio cursor-pointer hover:scale-125 duration-300 active:scale-90">
          <a href='https://port-folio-scienmanas.vercel.app/'><FaLink /></a>
        </div>
        <div className="insta cursor-pointer hover:scale-125 duration-300 active:scale-90">
         <a href='https://www.instagram.com/scienmanas'> <FaInstagram /></a>
        </div>
        <div className="github cursor-pointer hover:scale-125 duration-300 active:scale-90">
        <a href="https://github.com/scienmanas"><FiGithub /></a>
        </div>
        <div className="quora cursor-pointer hover:scale-125 duration-300 active:scale-90">
          <a href='https://www.quora.com/profile/Manas-Poddar-17'><FaQuora /> </a>
        </div>
        <div className="linkedin cursor-pointer hover:scale-125 duration-300 active:scale-90">
          <a href='https://www.linkedin.com/in/manas-poddar-5a0098227/'><FaLinkedin /> </a>
        </div>
        <div className="twitter cursor-pointer hover:scale-125 duration-300 active:scale-90">
          <a href='https://twitter.com/ScientistManas'><FaTwitterSquare /> </a>
        </div>
      </div>
    </div>
  )
}
