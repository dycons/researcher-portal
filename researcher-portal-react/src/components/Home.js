import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import './Home.css';

/*
Returns a component displaying a button that allows Katsu clinical
and phenotypic metadata to be browsed when clicked on.
*/
function Home() {
  document.title = 'Home';

  return (
    <div className='home'>
      <Button size='lg' variant='katsu' as={Link} to='/katsu'>
        Browse Katsu clinical and phenotypic metadata
      </Button>
    </div>
  );
}

export default Home;