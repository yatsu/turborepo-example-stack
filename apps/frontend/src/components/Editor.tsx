import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import CodeMirror from '@uiw/react-codemirror';
import { useState } from 'react';
import styles from './Editor.module.css';
import Preview from './Preview';

const initialCode = `## Title

\`\`\`jsx
function Demo() {
  return <div>demo</div>
}
\`\`\`

\`\`\`bash
# Not dependent on uiw.
npm install @codemirror/lang-markdown --save
npm install @codemirror/language-data --save
\`\`\`

[weisit ulr](https://uiwjs.github.io/react-codemirror/)

\`\`\`go
package main
import "fmt"
func main() {
  fmt.Println("Hello, 世界")
}
\`\`\`
`;

const Editor = () => {
  const [code, setCode] = useState(initialCode);

  return (
    <div className={styles.editor}>
      <div className={styles.editorContent}>
        <CodeMirror
          value={code}
          extensions={[markdown({ base: markdownLanguage, codeLanguages: languages })]}
          height="100%"
          maxHeight="100%"
          width="100%"
          maxWidth="100%"
          onChange={(c) => setCode(c)}
        />
        <Preview code={code} />
      </div>
    </div>
  );
};

export default Editor;
