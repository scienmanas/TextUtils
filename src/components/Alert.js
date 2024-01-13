import React from 'react'
import './styles/alert.css'

const capitalize = (word) => {
    const lower = word.toLowerCase()
    return lower.charAt(0).toUpperCase() + lower.slice(1);
}

export default function Alert(props) {
    return (
        props.alert && <div id="alert-1" className={`flex items-center p-4 mb-4 text-blue-800 rounded-lg ${props.alert.type}`} role="alert">
            <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="sr-only">Info</span>
            <div className="ms-3 text-sm font-medium">
                <span className='font-bold'>{capitalize(props.alert.type)}</span> :{props.alert.msg}
            </div>
        </div>
    )
}