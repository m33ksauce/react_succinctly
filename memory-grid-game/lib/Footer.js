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

    render() {
        return (
            <div className="footer">
                <div className="hint">
                    {this.props.hints[this.props.gameState]}...
                </div>
                {this.remainingCount()}
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