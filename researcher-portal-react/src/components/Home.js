import React from 'react';
import { Link } from 'react-router-dom';

/*
Returns a component displaying a button that allows Katsu clinical
and phenotypic metadata to be browsed when clicked on.
*/
function Home() {
  return (
    <Link to='/katsu'>
      Browse Katsu clinical and phenotypic metadata
    </Link>
  );
}

export default Home;