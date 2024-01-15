import React from 'react'
import './styles/loading.css'

export default function Loading(props) {
    if (props.loading) {
    document.body.style.backgroundColor = "#34495e"
    return (
        <div className="loader">
            <div className="ring ">
                Loading
                <span id="loader-span"></span>
            </div>
        </div>
    )
    }
}
