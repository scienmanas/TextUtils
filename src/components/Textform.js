import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function Textform(props) {
    const [text, setText] = useState("");
    const handleUpClick = (event) => {
        event.preventDefault();  // To prevent the reloading of the page
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text changed to upper case", "success");
        // console.log("Uppercase was clicked");
        // setText("Hello World");``
    }

    const handleOnChnage = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }

    const ClearText = (event) => {
        event.preventDefault();
        setText("");
        props.showAlert("Text cleared!","success");
    }

    const ChangeToLowerCase = (event) => {
        event.preventDefault();
        setText(text.toLowerCase());
        props.showAlert("Text changed to lower case", "success");
    }

    const HandleCopy = (event) => {
        event.preventDefault();
        let texta = document.getElementById("myBox");
        // texta.select();
        navigator.clipboard.writeText(texta.value)
        props.showAlert("Text copied to clipboard", "success");
    }

    const handleExtraSpaces = (event) => {
        event.preventDefault();
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success");
    }

    // text = "new text";       //Wrong way to change the state
    // setText("new text");
    return (
        <>
            <div className="conatiner w-fit mt-6 mx-6">
                <div className='flex flex-col mt-6 ml-1 w-fit'>
                    <h1 className='text-4xl w-fit h-fit' style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >{props.heading}</h1>
                    <form action="" className='w-fit flex flex-col my-6 gap-y-6'>
                        <label htmlFor="">
                            <textarea className='rounded-lg outline-1 active:outline-blue-500 will-change-auto w-[100%] h-48' type="text" name="" id="myBox" placeholder="Enter the text" value={text} onChange={handleOnChnage} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} ></textarea>
                            {/* <input className='rounded-lg outline-1 active:outline-blue-500' type="text" name="" id="" placeholder="Enter the text" value={text} onChange={handleOnChnage} /> */}
                        </label>
                        <div className="buttons flex gap-x-2 gap-y-2 w-fit h-fit flex-wrap">
                            <button className='w-fit px-6 hover:bg-green-400 py-3 text-white font-bold rounded-xl bg-green-500' onClick={handleUpClick} >Convert to Uppercase</button>
                            <button className='w-fit px-6 hover:bg-green-400 py-3 text-white font-bold rounded-xl bg-green-500' onClick={ChangeToLowerCase}>Change to Lower Case</button>
                            <button className='w-fit px-6 hover:bg-green-400 py-3 text-white font-bold rounded-xl bg-green-500' onClick={ClearText}>Clear Text</button>
                            <button className='w-fit px-6 hover:bg-green-400 py-3 text-white font-bold rounded-xl bg-green-500' onClick={HandleCopy}>Copy Text</button>
                            <button className='w-fit px-6 hover:bg-green-400 py-3 text-white font-bold rounded-xl bg-green-500' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                        </div>
                    </form>
                </div>
                <div className="container">
                    <h1 className='font-bold p-2 bg-red-200 w-fit rounded-md'>Your Text summary</h1>
                    <p className={`my-3 mx-1 ${props.mode === 'dark' ? 'text-white' : 'text-black'}`}>Total Words: <span className='p-2 rounded-sm bg-blue-400 text-amber-900'>{text.split(' ').length}</span> and total characters: <span className='p-2 rounded-sm bg-blue-400 text-amber-900'>{text.length}</span>  </p>
                    <p className={`time-to-read my-6 mx-1 ${props.mode === 'dark' ? 'text-white' : 'text-black'}`}>Read Time: <span className='p-2 rounded-sm bg-blue-400 text-amber-900'>{0.008 * text.split(" ").length}</span>  </p>
                </div>
                <div className="generated-text-area">
                    <h1 className='text-2xl rounded-md font-bold bg-red-300 w-fit h-fit p-2'>Converted Text</h1>
                    <div className="converted-box">
                        <p className={`mt-2 w-fit h-fit p-3 rounded-md ${props.mode === 'dark' ? 'text-white' : 'text-black', props.mode === 'dark'? 'bg-green-400': 'bg-slate-500'}`}> {text.length > 0? text: 'Please enter text to preview.'}
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