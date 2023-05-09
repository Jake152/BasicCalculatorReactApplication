import React from 'react'
import { Row } from 'react-bootstrap';
import Button from '../../../Common/Button/Button';

import './ButtonContainer.css'

export default function ButtonContainer({ handleCalculationChange, handleChange, handleClearInput, handlePercentage, handlePositiveNegative, handleResult }) {
    return (
        <div id='btn-container'>
            <Row id='basic-calculator-row-1' className='basic-calculator-row'>
                <Button id='clear-all-btn' label='Clear' onClick={() => handleClearInput()}/>
                <Button id='postive-negative-btn' label='+/-' onClick={() => handlePositiveNegative()}/>
                <Button id='percentage-btn' label='%' onClick={() => handlePercentage()}/>
                <Button id='divide-btn' label='/' onClick={() => handleCalculationChange('/')}/>
            </Row>
            <Row id='basic-calculator-row-2' className='basic-calculator-row'>
                <Button id='num-seven-btn' label='7' onClick={() => handleChange('7')}/>
                <Button id='num-eight-btn' label='8' onClick={() => handleChange('8')}/>
                <Button id='num-nine-btn' label='9' onClick={() => handleChange('9')}/>
                <Button id='multiplication-btn' label='X' onClick={() => handleCalculationChange('x')}/>
            </Row>
            <Row id='basic-calculator-row-3' className='basic-calculator-row'>
                <Button id='num-four-btn' label='4' onClick={() => handleChange('4')}/>
                <Button id='num-five-btn' label='5' onClick={() => handleChange('5')}/>
                <Button id='num-six-btn' label='6' onClick={() => handleChange('6')}/>
                <Button id='subtraction-btn' label='-' onClick={() => handleCalculationChange('-')}/>
            </Row>
            <Row id='basic-calculator-row-4' className='basic-calculator-row'>
                <Button id='num-one-btn' label='1' onClick={() => handleChange('1')}/>
                <Button id='num-two-btn' label='2' onClick={() => handleChange('2')}/>
                <Button id='num-three-btn' label='3' onClick={() => handleChange('3')}/>
                <Button id='addition-btn' label='+' onClick={() => handleCalculationChange('+')}/>
            </Row>
            <Row id='basic-calculator-row-5' className='basic-calculator-row'>
                <Button id='num-0-btn' label='0' onClick={() => handleChange('0')}/>
                <Button id='period-btn' label='.' onClick={() => handleChange('.')}/>
                <Button id='equals-btn' label='=' onClick={() => handleResult('=')}/>
            </Row>
        </div>
    )
}