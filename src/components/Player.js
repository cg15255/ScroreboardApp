import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import Counter from './Counter';
import Crown from './Crown';

class Player extends PureComponent {

  static propTypes = {
    changeScore: propTypes.func, 
    removePlayer: propTypes.func,
    name: propTypes.string,
    score: propTypes.number,
    id: propTypes.number,
    index: propTypes.number
  };

  const 

  render() {
    const {name, id, score, index, removePlayer, changeScore, isWinning } = this.props;
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer( id )}>✖</button>
          <Crown isWinning={ isWinning } />
          { name }
        </span>
  
        <Counter 
            score={ score }
            index={ index }
            changeScore={ changeScore }
        />
      </div>
    );
  }    
}

  export default Player;