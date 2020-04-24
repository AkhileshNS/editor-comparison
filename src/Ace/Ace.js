import React from 'react';
import { Link } from 'react-router-dom';
import AceEditor from 'react-ace';

import './Ace.imports';
import { themes, languages } from './Ace.constants';
import { getModeForPath } from 'ace-builds/src-min-noconflict/ext-modelist';

const Ace = () => {
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
    <div className='ace'>
      <div>
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
      <AceEditor
        style={{
          width: '100%',
          height: 'calc(100% - 38px)',
          marginTop: '16px',
        }}
        fontSize='20px'
        mode={lang}
        theme={themeValue}
        value={value}
        onChange={(newValue) => setValue(newValue)}
        name='ACE_EDITOR'
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
        }}
        showPrintMargin={false}
      />
    </div>
  );
};

export default Ace;
