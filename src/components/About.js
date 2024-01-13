import React from 'react'
import { FiGithub } from "react-icons/fi";


export default function About(props) {
  document.title = props.title
  return (
    <>
      <div className={`mt-20 p-4 ${props.mode === "dark" ? 'text-white' : 'text-black'}`}>
        <div>This is a web-based app built on React for performing different operations on text. </div>
        <div className='github-link-project mt-2 text-xl hover:scale-125 active:scale-90 duration-200 w-fit h-fit'>
         <a href="https://github.com/scienmanas/TextUtils"> <FiGithub /> </a>
        </div>
      </div>

    </>
  )
}
