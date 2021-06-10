import React, { FC } from 'react';

// Is it correct to use JSX.Element if the function return the React component?
interface Props {
    renderSquare: (i: number) => JSX.Element;
}

const rowCount = 3, colCount = 3;
const Board: FC<Props> = ({ renderSquare }) => {
    return (
        <div className="tic-toe-container">
            {
                [...new Array(rowCount)].map((x, rowIndex) => {
                    return <div className="board-row" key={rowIndex}>
                        { [...new Array(colCount)].map((y, colIndex) => renderSquare(rowIndex*rowCount + colIndex)) }
                    </div>
                })
            }
        </div>
    );
}

export default Board;