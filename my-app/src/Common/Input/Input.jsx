import React from 'react'

import './Input.css'

export default function Input({ id, type, inputValue, setInputValue }) {
    return (
        <input id={id} type={type} value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
    )
}