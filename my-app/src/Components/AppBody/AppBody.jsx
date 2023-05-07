import React, { useEffect } from 'react'

import './AppBody.css'

export default function AppBody() {
    useEffect(() => {
        console.log('This is the app body');
    }, [])

    return (
        <div id='app-body-container'>
            <body id='app-body'>
                App body
            </body>
        </div>
    )
}