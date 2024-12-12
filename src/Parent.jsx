import { useState } from 'react';
import Child from './Child.jsx';
import Square from './Square.jsx';
function Parent() {
    const [board, setboard] = useState(Array(9).fill(null));
    const [updatemove, setupdatemove] = useState(true);

    function handleClick(index) {
        const newboard = [...board];
        if (newboard[index] || Calculatewinner(board)) {
            return;
        } else {
            newboard[index] = updatemove ? 'X' : 'O';
            setboard(newboard);
            setupdatemove(!updatemove);
        }
    }
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    const Calculatewinner = (board) => {
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (board[a] && board[a] === board[b] && board[b] === board[c]) {
                alert(`${board[a]} Wins!`);
                return board[a]; 
            }
        }
        return null;
    }
    const Passindex=(index)=>{
        return(
            <>
        <Square index={index} value={board[index]} handleClick={handleClick}/>
        </>
        );
    }
    return(
        <>
        <Child Passindex={Passindex} />
        </>
    );

}
export default Parent;