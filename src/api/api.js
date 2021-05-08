var paiza_io = require('paiza-io')

export async function runCode(code, language, testsQuantity) {
    for(let i=0; i<testsQuantity; i++){
        fetch('http://localhost:8080/runTests/' + i, {
            method: 'POST',
            body: JSON.stringify({
                code: code,
                language: language
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => console.log(data))
    }
}

export const testStatus = Object.freeze({ PENDING: 1, SUCCESS: 2, FAILURE: 3 })

export async function getNumberOfTests(id){
    return fetch('http://localhost:8080/numberOfTests/' + id)
        .then(response => response.json())
}