// import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './styles/textform.css'


export default function Textform(props) {
    document.title = props.title

    const handleUpClick = (event) => {
        event.preventDefault();  // To prevent the reloading of the page
        let newText = props.text.toUpperCase();
        props.setText(newText);
        props.showAlert("Converted to upper case", "success");
    }

    const handleOnChnage = (event) => {
        props.setText(event.target.value);
    }

    const ClearText = (event) => {
        event.preventDefault();
        props.setText("");
        props.showAlert("Text cleared!", "success");
    }

    const ChangeToLowerCase = (event) => {
        event.preventDefault();
        props.setText(props.text.toLowerCase());
        props.showAlert("Converted to lower case", "success");
    }

    const HandleCopy = (event) => {
        event.preventDefault();
        let texta = document.getElementById("myBox");
        // texta.select();
        navigator.clipboard.writeText(texta.value)
        props.showAlert("Copied to clipboard", "success");
    }

    const handleExtraSpaces = (event) => {
        event.preventDefault();
        let newText = props.text.split(/[ ]+/);
        props.setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success");
    }

    const handleChangeOfOcuurence = (event) => {
        event.preventDefault();
        props.showPopUp();
    }

    return (
        <>
            <div className="conatiner w-fit mx-6">
                <div className='flex flex-col mt-0 pt-28 ml-1 w-fit'>
                    <h1 className={`${props.mode === "dark" ? 'text-white' : 'text-black'} text-4xl w-fit h-fit`}>{props.heading}</h1>
                    <form action="" className='w-fit flex flex-col my-6 gap-y-6'>
                        <label htmlFor="">
                            <textarea className={`text-area-shadow ${props.mode === "dark" ? 'placeholder:text-white' : 'placeholder:text-gray-600'} rounded-lg w-[100%] h-48`} type="text" name="" id="myBox" placeholder="Enter the text" value={props.text} onChange={handleOnChnage} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} ></textarea>
                        </label>
                        <div className="buttons flex gap-x-2 gap-y-2 w-fit h-fit flex-wrap">
                            <button className={`${props.text.length > 0 ?'custom-button' : 'pointer-events-none custom-button-disabled'} custom-button`} onClick={handleUpClick} >Convert to Uppercase</button>
                            <button className={`${props.text.length > 0 ?'custom-button' : 'pointer-events-none custom-button-disabled'} custom-button`} onClick={ChangeToLowerCase}>Change to Lower Case</button>
                            <button className={`${props.text.length > 0 ?'custom-button' : 'pointer-events-none custom-button-disabled'} custom-button`} onClick={ClearText}>Clear Text</button>
                            <button className={`${props.text.length > 0 ?'custom-button' : 'pointer-events-none custom-button-disabled'} custom-button`} onClick={HandleCopy}>Copy Text</button>
                            <button className={`${props.text.length > 0 ?'custom-button' : 'pointer-events-none custom-button-disabled'} custom-button`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                            <button className={`${props.text.length > 0 ?'custom-button' : 'pointer-events-none custom-button-disabled'} custom-button`} onClick={handleChangeOfOcuurence} >Change Occurrences</button>
                            
                            {/* <button className={`${props.text.length > 0 ?'custom-button' : 'pointer-events-none custom-button-disabled'} `} onClick={handleExtraSpaces}>Narrate</button>
                            <button className={`${props.text.length > 0 ?'custom-button' : 'pointer-events-none custom-button-disabled'} custom-button`} onClick={handleExtraSpaces}>Pause</button> */}
                            {/* <button className={`${props.text.length > 0 ?'custom-button' : 'pointer-events-none custom-button-disabled'} custom-button`} onClick={handleExtraSpaces}>Extract Links</button>
                            <button className={`${props.text.length > 0 ?'custom-button' : 'pointer-events-none custom-button-disabled'} custom-button`} onClick={handleExtraSpaces}>Extract Emails</button>
                            <button className={`${props.text.length > 0 ?'custom-button' : 'pointer-events-none custom-button-disabled'} custom-button`} onClick={handleExtraSpaces}>Remove Special Characters</button>
                            <button className={`${props.text.length > 0 ?'custom-button' : 'pointer-events-none custom-button-disabled'} custom-button`} onClick={handleExtraSpaces}>Undo</button>
                            <button className={`${props.text.length > 0 ?'custom-button' : 'pointer-events-none custom-button-disabled'} custom-button`} onClick={handleExtraSpaces}>Redo</button> */}
                        </div>
                    </form>
                </div>
                <div className="container">
                    <h1 className='font-bold p-2 bg-red-300 w-fit rounded-md'>Your Text summary</h1>
                    <p className={`my-3 mx-1 ${props.mode === 'dark' ? 'text-white' : 'text-black'}`}>
                        Total Words:
                        <span className='p-2 rounded-sm bg-blue-400 text-amber-900'>{props.text.split(/\s+/).filter((element) => { return element.length !== 0}).length}</span> and total characters: <span className='p-2 rounded-sm bg-blue-400 text-amber-900'>{props.text.length}
                        </span>
                    </p>
                    <p className={`time-to-read my-6 mx-1 ${props.mode === 'dark' ? 'text-white' : 'text-black'}`}>Read Time: <span className='p-2 rounded-sm bg-blue-400 text-amber-900'>{0.008 * props.text.split(" ").filter((element) => { return element.length !== 0}).length}</span>  </p>
                </div>
                <div className="generated-text-area">
                    <h1 className='text-2xl rounded-md font-bold bg-red-300 w-fit h-fit p-2'>Converted Text</h1>
                    <div className="converted-box">
                        <p className={`mt-2 w-fit h-fit p-3 bg-[#4f769b] rounded-md ${props.mode === 'dark' ? 'text-white' : 'text-white'} `} style={{ whiteSpace: 'pre-line' }}> {props.text.split(/\s+/).filter((element) => { return element.length !== 0}).length > 0 ? props.text : 'Please enter text to preview.'}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

Textform.propTypes = {
    heading: PropTypes.string.isRequired
}

Textform.defaultProps = {
    heading: "Enter heading"
}