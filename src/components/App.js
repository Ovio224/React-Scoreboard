import React, {
    Component
} from 'react';
import Proptypes from 'prop-types';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

class App extends Component {

    static Proptypes = {
        handleAddPlayer: Proptypes.func.isRequired,
        handleRemovePlayer: Proptypes.func.isRequired,
        handleScoreChange: Proptypes.func.isRequired,
    }

    state = {
        players: [{
                name: "Ovi",
                score: 0,
                id: 5,
            },
            {
                name: "Guil",
                score: 0,
                id: 1
            },
            {
                name: "Treasure",
                score: 0,
                id: 2
            },
            {
                name: "Ashley",
                score: 0,
                id: 3
            },
            {
                name: "James",
                score: 0,
                id: 4
            }
        ]
    };
    handleScoreChange = (index, delta) => {
        this.setState(prevState => ({
            score: prevState.players[index].score += delta
        }));
        this.highestScore();
    }

    highestScore = () => {
        const scores = this.state.players.map(player => player.score);
        const max = Math.max(...scores);
        if (max) {
            return max;
        }
        return null;
    }


    // player id counter
    prevPlayerId = 5;

    handleAddPlayer = (name) => {
        this.setState(prevState => {
            return {
                players: [
                    ...prevState.players,
                    {
                        name,
                        score: 0,
                        id: this.prevPlayerId += 1
                    }
                ]
            }

        });
    }

    handleRemovePlayer = (id) => {
        this.setState(prevState => ({
            players: prevState.players.filter(p => p.id !== id)
        }));
    }
    render(){
        const highScore = this.highestScore();
		return (
			<div className="scoreboard">
					<Header players={this.state.players} />

					{/* Players list */}
					{this.state.players.map((player, index) =>
						<Player
						index={index}
						name={player.name}
						score={player.score}
						changeScore={this.handleScoreChange}
						key={player.id.toString()}
						id={player.id}
						removePlayer={this.handleRemovePlayer}
                        isHighScore={highScore === player.score}
						/>
					)}

					<AddPlayerForm addPlayer={this.handleAddPlayer}/>
			</div>
		);
	}
}

export default App
