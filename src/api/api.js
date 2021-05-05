var paiza_io = require('paiza-io')

export const runCode = (code, language) => {
    paiza_io(language, code, '', (error, result) => {
        if(error) throw error
        console.log(result.stdout)
        console.log(result.stderr)
    })
}