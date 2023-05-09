import React, { useEffect, useState } from 'react'
import Input from '../../Common/Input/Input'
import ButtonContainer from './ButtonContainer/ButtonContainer';

import './BasicCalculator.css'

export default function BasicCalculator() {
    const [inputValue, setInputValue] = useState('');
    const [nextValue, setNextValue] = useState('');
    const [initialValue, setInitialValue] = useState('');
    const [calculationValue, setCalculationValue] = useState('');

    const handleChange = (input) => {
        if (calculationValue) {
            setNextValue(nextValue + input);
        } else {
            setInitialValue(initialValue + input);
        }
    }

    const handleCalculationChange = (calculationInput) => {
        setCalculationValue(calculationInput);
        setInputValue('');
    }

    const handleClearInput = () => {
        setInputValue('');
        setNextValue('');
        setInitialValue('');
        setCalculationValue('');
    }

    const handlePositiveNegative = () => {
        if (inputValue) {
            const firstChar = inputValue.charAt(0);
            const restOfString = inputValue.slice(1);
            if (calculationValue) {
                setNextValue(firstChar === '-' ? restOfString : '-' + nextValue);
            } else {
                setInitialValue(firstChar === '-' ? restOfString : '-' + initialValue);
            }
        }
    }

    const handleResult = () => {
        const num1 = parseFloat(initialValue);
        const num2 = parseFloat(nextValue);
        let result;

        switch (calculationValue) {
            case '+':
            result = num1 + num2;
            break;
            case '-':
            result = num1 - num2;
            break;
            case 'x':
            result = num1 * num2;
            break;
            case '/':
            result = num1 / num2;
            break;
            default:
            console.error('Invalid calculation value');
            return;
        }

        const resultString = parseFloat(result.toFixed(10)).toString();
        console.log(resultString);
        setInputValue(resultString);
    };
      

    useEffect(() => {
        setInputValue(initialValue);
    }, [initialValue]);

    useEffect(() => {
        setInputValue(nextValue);
    }, [nextValue]);

    return (
        <div id='basic-calculator'>
            <Input id='basic-calculator-input' type='text' inputValue={inputValue} setInputValue={setInputValue} />
            <ButtonContainer 
                handleCalculationChange={handleCalculationChange} 
                handleChange={handleChange} 
                handleClearInput={handleClearInput} 
                handlePositiveNegative={handlePositiveNegative} 
                handleResult={handleResult}
            />
        </div>
    )
}