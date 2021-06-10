import React, { FC } from 'react';
import calculateWinner from "../helper";
import {useDispatch, useSelector} from "react-redux";
import BoardContainer from "./BoardContainer";
import {goToStep, selectHistory, selectStepNumber, selectXIsNext} from "../store/moves/moves.slice";

const Game: FC = () => {
    const dispatch = useDispatch();
    const history = useSelector(selectHistory);
    const xIsNext = useSelector(selectXIsNext);
    const stepNumber = useSelector(selectStepNumber);

    const winner = calculateWinner(history[stepNumber])

    const jumpTo = (step: number) => {
        dispatch(goToStep(step))
    }

    const renderMoves =  () => (
      history.map((step: number, move: number) => {
        const desc = move ?
            `Перейти к ходу #${move}` :
            'К началу игры';
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}> {desc} </button>
            </li>
        )
    }))

    const status = winner
        ? `Выиграл ${winner}`
        : ( stepNumber === 9 ? 'Ничья!' : `Следующий ход: ${xIsNext ? 'X' : 'O'}` );
    return (
        <div className="game">
            <div className="game-board">
                <BoardContainer />
            </div>
            <div className="game-info">
                <div>{ status }</div>
                { renderMoves() }
            </div>
        </div>
    );
}

export default Game;