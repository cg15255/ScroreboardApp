import React from 'react';
import propTypes from 'prop-types';
import Stats from './Stats';
import Stopwatch from './Stopwatch';

const Header = ({ players, title }) => {
  return (
    <header>
      <Stats players={ players } />
      <h1>{ title }</h1>
      <Stopwatch />
    </header>
  );
}

Header.propTypes = {
  title: propTypes.string,
  players: propTypes.arrayOf(propTypes.object)
};

Header.defaultProps = {
  title: 'Scoreboard'
}

export default Header;
