import React from 'react'
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './styles/navbar.css'

export default function Navbar(props) {
    return (
        <div className={`fixed top-0 w-full navbar border-b-[1px] border-gray-400 rounded-b-sm ${props.mode === 'dark' ? 'text-white bg-[#2c3e50]' : 'text-black bg-[#0d436d]'} flex justify-between py-4 px-5`}>
            <div className="left flex items-center">
                <ul className='flex gap-x-5 w-fit h-fit items-center'>
                    <li className={`hero cursor-pointer hover:underline font-bold `}> <Link to='/'>{props.title}</Link></li>
                    <li className={`text-sm sm:text-base  hover:underline cursor-pointer ${props.mode === 'dark' ? 'text-[#ffffff]' : 'text-[#ffffff]'}`}> <Link to='/about'>About </Link> </li>
                    <li className={`text-sm sm:text-base hover:underline cursor-pointer ${props.mode === 'dark' ? 'text-[#ffffff]' : 'text-[#ffffff]'}`}> <Link to='/author'> Author </Link></li>
                </ul>
            </div>
            <div className="right flex items-center gap-x-4">
                <div className="switch flex w-fit h-fit">
                    <label className="relative inline-flex items-center cursor-pointer w-fit h-fit">
                        {/* <input type="checkbox" value="" className="sr-only peer" onClick={props.toggleMode} />
                        <div className="w-9 h-5 bg-red-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div> */}
                        <button
                            className="text-white rounded-lg p-1 hover:text-blue active:text-blue-500 focus:outline outline-blue-600 active:outline-1 focus:bg-bg-secondary cursor-pointer w-fit undefined duration-100"
                            style={{ opacity: 1, transform: 'none' }} onClick={props.toggleMode}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className= {`${props.mode === 'dark'?'hidden' : 'visible'}  iconify iconify--carbon`}
                                width="26"
                                height="26"
                                viewBox="0 0 32 32"
                            >
                                <path
                                    fill="currentColor"
                                    d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6M5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"
                                ></path>
                            </svg>

                            <svg 
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className={`${props.mode === 'dark'?'visible' : 'hidden'} iconify iconify--ph`}
                                width="26"
                                height="26"
                                viewBox="0 0 256 256"
                            >
                                <path fill="currentColor"
                                    d="M233.54 142.23a8 8 0 0 0-8-2a88.08 88.08 0 0 1-109.8-109.8a8 8 0 0 0-10-10a104.84 104.84 0 0 0-52.91 37A104 104 0 0 0 136 224a103.09 103.09 0 0 0 62.52-20.88a104.84 104.84 0 0 0 37-52.91a8 8 0 0 0-1.98-7.98m-44.64 48.11A88 88 0 0 1 65.66 67.11a89 89 0 0 1 31.4-26A106 106 0 0 0 96 56a104.11 104.11 0 0 0 104 104a106 106 0 0 0 14.92-1.06a89 89 0 0 1-26.02 31.4"
                                ></path>
                            </svg>
                        </button>
                    </label>

                </div>
                <div className="github">
                    <a href="https://github.com/scienmanas/TextUtils" className={`${props.mode === 'dark' ? 'text-white' : 'text-white'}`}><FaGithub className='hover:scale-150 scale-125 duration-200' /></a>
                </div>
            </div>
        </div>
    )
}


