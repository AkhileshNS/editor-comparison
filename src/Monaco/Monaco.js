import React from 'react';
import { Link } from 'react-router-dom';
import { themes, languages, options } from './Monaco.constants';
import Editor from 'react-monaco-editor';

const Monaco = () => {
  const [language, setLanguage] = React.useState('javascript');
  const [theme, setTheme] = React.useState('vs-dark');

  return (
    <div className='monaco'>
      <div style={{ marginBottom: '16px' }}>
        <Link to='/'>Back to Homepage</Link>
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
        language={language}
        loading={'Loading...'}
        options={options}
      />
    </div>
  );
};

export default Monaco;
