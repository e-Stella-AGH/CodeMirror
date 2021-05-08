import React from 'react';
import { testStatus } from './api/api';

export const TestCase = (props) => {
    
    const getViewByStatus = (status) => {
        switch(status){
            case testStatus.PENDING:
                return "Pending"
            case testStatus.FAILURE:
                return "FAILURE"
            case testStatus.SUCCESS:
                return "SUCCESS"
        }
    }

    return(
        <div>{props.test}, {props.idx}</div>
    )
}
