import React, { useEffect } from 'react'

import './AppHeader.css'

export default function AppHeader() {
    useEffect(() => {
        console.log('This is the app header');
    }, [])

    return (
        <div id='app-header-container'>
            <header id='app-header'>
                Basic Calculator
            </header>
        </div>
    )
}