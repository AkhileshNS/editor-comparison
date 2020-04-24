import React from 'react';
import { Link } from 'react-router-dom';
import { themes, languages, options as opts } from './Monaco.constants';
import Editor, { monaco } from '@monaco-editor/react';

const Monaco = () => {
  const [themeValue, setTheme] = React.useState('dark');
  const [lang, setLang] = React.useState('dockerfile');

  /* React.useEffect(() => {
    (async () => {
      try {
        const instance = await monaco.init();

        for (let theme in themes) {
          const themeData = await import(
            `monaco-themes/themes/${themes[theme]}.json`
          );
          instance.editor.defineTheme(theme, themeData);
        }

        setTheme('cobalt');
      } catch (error) {
        console.error(
          'An error occurred during initialization of Monaco: ',
          error
        );
      }
    })();
  }, []); */

  let options = [];
  for (let theme in themes) {
    options.push(<option key={theme}>{theme}</option>);
  }

  return (
    <div className='monaco'>
      <div style={{ marginBottom: '16px' }}>
        <Link to='/'>Back to Homepage</Link>
        {/* <select
          style={{ marginLeft: '16px' }}
          value={themeValue}
          onChange={({ target }) => setTheme(target.value)}>
          {options}
        </select> */}
        <select
          style={{ marginLeft: '16px' }}
          value={lang}
          onChange={({ target }) => setLang(target.value)}>
          {languages.map((language) => (
            <option key={language}>{language}</option>
          ))}
        </select>
      </div>
      <Editor
        theme={themeValue}
        language={lang}
        loading={'Loading...'}
        options={opts}
      />
    </div>
  );
};

export default Monaco;
