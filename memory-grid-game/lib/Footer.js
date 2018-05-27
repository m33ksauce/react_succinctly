import React from 'react'

class Footer extends React.Component {
    remainingCount() {
        if (this.props.gameState != 'recall') { 
            return null; 
        }
        return (
            <div>
                <div className="remaining-count">
                    Remaining guesses: {this.props.activeCellsCount - this.props.correctGuesses.length}
                </div>
                <br />
                <div className="reamingin-time">
                    {this.props.timeRemaining} seconds left to guess!
                </div>
            </div>
        )
    }

    handleClick() {
        this.props.setGameState('ready');
    }

    playGame() {
        if (["won", "lost"].indexOf(this.props.gameState) >= 0) {
            return (
                <div className="playAgain">
                    <button onClick={this.handleClick.bind(this)}>Play Again</button>
                </div>
            )
        }
        return  null;
    }

    render() {
        return (
            <div className="footer">
                <div className="hint">
                    {this.props.hints[this.props.gameState]}...
                </div>
                {this.remainingCount()}
                {this.playGame()}
            </div>
        );
    }
}

Footer.defaultProps = {
    hints: {
        ready: "Get Ready",
        memorize: "Memorize",
        recall: "Recall",
        won: "Well Played",
        lost: "Game Over"
    }
}

export default Footer;