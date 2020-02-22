import { useState } from 'react'
import { NextPage } from 'next'
import { Controlled as CodeMirror } from 'react-codemirror2'
import Layout from '../components/ui/Layout'

try {
  require('codemirror/lib/codemirror.css')
  require('codemirror/theme/material.css')
  require('codemirror/mode/htmlmixed/htmlmixed.js')
} catch (e) {
}

const codePlaceholder = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Hello Arweave</title>
</head>
<body>
  <h1>Hello world!</h1>
</body>
</html>
`

const Playground: NextPage = () => {
  const [code, setCode] = useState(codePlaceholder)
  const [isCompling, setIsCompling] = useState(false)
  const [isDeployed, setIsDeployed] = useState(false)

  function onDeploy() {
    setIsCompling(true)
    setIsDeployed(false)

    setTimeout(() => { setIsCompling(false), setIsDeployed(true) }, 2000 );
  }

  return (
    <Layout className="code-playground">
      <div className="code-playground__inner">
        <div className="header">
          <h1>code playground</h1>
          <button onClick={onDeploy}>
            <div className="arrow-right" />DEPLOY
          </button>
        </div>
        <div className="editor-container">
          <CodeMirror
            value={code}
            options={{
              mode: 'htmlmixed',
              theme: 'material',
              lineNumbers: true,
              autofocus: true,
              tabSize: 2,
              showCursorWhenSelecting: true,
              cursorHeight: 0.85
            }}
            onBeforeChange={(editor, data, value) => {
              setCode(value);
            }}
          />
        </div>
        <hr />
        <div className="console-header">
          <h4>console</h4>
          <div className="statistic">
            {!isDeployed && <p>file size: -</p>}
            {!isDeployed && <p>price: -</p>}
            {isDeployed && <p>file size: 10kb</p>}
            {isDeployed && <p>price: 0.003AR</p>}
          </div>
        </div>
        <ul className="console">
          {!isCompling && !isDeployed && <li/>}
          {!isCompling && !isDeployed && <li/>}
          {isCompling && <li>your code is deploying...</li>}
          {isCompling && <li/>}
          {isDeployed &&<li>your code is deployed here <a href="https://google.com">https://arweave.net/:id</a></li>}
          {isDeployed && <li><span className="comment">// wait few minutes before clicking the link</span></li>}
          <li/>
          <li/>
          <li/>
        </ul>
      </div>
    </Layout>
  )
};

export default Playground;