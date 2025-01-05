import { useState } from 'react';
import Child from './Child.jsx';
import Square from './Square.jsx';

// Define the winning lines globally
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

// Calculate winner function
const CalculateWinner = (board) => {
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (board[a] && board[a] === board[b] && board[b] === board[c]) {
            return board[a]; // Return 'X' or 'O' as the winner
        }
    }
    return null;
};

function Parent() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true); // 'X' starts the game

    // Handle square click
    const handleClick = (index) => {
        const newBoard = [...board];
        
        // Prevent click if the square is already filled or the game has a winner
        if (newBoard[index] || CalculateWinner(board)) return;

        // Mark the square with 'X' or 'O' based on who's turn it is
        newBoard[index] = isXNext ? 'X' : 'O';
        setBoard(newBoard);

        // Toggle the player turn
        setIsXNext(!isXNext);
    };

    const winner = CalculateWinner(board);
    let status;
    if (winner) {
        alert(`Winner: ${winner}`);
    } else if (board.every(square => square !== null)) {
        alert( "It's a draw!");
    } else {
        status = `Next player: ${isXNext ? 'X' : 'O'}`;
    }

    return (
        <>
            <div>{status}</div>
            <Child Passindex={(index) => <Square key={index} value={board[index]} index={index} handleClick={handleClick} />} />
        </>
    );
}

export default Parent;
