import React from 'react';
import { Link } from 'react-router-dom';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';

import './Codemirror.imports';
import { themes, languages } from './Codemirror.constants';
import { getModeForPath } from 'ace-builds/src-min-noconflict/ext-modelist';

const Codemirror = () => {
  const [value, setValue] = React.useState('');
  const [themeValue, setTheme] = React.useState(themes[0]);
  const [lang, setLang] = React.useState(languages[0]);

  const manageFiles = (e) => {
    console.log(e.target.files[0]);
    let reader = new FileReader();
    reader.onload = (function (theFile) {
      return function (e) {
        setValue(e.target.result);
      };
    })(e.target.files[0]);
    reader.readAsText(e.target.files[0]);

    setLang(getModeForPath(e.target.files[0].name).name);
  };

  return (
    <div className='codemirror'>
      <div style={{ marginBottom: '32px' }}>
        <Link to='/'>Back to Homepage</Link>
        <input
          style={{ marginLeft: '16px' }}
          type='file'
          onChange={manageFiles}
        />
        <select
          style={{ marginLeft: '16px' }}
          value={themeValue}
          onChange={({ target }) => setTheme(target.value)}>
          {themes.map((theme) => (
            <option key={theme}>{theme}</option>
          ))}
        </select>
        <select
          style={{ marginLeft: '16px' }}
          value={lang}
          onChange={({ target }) => setLang(target.value)}>
          {languages.map((language) => (
            <option key={language}>{language}</option>
          ))}
        </select>
      </div>
      <CodeMirror
        value={value}
        options={{
          mode: lang,
          theme: themeValue,
          lineNumbers: true,
        }}
        onChange={(_, __, newValue) => setValue(newValue)}
      />
    </div>
  );
};

export default Codemirror;
