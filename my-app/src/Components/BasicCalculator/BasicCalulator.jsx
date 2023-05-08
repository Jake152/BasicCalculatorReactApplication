import React, { useEffect, useState } from 'react'
import Input from '../../Common/Input/Input'
import ButtonContainer from './ButtonContainer/ButtonContainer';

import './BasicCalculator.css'

export default function BasicCalculator() {
    // Maybe do currentValue, calculationType, CalculationNumber, (On enter currentvalue changes based off calculation)
    // const [calculationType, setCalculationType] = useState('');
    const [inputValue, setInputValue] = useState(0);

    const handleChange = (calculationInput) => {
        console.log(calculationInput);
    }

    const handleClearInput = () => {
        setInputValue(0);
    }

    const handlePositiveNegative = () => {
        if (inputValue) {
            setInputValue(inputValue >= 0 ? -Math.abs(inputValue) : Math.abs(inputValue));
        }
      }
      

    return (
        <div id='basic-calculator'>
            <Input id='basic-calculator-input' type='number' inputValue={inputValue} setInputValue={setInputValue} />
            <ButtonContainer handleChange={handleChange} handleClearInput={handleClearInput} handlePositiveNegative={handlePositiveNegative} />
        </div>
    )
}