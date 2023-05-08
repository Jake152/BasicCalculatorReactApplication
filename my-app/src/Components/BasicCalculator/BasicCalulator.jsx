import React, { useEffect, useState } from 'react'
import Input from '../../Common/Input/Input'
import ButtonContainer from './ButtonContainer/ButtonContainer';

import './BasicCalculator.css'

export default function BasicCalculator() {
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        console.log(inputValue);
    }, [inputValue]);

    return (
        <div id='basic-calculator'>
            <Input id='basic-calculator-input' type='text' inputValue={inputValue} setInputValue={setInputValue} />
            <ButtonContainer />
        </div>
    )
}