import React, {FC, useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import calculateWinner from "../helper";
import Square from "./Square";
import Board from "./Board";
import {makeMove, selectHistory, selectStepNumber, selectXIsNext} from "../store/moves/moves.slice";

const BoardContainer: FC = () => {
    const dispatch = useDispatch();
    // Can I combine these steps (10-12 lines) ?
    const history = useSelector(selectHistory);
    const xIsNext = useSelector(selectXIsNext);
    const stepNumber = useSelector(selectStepNumber);
    const squares = history[stepNumber];

    const winner = calculateWinner(history[stepNumber])

    const handleClick = useCallback((i: number) => {
        // Can I move these steps to reducer or middleware?
        const timeInHistory = history.slice(0, stepNumber + 1);
        const current = timeInHistory[stepNumber];
        const squares = [...current];
        if (winner || squares[i]) return;
        squares[i] = xIsNext ? 'X' : 'O';

        dispatch(makeMove({ timeInHistory, squares }))
    }, [history, stepNumber, xIsNext])

    const renderSquare = (i: number) => {
        return (
            <Square
                value={ squares[i] }
                onClick={ () => handleClick(i) }
            />
        );
    }
    return(
        <Board renderSquare={ renderSquare }/>
    );
}

export default BoardContainer;