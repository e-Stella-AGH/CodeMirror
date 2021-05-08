import React from 'react';
import { TestCase } from './TestCase'
import { testStatus } from './api/api';


export const TestsList = (props) => {
    
    const prepareTests = () => {
        return props.tests.map( (test, idx) => {
            return <TestCase key={idx} test={test} idx={idx}/>
        } )
    }

    return(
        <div>
            {prepareTests()}
        </div>
    )
}
