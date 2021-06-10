import React, {FC, MouseEvent} from 'react';

interface Props {
    onClick: (e: MouseEvent) => void;
    value: string;
}

const Square: FC<Props> = ({ onClick, value }) => {
    return (
        <button
            className="square"
            onClick={onClick}>
            { value }
        </button>
    );
}

export default React.memo(Square);