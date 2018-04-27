import React from 'react'

class Cell extends React.Component {
    active() {
        return this.props.activeCells.indexOf(this.props.id) >= 0;
    }

    handleClick() {
        if (this.props.gameState === "recall") {
            this.props.recordGuess({
                cellId: this.props.id,
                userGuessIsCorrect: this.active()                
            });
        }
    }
    
    render() {
        let className = "cell";
        if (this.props.gameState === "memorize" && this.active()) {
            className += " active";
        }

        return (
            <div className={className} onClick={this.handleClick.bind(this)}>
            </div>
        );
    }
}

export default Cell;