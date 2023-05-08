import React from 'react'
import { Row } from 'react-bootstrap';
import Button from '../../../Common/Button/Button';

import './ButtonContainer.css'

export default function ButtonContainer() {
    return (
        <div id='btn-container'>
            <Row id='basic-calculator-row-1' className='basic-calculator-row'>
                <Button id='clear-all-btn' label='Clear' onClick={console.log('Clear all btn clicked')}/>
                <Button id='postive-negative-btn' label='+/-' onClick={console.log('+/- btn clicked')}/>
                <Button id='percentage-btn' label='%' onClick={console.log('percentage btn clicked')}/>
                <Button id='divide-btn' label='/' onClick={console.log('divide btn clicked')}/>
            </Row>
            <Row id='basic-calculator-row-2' className='basic-calculator-row'>
                <Button id='num-seven-btn' label='7' onClick={console.log('7 btn clicked')}/>
                <Button id='num-eight-btn' label='8' onClick={console.log('8 btn clicked')}/>
                <Button id='num-nine-btn' label='9' onClick={console.log('9 btn clicked')}/>
                <Button id='multiplication-btn' label='X' onClick={console.log('Multiplication btn clicked')}/>
            </Row>
            <Row id='basic-calculator-row-3' className='basic-calculator-row'>
                <Button id='num-four-btn' label='4' onClick={console.log('4 btn clicked')}/>
                <Button id='num-five-btn' label='5' onClick={console.log('5 btn clicked')}/>
                <Button id='num-six-btn' label='6' onClick={console.log('6 btn clicked')}/>
                <Button id='subtraction-btn' label='-' onClick={console.log('Subtraction btn clicked')}/>
            </Row>
            <Row id='basic-calculator-row-4' className='basic-calculator-row'>
                <Button id='num-one-btn' label='1' onClick={console.log('1 btn clicked')}/>
                <Button id='num-two-btn' label='2' onClick={console.log('2 btn clicked')}/>
                <Button id='num-three-btn' label='3' onClick={console.log('3 btn clicked')}/>
                <Button id='addition-btn' label='+' onClick={console.log('Addition btn clicked')}/>
            </Row>
            <Row id='basic-calculator-row-5' className='basic-calculator-row'>
                <Button id='num-0-btn' label='0' onClick={console.log('0 btn clicked')}/>
                <Button id='period-btn' label='.' onClick={console.log('Period btn clicked')}/>
                <Button id='equals-btn' label='=' onClick={console.log('Equals btn clicked')}/>
            </Row>
        </div>
    )
}