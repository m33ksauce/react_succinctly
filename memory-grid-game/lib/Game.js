import React from 'react';
import _ from 'lodash';
import Row from './Row';
import Cell from './Cell';
import Footer from './Footer';

class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.readyState();
    }

    readyState() { 
        return {
            gameState: 'ready',
            wrongGuesses: [],
            correctGuesses: [],
            timeRemaining: this.props.allowedGuessTimeSeconds,
            activeCells: []
        }
    };

    componentWillMount() {
        this.setupNewGame();
        this.startNewGame();
    }

    componentDidUpdate() {
        if (this.gameTimer != undefined && (this.state.timeRemaining < 0 || ["won", "lost"].indexOf(this.state.gameState) >= 0)) {
            clearInterval(this.gameTimer);
        }
    }

    render() {
        let showActiveCells =  ["memorize", "lost"].indexOf(this.state.gameState) >= 0;
        return (
            <div className="grid">
                {this.matrix.map((row, ri) => (
                    <Row key={ri}>
                        {row.map(cellId => <Cell key={cellId} id={cellId} 
                            showActiveCells={showActiveCells} activeCells={this.state.activeCells}
                            recordGuess={this.recordGuess.bind(this)} {...this.state} />)}
                    </Row>
                ))}
                <Footer {...this.state}
                    activeCellsCount={this.props.activeCellCounts}
                    timeRemaining={this.state.timeRemaining}
                    setGameState={this.setGameState.bind(this)}/>
            </div>
        );
    }

    // Custom methods
    setupNewGame() {
        this.matrix = [];
        for (let r=0; r < this.props.rows; r++) {
            let row = []
            for (let c=0; c < this.props.columns; c++) {
                row.push(`${r}${c}`);
            }
            this.matrix.push(row);
        }

        let flatMatrix = _.flatten(this.matrix);
        this.setState({ activeCells: _.sampleSize(flatMatrix, this.props.activeCellCounts )} );
    }

    startNewGame() {
        setTimeout(() => this.setGameState('memorize'), 2000);
        setTimeout(() => {
            this.setGameState('recall');
            this.gameTimer = setInterval(() => {
                if (this.state.gameState === 'recall' && this.state.timeRemaining <= 0) {
                    this.setGameState('lost');
                }
                this.setState({ timeRemaining: this.state.timeRemaining - 1 });
            }, 1000);
        }, 4000);
    }

    setGameState(newGameState) {
        switch(newGameState) {
            case 'ready':
                this.setState(this.readyState());
                this.setupNewGame();
                this.startNewGame();
                break;
            case 'memorize':
                this.setState({ gameState: 'memorize' });
                break;
            case 'recall':
                this.setState({ gameState: 'recall' });
                break;
            case 'won':
                this.setState({ gameState: 'won' });
                break;
            case 'lost':
                this.setState({ gameState: 'lost' });
                break;
            default:
                break;
        }
    }

    recordGuess({ cellId, userGuessIsCorrect }) {
        let { wrongGuesses, correctGuesses, gameState } = this.state;

        if (userGuessIsCorrect) {
            correctGuesses.push(cellId);
            if (correctGuesses.length === this.props.activeCellCounts) {
                gameState = 'won';
            }
        } else {
            wrongGuesses.push(cellId);
            if (wrongGuesses.length > this.props.allowedWrongAttempts) {
                gameState = 'lost';
            }
        }

        this.setState({ correctGuesses, wrongGuesses, gameState });
    }
}

Game.defaultProps = {
    allowedWrongAttempts: 2,
    allowedGuessTimeSeconds: 10
}

export default Game;