import React from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";
import './styles/popup.css'

export default function PopUpPrompt(props) {

    const handleOnChange1 = (event) => {
        props.setSearchText(event.target.value);
    }

    const handleOnChange2 = (event) => {
        props.setReplaceWith(event.target.value);
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            props.submitPrompt();
        }
    }

    return (
        <>
            <div className="hidden overflow-y-auto box z-10 justify-center items-center fixed opacity-[0.9] w-full h-full" id="prompt-box-1">
            </div>

            <div className="hidden box z-20 justify-center items-center opacity-1 fixed w-full h-full" id="prompt-box-2">
                <div className="container  w-fit h-fit flex flex-col gap-y-7 bg-gradient-to-r from-[#EA8D8D] to-[#A890FE] sm:p-9 p-6 pb-9 lg:p-14 rounded-lg">
                    <div className="head-upper flex justify-between gap-6">
                        <div className='text-lg popup-font sm:text-2xl lg:text-3xl text-slate-700 font-bold'>
                            {props.heading}
                        </div>
                        <div>
                            <button className="close-button" onClick={props.closePrompt}>
                                <IoIosCloseCircleOutline className='text-2xl lg:text-3xl text-slate-700' />
                            </button>
                        </div>
                    </div>
                    <div className="content">
                        <div className="flex flex-col gap-y-4">
                            <div className="flex pop-sub-custom flex-col lg:text-xl gap-y-2">
                                <label htmlFor="find-text">Find</label>
                                <input type="text" placeholder='Text to find' name="find-text" id="find-text" className="input rounded-md w-72 h-12 lg:w-96 lg:h-16 outline-2 focus:outline-blue-700" onChange={handleOnChange1} value={props.searchText} />
                            </div>
                            <div className="flex pop-sub-custom flex-col lg:text-xl gap-y-2">
                                <label htmlFor="replace-text">Replace with</label>
                                <input type="text" placeholder='Text to be replaced' name="replace-text" id="replace-text" className="input rounded-md w-72 h-12 lg:w-96 lg:h-16 outline-2 focus:outline-blue-700" onChange={handleOnChange2} value={props.replaceWith} onKeyDown={handleKeyPress} />
                            </div>
                            <div className="button shadow-[5px_5px_0px_0px_rgba(109,40,217)] active:translate-x-1 active:translate-y-1 active:shadow-none duration-150 mt-4 lg:text-xl box-shado w-fit h-fit bg-gradient-to-r from-[#FFECD2] to-[#FCB69F] py-3 px-4 rounded-md">
                                <button className="w-fit h-fit text-transparent bg-clip-text bg-gradient-to-r from-[#C33764] to-[#1D2671] font-bold" onClick={props.submitPrompt} >Replace</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
