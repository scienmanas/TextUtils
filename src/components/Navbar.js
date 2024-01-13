import React from 'react'
// import { Switch } from "@material-tailwind/react";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Navbar(props) {
    console.log(props.mode)
    return (
        <div className={`navbar border-b-[1px] border-gray-400 rounded-md ${props.mode === 'dark' ? 'text-white' : 'text-black', props.mode === 'dark'?'bg-[#0e1d3d]': 'bg-blue-400'} flex justify-between py-4 px-5 bg-gray-200`}>
            <div className="left flex items-center">
                <ul className='flex gap-x-5 w-fit h-fit items-center'>
                    <li className={`cursor-pointer hover:underline text-xl font-bold ${props.mode === 'dark' ? 'text-white' : 'text-black'}`}> <Link to='/'>{props.title}</Link></li>
                    <li className={`hover:underline cursor-pointer ${props.mode === 'dark' ? 'text-white' : 'text-black'} `}> <Link to='/about'>About </Link> </li>
                    <li className={`hover:underline cursor-pointer ${props.mode === 'dark' ? 'text-white' : 'text-black'}`}> <Link to='/author'> Author </Link></li>
                </ul>
            </div>
            <div className="right flex items-center gap-x-4">
                <div className="switch flex w-fit h-fit">
                    <label className="relative inline-flex items-center cursor-pointer w-fit h-fit">
                        <input type="checkbox" value="" className="sr-only peer" onClick={props.toggleMode} />
                        <div className="w-9 h-5 bg-red-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                    </label>

                </div>
                <div className="github">
                    <a href="https://github.com/scienmanas" className= {`${props.mode === 'dark'?'text-white': 'text-black' }`}><FaGithub className='hover:scale-125 duration-200' /></a>
                </div>
            </div>
        </div>
    )
}


