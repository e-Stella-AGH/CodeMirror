import { useState, useEffect } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';

export function CodeMirrorComponent(props) {

    const [code, setCode] = useState('');
    const [mode, setMode] = useState('jsx');

    const handleSubmit = () => {
        console.log(code)
    }

    const handleModeChange = ({target}) => {
        setMode(target.value)
    }

    return(
        <div style={{width: "80%", height: "300px", marginLeft:"auto", marginRight:"auto"}}>
            <CodeMirror
                value={code}
                options={{
                    theme: 'monokai',
                    keyMap: 'sublime',
                    mode: mode
                }}
                onChange={(editor, data, value) => {
                    setCode(editor.getValue())
                }}
            />
            <select onChange={handleModeChange} value={mode}>
                <option value="python">Python</option>
                <option value="jsx">JSX</option>
                <option value="java">Java</option>
                <option value="c">C</option>
                <option value="go">Go</option>
            </select>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}