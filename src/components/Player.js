import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import Icon from './Icon';

class Player extends PureComponent {

    static propTypes = {
        changeScore: PropTypes.func,
        removePlayer: PropTypes.func,
        name: PropTypes.string,
        score: PropTypes.number,
        id: PropTypes.number,
        index: PropTypes.number,
        isHighScore: PropTypes.bool
    };

    render() {
        const {
            name,
            id,
            score,
            index,
            removePlayer,
            changeScore,
            isHighScore
        } = this.props;
        return (
            <div className="player">
                <span className="player-name">
                <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
                <Icon isHighScore={isHighScore}/>
                    {name}
                </span>
                <Counter 
                index={index}
                score={score}
                changeScore={changeScore} />
            </div>
        );
    }
}



export default Player;