import React from 'react';
import _ from 'lodash';
import Row from './Row';
import Cell from './Cell';
import Footer from './Footer';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.matrix = [];
        for (let r=0; r < this.props.rows; r++) {
            let row = []
            for (let c=0; c < this.props.columns; c++) {
                row.push(`${r}${c}`);
            }
            this.matrix.push(row);
        }

        let flatMatrix = _.flatten(this.matrix);
        this.activeCells = _.sampleSize(flatMatrix, this.props.activeCellCounts);

        this.state = { 
            gameState: 'ready',
            wrongGuesses: [],
            correctGuesses: []
        };
    }

    componentDidMount() {
        setTimeout(() => this.setState({ gameState: 'memorize' }), 2000);
        setTimeout(() => this.setState({ gameState: 'recall' }), 4000);
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

    render() {
        let showActiveCells =  ["memorize", "lost"].indexOf(this.state.gameState) >= 0;
        return (
            <div className="grid">
                {this.matrix.map((row, ri) => (
                    <Row key={ri}>
                        {row.map(cellId => <Cell key={cellId} id={cellId} 
                            showActiveCells={showActiveCells} activeCells={this.activeCells}
                            recordGuess={this.recordGuess.bind(this)} {...this.state} />)}
                    </Row>
                ))}
                <Footer {...this.state} 
                    activeCellsCount={this.props.activeCellCounts}/>
            </div>
        );
    }
}

Game.defaultProps = {
    allowedWrongAttempts: 2
}

export default Game;