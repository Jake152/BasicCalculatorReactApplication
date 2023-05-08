import React from 'react'

import './Button.css'

export default function Button({ id, label, onClick }) {
    return (
        <button className='btn' id={id} onClick={onClick}>
            {label}
        </button>
    )
}