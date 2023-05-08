import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap';
import Input from '../../Common/Input/Input'
import Button from '../../Common/Button/Button'

import './BasicCalculator.css'

export default function BasicCalculator() {
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        console.log(inputValue);
    }, [inputValue]);

    return (
        <div id='basic-calculator'>
            <Input id='basic-calculator-input' type='text' inputValue={inputValue} setInputValue={setInputValue} />
            <Row id='basic-calculator-row-1'>
                <Button id='clear-all-btn' label='Clear' onClick={console.log('Clear all btn clicked')}/>
                <Button id='postive-negative-btn' label='+/-' onClick={console.log('+/- btn clicked')}/>
                <Button id='divide-btn' label='/' onClick={console.log('divide btn clicked')}/>
                <Button id='percentage-btn' label='%' onClick={console.log('percentage btn clicked')}/>
            </Row>
        </div>
    )
}