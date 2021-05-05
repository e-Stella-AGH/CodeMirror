import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';

export function CodeMirrorPresentation(props) {

    const mode = props.mode

    const handleSubmit = () => {
        const code = document.getElementById("codeMirror");
        console.log(code)
    }

    return(
        <div style={{width: "80%", height: "300px", marginLeft:"auto", marginRight:"auto"}}>
            <CodeMirror
                id="codeMirror"
                value={''}
                options={{
                    theme: 'monokai',
                    keyMap: 'sublime',
                    mode: mode
                }}
                onChange={(editor, data, value) => {
                    console.log(editor, data, value)
                }}
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

CodeMirrorPresentation.defaultProps = {
    mode: 'jsx'
}