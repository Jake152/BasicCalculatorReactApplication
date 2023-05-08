import React from 'react'

import './AppFooter.css'

export default function AppFooter() {
    return (
        <div id='app-footer-container'>
            <div id='app-description'>
                Calculator App
            </div>
            <div id='credentials-info'>
                <span id='credentials-info-label'>Creator GitHub: </span>
                <a
                    className='App-link'
                    href='https://github.com/Jake152'
                    target='_blank'
                    rel='noopener noreferrer'
                    title='Visit my GitHub profile'
                >
                    github.com/Jake152
                </a>
            </div>
        </div>
    )
}