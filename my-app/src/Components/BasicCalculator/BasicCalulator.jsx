import React, { useEffect, useState } from 'react'
import Input from '../../Common/Input/Input'
import ButtonContainer from './ButtonContainer/ButtonContainer';

import './BasicCalculator.css'

export default function BasicCalculator() {
    const [inputValue, setInputValue] = useState('0');
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
        setInputValue(calculationInput);
    }

    const handleClearInput = () => {
        setInputValue('0');
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

    const handlePercentage = () => {
        const num = parseFloat(inputValue);
        setInputValue(num / 100);
    };

    const handleResult = () => {
        if (initialValue && calculationValue && nextValue) {
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

        const resultString = Number(result.toFixed(10)).toString();
        console.log(resultString);
        setInputValue(resultString);
        setInitialValue(resultString);
        setNextValue(''); // Comment this out to be able to keep clicking =
        }
    };
      

    useEffect(() => {
        if (initialValue) {
            setInputValue(initialValue);
        }
    }, [initialValue]);

    useEffect(() => {
        if (nextValue) {
            setInputValue(nextValue);
        }
    }, [nextValue]);

    return (
        <div id='basic-calculator'>
            <Input id='basic-calculator-input' type='text' inputValue={inputValue} setInputValue={setInputValue} />
            <ButtonContainer 
                handleCalculationChange={handleCalculationChange} 
                handleChange={handleChange} 
                handleClearInput={handleClearInput} 
                handlePercentage={handlePercentage}
                handlePositiveNegative={handlePositiveNegative} 
                handleResult={handleResult}
            />
        </div>
    )
}