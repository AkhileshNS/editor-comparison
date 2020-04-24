import React from 'react';
import { Link } from 'react-router-dom';
import { themes, languages, options } from './Monaco.constants';
import Editor from 'react-monaco-editor';
import { getModeForPath } from 'ace-builds/src-min-noconflict/ext-modelist';

const Monaco = () => {
  const [value, setValue] = React.useState('');
  const [language, setLanguage] = React.useState('javascript');
  const [theme, setTheme] = React.useState('vs-dark');

  const addThemes = async (_, e) => {
    try {
      for (let theme in themes) {
        if (theme !== 'vs-light' && theme !== 'vs-dark') {
          let data = await import(
            'monaco-themes/themes/' + themes[theme] + '.json'
          );
          e.editor.defineTheme(theme, data);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const manageFiles = (e) => {
    console.log(e.target.files[0]);
    let reader = new FileReader();
    reader.onload = (function (theFile) {
      return function (e) {
        setValue(e.target.result);
      };
    })(e.target.files[0]);
    reader.readAsText(e.target.files[0]);

    setLanguage(getModeForPath(e.target.files[0].name).name);
  };

  return (
    <div className='monaco'>
      <div style={{ marginBottom: '16px' }}>
        <Link to='/'>Back to Homepage</Link>
        <input
          style={{ marginLeft: '16px' }}
          type='file'
          onChange={manageFiles}
        />
        <select
          style={{ marginLeft: '16px' }}
          value={theme}
          onChange={({ target }) => setTheme(target.value)}>
          {Object.keys(themes).map((_theme) => (
            <option key={_theme}>{_theme}</option>
          ))}
        </select>
        <select
          style={{ marginLeft: '16px' }}
          value={language}
          onChange={({ target }) => setLanguage(target.value)}>
          {languages.map((language) => (
            <option key={language}>{language}</option>
          ))}
        </select>
      </div>
      <Editor
        height='90vh' // By default, it fully fits with its parent
        theme={theme}
        fontSize='24px'
        language={language}
        loading={'Loading...'}
        options={options}
        value={value}
        onChange={(newValue) => setValue(newValue)}
        editorDidMount={addThemes}
      />
    </div>
  );
};

export default Monaco;
