import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home'>
      <p>The following editors are available for trying in this website</p>
      <Link to='/ace'>Ace Editor</Link>
      <br />
      <Link to='/monaco'>Monaco Editor</Link>
      <br />
      <Link to='/codemirror'>Codemirror Editor</Link>
    </div>
  );
};

export default Home;
